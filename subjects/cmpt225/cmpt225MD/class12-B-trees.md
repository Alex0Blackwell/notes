# CMPT 225 - B-trees

## m-ary Search Tree
Rooted tree where
- each node may have up to m children
- a node with k children has k-1 keys
- keys and children are arraged so that
  The natural generalization of in-order traversal visits keys in order
  Search is a natural generalization of BST search

## Order m B-tree

- m-ary search tree
- the root has between 2 and m chilren, or is a leaf
- non-leaf nodes, other than the root have between ceil(m/2) and m children
- data items stored at leaves; keys in other nodes guide search
- in a non-leaf node, the ith key is the smallest key stored in the i+1st subtree
- all leaves are at the same depth
- for some fixed l > 2, every leaf has between ceil(l/2) and l keys, unless there are fewer than ceil(l/2) keys in the tree.


## Perfect Trees

A perfect m-ary ree is an m-ary tree where:
- every ndoe has 0 or m children
- every leaf has the same depth
