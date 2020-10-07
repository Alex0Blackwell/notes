# Math 240 - The Inverse of a Matrix

## Terminology

multiplicative inverse

Identity matrix
- squares on the diagonal
- useful because the 1's just give what is multiplied by it

Invertible
- a matrix that has an inverse

### Matrix inverse
Let A and B be two square matrices. B is an inverse of A if AB = I = BA

If we multiply A by B and get the identity matrix, then A and B are inverses

If a matrix A has an inverse, then this inverse is unique.
Suppose B and C are nxn matrices with
AB = I = BA and AC = I = CA

But then
C = CI `// because multiplying by the identity matrix is just C`
CI = C(AB) `// from above`
(CA)B = IB `// matrix multiplication is associative`
IB = B

Therefore C = B

### Finding inverses for 2x2 matrices
A 2x2 matrix is invertible if and only if ad-bc != 0

1. Inverse(Inverse(A)) = A
2. Inverse(AB) = Inverse(B)Inverse(A) `// note order here`
3. Inverse(Transpose(A)) = Transpose(Inverse(A))

Proofs:
1_ Inverse(A)A = I = A*Inverse(A) so by definition of inverse
Inverse(A) is also invertable and Inverse(Inverse(A)) = A

2_ AB(Inverse(B)*Inverse(A)) = A(B*Inverse)*Inverse(A) = AI Inverse(A) = I
Same thing with (Inverse(B)*Inverse(A))AB
So by defintion of inverses AB is invertible and Inverse(AB) = Inverse(B)*Inverse(A)

Let A be a square invertible matrix. Then for every B in Rn, the system Ax = b has the **unique** solution x = Inverse(A)b

This is more useful in theory but usually we just row reduce.

### Elementary matrices
An elementary matrix is a matrix obtained by applying **exactly one** elementary row operation to the **identity matrix**.

One operation could be
1. scaling
2. interchange
3. replacement

Let E be a square elementary matrix. Let A be any nxp matrix. Then EA is the matrix resulting from performing on A the elementary row operation corresponding to E.

When we multiply these two, the scaling elementary matrix scales A, the interchage interchages A, and the replacement replaces A with another row of A.

#### Theorem
Each Elementary matrix is invertible. The inverse of E is the elementary matrix for the row operation that reverses E.
