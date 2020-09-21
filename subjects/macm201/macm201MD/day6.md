# MACM day 6 - Graphs

## Summary
Graphs can be pipartite graphs. A graph can have subgraphs. These subgraphs can be spanning meaning they include every vertice. An induced subgraph must have all the edges connecting the vertices that the original graph has.

## Terminology
Bipartite graph
A graph G=(V,E) is bipartitie if we can partition the vertices into two sets V1 and V2 such that
1. V1 n V2 = empty set
2. V1 union V2 = V

Subgraph
Let G = (V,E) and G' = (V',E') be two graphs.
G is a Subgraph of G if V' is a subset of V and E' is a subset of E
if V'=V then we call G' a spanning subgraph of G

A spanning tree has all edges connected
Note: A spanning subgraph can have no edges
G is a subgraph of itself

Path
- if P is a subgraph of G that is a path we call P a path of G

Cycle
- if C is a subgraph of G that is a cycle we call C a cycle of G

Induced subgraph
- if the edge exists between the vertices you plot it in the induced subgraph
