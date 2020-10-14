# MATH 240 - Vector Spaces and Subspaces

## Abstract vector spaces
If we can say that something is the same structure then we can apply all of our theories of linear algebra.

Axioms do not need to be proved.
We should be able to prove anything with just our axioms.

### The axioms of a vector space
Definition: The axioms of a vector space

A vector space is a non-empty set V of (mathematical) objects, called vectors on which
are defined two operations called addition and multiplication by scalars, satisfying the
ten following axioms, that must hold for all vectors u, v, w in V and scalars c and d.

1. The sum of u and v, denoted by u + v, is a vector belonging to V.
2. u+v=v+u.
3. (u+v)+w=u+(v+w).
4. There exists a zero vector 0 such that u+ 0= u.
5. For each u, there exists a vector —u such that u+ (-u) = 0.
6. The scalar multiple of u by c, denoted by cu, is a vector belonging to V.
7. c(u+v)=cu+cv.
8. (e+d)u=cu+du.
9. c(du) = (cd)u.
10. lu=u.

**2, 3, 7, 8, and 9** are related arithmetic
**4, 5, and 10** are existence of special elements
**1 and 6** closure over scalar addition and multiplication.

1 and 6 are very useful for disproving.

### Examples
Rn is a vector space
- vectors are vectors in the usual sense
- vector addition in the usual sense
- scalar multiplication in the usual sense

The set of Pn of polynomials of degree **at most** n.
- here, a "vector" is a *polynomial*
- addition and scalar multiplication are as usual for polynomials
- the zero vector is the constant polynomial: 0 = 0 + 0x + 0x^2 + ... + 0x^n

The set Mmxn of mxn matrices
- here a vector is a matrix, and addition and scalar multiplication are as we are used to as we defined them.
- Our zero vector is the matrix of all zeros.

The set of real valued functions of a real variable.
- here a vector is a function.
- f + g is a function (f+g)(x) = f(x) + g(x)
- cf is the function (cf)(x) = cf(x)
- 0 is is the function which is 0 for all x

#### More advanced examples
Zero vector space {0}
Check the ten axioms:
1. 0 + 0 = 0 which is in {0}
2. 0 + 0 = 0 + 0
3. (0 + 0) + 0 = 0 + (0 + 0)
4. clearly! 0 + 0 = 0
5. 0 + 0 = 0
6. c + 0 = 0

Let V be the set of ordered pairs (a, b)
with b != 0. Define
(a1, b1) + (a2, b2) = (a1 + a2, b1b2)
c(a, b) = (ca, b)
This is a vector space! Check the axioms.
1. (a1, b1) + (a2, b2) = (a1 + a2, b1b2) *node b1b2 != 0 because b1 and b2 != 0*
2. (a1 + a2, b1b2) = (a1 + a2, b2b1) = (a2, b2) + (a1, b1)
3. ...

### Non Examples
Set of polynomials of degree **exactly** n.
Explanation here https://youtu.be/e7DJGdolvV4?t=350


### A few proporties
Property: 0 is unique
To prove, suppose there is another vector z where v + z = v.
Show that this z must be 0 making a contradiction.

Property: 0v = 0 for every v in V
To prove,
0v = 0
(0 + 0)v = 0
0v + 0v = 0
let some vector a be the vector -0v *(given by 5)*
then 0 = 0v + a
(0v + 0v) + a = 0
0v + (0v + a) = 0  *(given by 3)*
0v + 0 = 0 *(because we defined this)*

Property: c0 = 0 for every scalar c
To Prove,
c0 = c(0 + 0) *(given by 4)*
c0 = c0 + c0 *(given by 7)*
let a = -c0 *(given by 5)*
0 = c0 + a *(given by 5)*
0 = (c0 + c0) + a
0 = c0 + (c0 + a) *(given by 3)*
now substitute what we found by 5
0 = c0 + 0 *(given by 4)*
0 = c0

## Subspaces
Definition. Let V be a vector space and let W be a subset of V. Then W is a subspace
of V if W is a vector space with the smae addition, scalar multiplication, and zero as V.

### Examples
Pn is a subspace of the vector space of real valued function on real variables.
- 0 in Rn is the constant polynomial 0 which as a function takes on the value 0 everywhere so it agrees with the 0 for real functions.
- Addition in Rn is addition of polynomials
- Scalar multiplication: in Rn multiplies each coefficient
  - Again, this multiplies the value and so agrees with scalar multiplication of real functions.

A line in R2 going through the origin is a subspace of R2

A point of just the zero vector *(at the origin)* is a subspace of R2

R2 is a subspace of R2

### Proposition
Proposition. Let V be a vector space. Let W be a subset of V. Then W is a subspace
of V if and only if it satisfies the following three properties.

(A) The zero vector 0 of V is in W.
(B) W is closed under addition.
(C) W is closed under scalar multiplication.

Also, W is a vector space as well.

Proposition: Let V be a vector space, and v1, ... ,vp be p vectors in V. Then Span(v1, ... vp) is a subspace of V.
