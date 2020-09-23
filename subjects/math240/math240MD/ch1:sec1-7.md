# Chapter 1 - section 1.7: Linear independence

## Summary
Vectors are considered **linearly dependent** if not every vector is needed to reach every point in the span. We can tell this by setting the coefficient matrix **equal to the zero vector** and testing to see if there exists a solution other than the **trivial solution**.

## Terminology

***Linearly Independent***
- every vector is needed
- `x1V1 + ... + xnVn = 0`
- has only the trivial solution
***Linearly dependent***
- not every vector is needed
- `x1V1 + ... + xnVn = 0`
- has a non-trivial solution
- `c1V1 + ... + cnVn = 0` for scalar `c1...cp` that are not **all** zero
***explicit linear dependence***
- A particular non-trivial solution
- pick valid numbers for coefficients


## Linear Independence

> Are there any extraneous (useless) vectors in a span
If yes, then the vectors are linearly dependent

Usually the span of 2 vectors is a plane. But if the 2 vectors are on the same line through the origin then the span is just the line.

When 2 vectors are on the same line, then if both are nonzero then either one of them gives that same line as a span -> either one is extraneous.

Any set {V1...Vp} of vectors in R^n with p > n is linearly dependent
(If there are more columns than rows then it is linearly dependent)

A set of **two** vectors is linearly dependent *if and only if* one is a multiple of the other.

A set of **two or more** vectors is linearly dependent *if and only if* at least one of them is in the span of the others.
