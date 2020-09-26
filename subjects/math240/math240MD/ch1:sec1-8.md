# MATH 240 CH1.8 - Linear Transformations

## Summary
A **linear transformation** is a way to collectively move all points in R^n to R^m. If this is done from R2 to R2 then it is a **shear**. The matrix can act as a **function** so you can put R2 in and get R3 for example. The function maps Rn to Rm and maps the other way around. This means you can also find what x is from the **image** under T by solving an **augmented matrix**.


## Terminology

Domain
- R^n
- What we map from

Codomain
- R^m
- Where we could possibly map to

Image of x under T
-  y = T(x)
- What you get out of the transformation when you put x in

Range
- {T(x) in R| x in R^n}
- Set of all the values we can actually map to

## Linear Transformations

> a linear transformation is multiplying a vector by a matrix

T: R^n -> R^m that maps x->Ax

T(x) = Ax

It is a linear transformation if
1. T(v+w) = T(v)+T(w)
2. T(cv) = cT(v)

For all v, w in Rn and c a scalar

*Every matrix transformation is a linear transformation*

Let T : Rn -> Rm be a linear transformation. Then
1. T(0) = 0
2. T(cu + dv) = cT(u) + dT(v)

For all v, w in Rn and c a scalar


## Matrices as functions

> a matrix can be used to defien a function from vectors of one size to vectors of potentially another size

For example:
Define a function from R^3 to R^2 which takes x in R^# to Ax in R^2.

Definition. A transformation T from Rn to Rm is a rule that assigns to each x in Rn the image T(x) in Rm.
T: Rn -> Rm
R : x |--> T(x)  `// T maps x into T(x)`


## Matrix Transformations

>Every m x n matrix A defiens a function from Rn to Rm that is called a matrix transformation, T: Rn->Rm, that is defiend by the rule:
T(x) = Ax
T: x |--> Ax

## Shear Transformation

the transformation **T: R2 -> R2** defined by **T(x)=A(x)** is called a shear transformation.

We move points around and the image is a slanted version of the original.
