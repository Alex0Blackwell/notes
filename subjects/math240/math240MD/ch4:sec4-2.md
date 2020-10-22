# NULL Spaces, column spaces, and linear transformations

## Terminology

Kernel / nullspace
- of a linear transformation T: V -> W is the set of all vectors (v in V) such that T(v) = 0.

Row space
- Row A is Col A transpose


Definition. Let V and W be two vector spaces. A function T: V - W is a **linear transformation** if

1. T(u+v)=T(u)+T(v) for all u,v in V.

2. T(cu) = cT(u) for all u in V and scalar c.

The range of a linear transformation T : V —> W is the set of all vectors of
W which can be written as T(u) for some u in V.

### The column space of a matrix

Basically each column is a vector so the column space is just the span of all of those columns.

Definition. Let A be an mxn matrix. The column space of A, written ColA is the span of the columns of A.

Proposition. Let A be an mxn matrix. ColA is a subspace of Rm.

### The null space of a matrix
Let A be an mxn matrix. The null space of A, written NulA is the set of solutions to the homogeneous system Ax = 0.

If something asks if it is in the null space, you just need to check if the vector times the matrix is equal to zero.

If T is a linear transformation with matrix A, then the **kernel** of T is NulA.

Let A be an mxn matrix. NulA is a subspace of Rn.
1. A0 = 0 so 0 is in NulA
2. If Av = 0 and Aw = 0 then A(v + w) = Av + Aw = 0 + 0 = 0
