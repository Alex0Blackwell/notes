# MATH 240 - Matrix Operations

## Summary
Matrices can be multiplied against eachother if the amount of rows in one is the same as the amount of columns in the other. A matrix can be split into vectors by splitting by the columns. These vectors can then by multiplied against the matrix using vector-matrix multiplication. This is why it works but there is a short way to do this with matrix multiplication. The transpose of a matrix is where you take the first row and it becomes the first column, you take the second... it becomes the second...

## Terminology
aij is the (i, j)th entry of a

### Matrix Addition
Let A and B be two m x n matrices.
The sum of A and B is the matrix whos columsn are sums of the corresponding columns of A and B.

The sum is not defined if A and B are not the same size.

The (i, j)th entry of A+B is aij+bij

Matrix addition is accociative.
Also, A + 0 = A

### Scalar multiplication

> The scalar multiple of a matrix A by a scalar c is the matrix
written cA, whose columsn are c times the corresponding columns of A.

Multiply the scalar with every number in the matrix.
Note:
0 * A = zero vector
(-1) * A = -A

1. c(A + B) = cA + cB
2. (c + d)A = cA + dA
3. c(d * A) = (c * d)A

### Transpose
A^t columns are formed from the corresponding rows of A.
Rows and columns are switched.

The first row becomes the first column.
The second row becomes the second column.
...
The nth row becomes the nth column.

1. (A^t)^t = A
2. (A + B)^t = A^t + B^t
3. (cA)^t = c(A^t)

## Matrix Multiplication

Remember from [1.8](https://notes.alexblackwell.ca/subjects/math240/math240PDF/ch1:sec1-8.pdf) that a matrix A: m x n, will be transformed T: Rn -> Rm
From Rn space to Rm.

Now let
A be a m x p matrix and
B be a p x n matrix and
x be a vector from Rn.

What is ABx?
You multiply x by B to bring you into Rp space because B is in `p x n` space.
Then you multiply this value by A to bring you into Rm space beacuse A is in `m x p` space.

But you can also just go to the destination right away by multiplying x by `AB`.

If you have a matrix *A* and a matrix *B* you can multiply them if:
A is **m x n** and B is **n x p**.

The first matrix needs to have the same number of columns as the second one has rows.
The resulting matrix will be **m x p**.

AB is UNDEFINED if the sizes don't match.

#### Row-column rule for computing AB

if the product of AB is defind, then the entry in row i, column j of AB is the sum of the products of the corresponding entries from row i in A and column j in B.

---
Properties that matrix multiplication does NOT satisfy.
it is **NOT** true in general that
1. AB = BA
2. AB = AC implies B = C
3. AB = 0 implies A = 0 or B = 0
---
