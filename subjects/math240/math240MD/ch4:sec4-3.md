# MATH 240 Ch: 4.3 Basis

### Basis of a vector space

A set of vectors in a vector space V is linearly independent if it only has the trivial solution.
We can't necessarily just write this using a matrix, because we might not be dealing with matrices.

Ex. is {1, 1+t^2} linearly independent?
c1 * 1 + c2(1+t^2) = 0
We know that two vectors are linearly independent if one is not a multiple of another.
So we can say that yes these are linearly independent because they are not multiples of eachother.

Ex2. is {2, 1+t, 3 + 2t} linearly independent?
1(3+2t) + (-2)(1+t) + (-0.5)(2) = 0
therefore dependent.

**Definition** let V be a vector space and B is a set of n vectors. B is a basis of B if
1. B is linearly independent
2. V = spanB

A matrix is *symmetric* if transpose(A) = A

### How to find a basis of a vector space
Every spanning set contains a basis.
Get a vector that is a linear combination of the others and remove it and then repeat.
