# Chapter 1: Linear Equations in linear algebra

Systems can have solutions. Namely, **exactly one solution**, **no solution**, or **infinitely many solutions**. Make simpler equivalent systems and solve those row equivalent matrixes.
## Summary

## Terminology

- ***solution***
  - sub this in the system to get a true statement
- ***equivalent systems***
  - systems may look different but are equivalent if their solutions are the same
  - example: multiply whole system by a constant
- ***consistent*** / ***does a solution exist***
  - at **least** one solution
- ***inconsistent***
  - **no** solution exists
  - often when [0 0 ... 0  n]  *// because 0 != n*
- ***unique***
  - one solution
- ***m x n matrix***
  - m is rows, n is columns
- ***coefficient matrix***
  - does not include right-hand constants
- ***augmented matrix***
  - does include right-hand constants
- ***row equivalent***
  - elementary row operations changed *B* to *A*; written *B ~ A*
  - same solution set
  - elementary row operatins are reversable

## Section 1.1

- a linear equation (what is it?)
  - y = mx+b  ||  y-y1 = m(x-x1)  ||  x = 0
  - 4x + 3y + 2z = 1   *// could be multiple dimensions*
  - Don't need **x, y, z** instead use **x1, x2, ... xn** because there could be a wack ton of dimensions

- a linear equation (what is it not?)
  - x^2 = y  *// not parabola*
  - x1 * x2 = 3  *// variables multiplied*
  - **can't ever have anything raised to a power**

#### In general...
A linear equation can be written like **a1x1 + a2x2 + ... anxn = b**.  

Contants can be "0".

- a system (what is it?)
  - you can use substitution
  - they are in the same universe
  - the value that satisfies it works for all

### Solving linear equations

*Big idea:* make an equivalent system that is simpler and solve that one.

**Three things you can do to make an equivalent system**
1. Interchange two equations
  - move them around
2. Multiply an entire equation by a nonzero constant
  - scale it
3. Add / subtract two equations
  - a = b, c = d  *=>*  a +- c = b +- d

### Format how we write linear equations

- linear terms on left side
- constants on right side
- variables in order  

- welcome *matrix notation*

### Matrix notation

**Elementary Row Operations** *(similar to equivalent system operations)*
1. *Exchange:* Interchange two rows
2. *Scale:* Multiply row by non-zero constant
3. *Remplacement:* Replace one row by the sum of itself and a multiple of another row  

Coming up...  
solve more systematically!
