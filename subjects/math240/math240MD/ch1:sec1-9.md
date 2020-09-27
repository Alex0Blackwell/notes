# MATH 240 CH1.9 - The matrix of a linear transformation

## Summary
The **unit vector** is a vector with all zeros except for a one in the ith row. These unit vectors are useful when trying to figure out how something is mapped using the matrix A. There can be functions that are **one-to-one** and functions that are **onto**. One-to-one functions are where each value *a* is mapped to at most one value *b*. Onto is where every *b* value must be mapped to from a value *a*.

## Terminology

Unit Vector (en)
- All zeros but there is a 1 in the ith position
- not enough to just define it as a vector, we need to know the dimension of the space
- e1 = [ 1 0 ]
- e2 = [ 0 1 ]

Identitiy matrix In
- In = [e1 ... en]

Standard matrix
- like a coefficient matrix denoted A

One-to-One
- **a->b** where every **b** has *at most one* **a**
- Can have values that are not mapped to
- passes the horizontal line test
- if you have **b** do you know **a**?
- T is one-to-one if the columns of A are linearly independent
- ***The linear equation T(x) = 0 has only the trivial solution***

Onto
- **a->b** where every **b** is the image of *at least one* **a**
- The codomain is the range
- Cannot possibly have a value that is not mapped to
- ***The linear transformaion is onto if and only if the columns of A span Rm***


## The matrix of a linear transformation
Every linear transformation is a matrix transformation

> let T(x) be a linear transformaion. Then there is a unique matrix A such that T(x) = Ax for every x in Rn

Often need to find T(e1) + T(e2) + ...

## One-to-one and onto
**one-to-one**: comes down to homogeneous systems having only the trivial solution.
**onto**: comes down to the system columns spanning Rm
