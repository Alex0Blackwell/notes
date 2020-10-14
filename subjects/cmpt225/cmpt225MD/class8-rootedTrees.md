# CMPT 225 - Rooted Trees

## Terminology
- Graph
  - a pair with vertices and nodes
  - G{V, E}
  - V is a set of vertices
  - E is the set of connected vertices (edges)
  - Can be directed or undirected (for us, by default is undirected)


- Path
  - A sequence of vertices


- Simple Path
  - All verices are distinct


- Connected
  - Every vertex can be reached by any other vertex


- Cycle
  - {V0, ... , Vn} where V0 equals Vn


- Simple cycle
  - A cycle that is a simple path; no repeated vertices


- Tree
  - A connected, acyclic graph
- Fact: every tree has n-1 edges

### Rooted Tree Terminology
Rooted Tree
- we distinguish one node as the "root"
- The root can induce a direction on the edges (usually towards the root)


- Relations:
  - Parent
  - Siblings
  - Ancestors
  - Descendents

Note: leafs do not have children, and the root does not have a parent

A rooted tree is K-ary if no node has more than k children
A rooted tree is binary if no node has more than 2 children
Ordered if the children of every node are ordered.

Depth of V: the length of the path from V to the root.
Height of V: length of longest path from V to a descendent of V


- Height of tree T:
  - The height is its root.
  - The max height of any node in T
  - The max depth of any node in T


Subtree rooted at V: tree with root V and containing all descendents of V
left subtree: the subtree of the left node
right subtree: the subtree of the right node
