boltsh
======

A Bolt Cypher Shell example built with [oclif](https://oclif.io) the "open source cli framework" from SalesForce/Heroku.

[![Version](https://img.shields.io/npm/v/boltsh.svg)](https://npmjs.org/package/boltsh)
[![CircleCI](https://circleci.com/gh/jexp/boltsh/tree/master.svg?style=shield)](https://circleci.com/gh/jexp/boltsh/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/jexp/boltsh?branch=master&svg=true)](https://ci.appveyor.com/project/jexp/boltsh/branch/master)
[![Codecov](https://codecov.io/gh/jexp/boltsh/branch/master/graph/badge.svg)](https://codecov.io/gh/jexp/boltsh)
[![Downloads/week](https://img.shields.io/npm/dw/boltsh.svg)](https://npmjs.org/package/boltsh)
[![License](https://img.shields.io/npm/l/boltsh.svg)](https://github.com/jexp/boltsh/blob/master/package.json)

## Usage

### Flags:

* `-a bolt-address`, .e.g `-a bolt://localhost:7687`
* `-u username`, e.g. `-u neo4j`
* `-p password`, e.g. `-p "xJMa2iacc}HGqsbjpuTaXpwF"`
* `-t` table mode

### Argument - Cypher Query

Just pass your Cypher query in double quotes, you can use single quotes within the query.

```
boltsh -p "xJMa2iacc}HGqsbjpuTaXpwF" -t "MATCH (n:Person)-->(m:Movie) RETURN n.name as person, n.born, collect(m.title) as movies LIMIT 10"

.-------------------------------------------------------------------------------------.
|       n.name       | n.born |                        movies                         |
|--------------------|--------|-------------------------------------------------------|
| Diane Keaton       | 1946   | Something's Gotta Give                                |
| Christina Ricci    | 1980   | Speed Racer                                           |
| Robert Zemeckis    | 1951   | Cast Away,The Polar Express                           |
| Renee Zellweger    | 1969   | Jerry Maguire                                         |
| Brooke Langton     | 1970   | The Replacements                                      |
| Kiefer Sutherland  | 1966   | A Few Good Men,Stand By Me                            |
| Greg Kinnear       | 1963   | As Good as It Gets,You've Got Mail                    |
| Ed Harris          | 1950   | Apollo 13                                             |
| Bruno Kirby        | 1949   | When Harry Met Sally                                  |
| Laurence Fishburne | 1961   | The Matrix,The Matrix Reloaded,The Matrix Revolutions |
'-------------------------------------------------------------------------------------'
Returned 10 row(s) in 16 ms.
```


## References

* [oclif docs](https://oclif.io/docs)
* [oclif example](https://github.com/oclif?utf8=%E2%9C%93&q=example&type=&language=)

* [neo4j-javascript-driver](https://github.com/neo4j/neo4j-javascript-driver)
* [ascii-table](https://github.com/sorensen/ascii-table)

* [neo4j](https://neo4j.com/developer/get-started)
* [neo4j desktop](https://neo4j.com/download)
* [neo4j sandbox](https://neo4j.com/sandbox)
* [cypher](https://neo4j.com/developer/cypher)
