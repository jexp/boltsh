import { Command, flags } from '@oclif/command'
import * as neo4j from 'neo4j-driver'
import * as AsciiTable from 'ascii-table'

class Boltsh extends Command {
  static description = 'Execute Cypher Queries via Bolt'

  static examples = [
    `$ boltsh -a bolt://localhost -u neo4j -p test "MATCH (n:Person) return n.name"
n.name
Keanu Reeves
Tom Hanks
...
`,
  ]

  static flags = {
    version: flags.version({ char: 'v' }),
    // add --help flag to show CLI version
    help: flags.help({ char: 'h' }),

    address: flags.string({ char: 'a', description: 'bolt address', required: true, default: 'bolt://localhost' }),
    user: flags.string({ char: 'u', description: 'neo4j user', required: true, default: 'neo4j' }),
    password: flags.string({ char: 'p', description: 'user password', required: true }),
    table: flags.boolean({ char: 't', description: 'Table Format' })
  }

  static args = [{ name: 'query', required: true, description: 'Cypher Query to Run' }]

  async run() {
    const { args, flags } = this.parse(Boltsh)

    // this.log(`hello ${flags.address} ${flags.user} ${args.query} from ${__filename}!`)

    const driver = neo4j.v1.driver(flags.address, neo4j.v1.auth.basic(flags.user, flags.password))
    const session = driver.session()
    const result = await session.run(args.query)
    session.close()
    const records = result.records;
    const data = { heading: records[0].keys, rows: records.map(r => r.keys.map(k => r.get(k))) }
    if (flags.table) {
      const table = AsciiTable.factory(data)
      this.log(table.toString())
    } else {
      this.log(data.heading.join("\t"))
      data.rows.forEach(r => this.log(r.join("\t")))
    }
    this.log(`Returned ${records.length} row(s) in ${result.summary.resultAvailableAfter.toNumber() + result.summary.resultConsumedAfter.toNumber()} ms.`)
    driver.close()

  }
}

export = Boltsh
