# Chapter 1: Linear Equations in linear algebra - vector equations

## Summary
Vectors exist in R^n space. You can add vectors in the same R^n. A vector or a collection of vectors will have a span. The span is all the points in R^n space the vector(s) can reach. You can tell if a vector exists in a span by making an augmented matrix and testing if the system is consistent.

## Terminology

Vector
  - list of ordered numbers
  - matrix with **single** column
  - arrow on top, could be bar on bottom

Scalar multiple
  - multiplying each entry of *v* by *c*
  - scale a vector

R^n
  - n-dimensional real space
  - the set of all column vectors with n real entries
  - **R^n = {(x1 x2 ... xn) | x1, x2 ... xn E R}**

Zero vector
  - all entries zero
  - a zero vector of each size (R^1, R^2 ... R^n)
  - but it should be clear from context what size is meant
  - Graphically it's just the origin

parallelagram rule
  - adding vectors tip and tail

weights
  - constants in front of vectors

linear combinations
  - adding v1, v2 ... vn with weights c1, c2 ... cn

span
  - the set of all linear combinations of v1, ... vn



## Vectors

> Two vectors in R^n are equal if their corresponding entries are equal

(1 -2) != (-2 1)
order matters!

### R^n
R^1 = real line
**{x|xER}**

R^1 = real plane
**{(x y)|x,yER}**
Like cartisian plane but instead of (x, y) we use vector notation. (x y) *vertical*

### Arithmetic of vectors in R^n

The sum of two vectors are obtained by adding the corresponding entries. (Slap em' together)

```c++
1. u+v     = v+u
2. (u+v)+w = u+(v+w)
3. (u+0)   = u
4. u+(-u)  = 0
5. c(u+v)  = cu+cv
6. (c+d)u  = cu+du
7. c(du)   = (cd)u
8. 1u      = u
```

### Spans

The span of a single vector (multiply it by any Real number). The set of all multiples of that vector. Will get a line as long as it isn't a zero vector

in R^2, if we take another vector w not on the line, and not a zero vector, then span{v, w} is any Real number in R^2.

in R^3, if we take another vector w not on the line, and not a zero vector, then span{v, w} is a plane through the origin in R^3 space containing w and v.

span{0} = 0

span{v, 2v} = span{v} *// line through v and 0*

### Representing a linear system using vector equations

x1 - 2x2 + x3 = 5
x1 -  x2 - x3 = 0
==
x1(1 1) + x2(-2 -1) + x3(1 -1) = (5 0)

> solving a linear system is equivalent to finding a linear combination of the coefficient vectors which is equal to a particular other vector

From the point of view of spans, asking if *b* is in `span{v1, ... vp}` is the same as asking if `x1v1 + x2v2 + ... + xpvp = b` has a solution. That is the same as asking if the system with augmented matrix is consistent.
Row Reduction Answers this!
