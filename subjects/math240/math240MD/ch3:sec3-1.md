# MATH 240 - Chapter 3.1 Determinants

**Definition** The determinant of A  is detA = ad-bc.

3 features of this number that we would like to be able to generatlize to arbitrary nxn matrices.

An explicit expression in terms of the elements of the matrix, in the 2x2 case, ad-bc.
We would like a formula for the inverse, along the lines of 1/(ab-bc) and switch a and d, negate b and c, using the determinant in the nxn case.

### Cofactor expansion (Laplace expansion)

**Definition** Let A be an mxn matrix and two integers i, j such that 1 <= i <= m, i <= j <= n. Then we denote by Aij the submatrix of A obtained by deleting row i and column j from A.

Note that aij is the number in row i and column j, and Aij is a submatrix of A.

detA = a11 detA11 - a12 detA12 + ... + (-1)^(n+1)a1n detA1n

Just use this recursively until you hit the 2x2 case and compute that

**Cofactors**
The (i, j)-cofactor of A is defined to be
Cij = (-1)^(i+j)*detAij

This (-1)^(i+j) just gives a checkerboard matrix + - pattern.

**Proposition** *computing determinants*
For any row i the determinant of A can be expressed as
detA = ai1Ci1 + ai2Ci2 + ... + ainCin

For any column j the determinant can be expressed as
detA = a1jC1j + a2jC2j + ... + anjCnj

### Determinants and row operations

**Proposition** (Swapping rows change the sign of the determinant)
Suppose A and A' are nxn matrices such that A' is obtained from A by swapping two rows. Then detA = -detA'
