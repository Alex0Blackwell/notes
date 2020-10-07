# Math 240 - Inverting Matrices
How do we find the inverse of a matrix

## Terminology

#### Theorem
An nxn matrix A is invertible if and only if A is row equivalent to In (the nxn identity matrix)
In this case, any sequence of elementary row operations that reduces A to In also transforms In into Inverse(A)

#### Algorithm to compute Inverse(A)
1. Take the matrix [A|In]
2. row reduce

If A is row equivalent to In, we will obtain a matrix [In|Inverse(A)]
Otherwise, A is not invertible

Basically we augment the entire matrix with the identity matrix of the same size.
You need to get to REF on the left side.
That bad boy on the left is the Identity matrix you used to have on the right side.
The thing on the right is now the inverse!

### Invertible matrices and linear transformations

#### Definition
A linear transformation T: Rn -> Rn is invertible if there exists a linear transformation S: Rn -> Rn such that
1. T(S(x)) = x for all x in Rn
2. S(T(x)) = x for all x in Rn

### The invertible matrix theorem
Theorem. Let A be a square n x n matrix. The following statements are equivalent.
That is, for a given A, they are either all true or all false.

(a) A is invertible.
(b) A is row equivalent to In
(c) A has n pivot positions.
(d) The equation Ax = 0 has only the trivial solution.
(e) The columns of A are linearly independent.
(f) The linear transformation with standard matrix A is one-to-one.
(g) The equation Ax = b is consistent for each b in Rn
(h) The columns of A span Rn
(i) The linear transformation with standard matrix A maps Rn onto Rn.
(j) There is an n x n matrix C such that CA=In
(k) There is an n x n matrix D such that AD=In
(l) At is invertible.

This means that if you have an nxn matrix and you need to know if it is invertable for example, you can just see if it has a pivot in each column.
