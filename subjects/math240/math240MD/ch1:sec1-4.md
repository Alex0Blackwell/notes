
# Chapter 1: Linear Equations in linear algebra - The matrix Equation

## Summary
Adding the matrix equation to our epic linear algebra arsenal is the final piece of the puzzle for representing a linear system. We now have the matrix equation, a linear combination, the augmented matrix, and the original formulation. All these are exactly the same.

## Terminology
TFAE
- the following statements are equivalent
- either all true or all false

## The matrix Equation
`Ax = b`

### Four ways to represent a linear system
let A be an mxn matrix with columns [a1...an]
**1)** the matrix equation `Ax = b`
**2)** a linear combination `x1*a1+x2*a2+...+xnan = b`
**3** the augmented matrix `[A|b]`
**4)** the original formulation
```py
a11x1+a12x2+...+a1nxn= b1
a21x1+a22x2+...+a2nxn= b2
...
am1x1+am2x2+...+amnxn= bm
```
### Property
Let A be an mxn matrix, u and v two vectors in R^n, and c a scalar
`A(u+v) = Au+Av`
`A(cu) = cAu`

### Main Theorem
Theorem. Let A be an m x n matrix. The following statements are equivalent (TFAE:
for a given A they are either all four true or all four false):

(a) For each b in R^m, the equation Ax = b has a solution.
(b) Each b in R^m is a linear combination of the columns of A.
(c) The columns of A span R^m.
(d) A has a pivot position in every row.

*Note A is the coefficient matrix not the augmented matrix*

The 4 ways of looking at systems tells us tht c) is equivalent to saying that the system with augmented matrix [A|b] is consistent for all b
Write [u|d] for the Reduced Echelon form
