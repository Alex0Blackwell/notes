# Chapter 1: Linear Equations in linear algebra

## Summary
Every matrix can be reduced to Echelon form. Echelon form is useful for determining how many solutions we have.

## Terminology
*non-zero*
  - a row is non-zero contains at least one non-zero entry
  - can also have a column that's non-zero
  - **all zeros**

*leading entry*
  - ... of a non-zero row is the leftmost non-zero entry
  - [0 0 -1 1] *// -1*

*echelon form (EF)*
  1. zero-rows on bottom
  2. each leading entry in a row is strictly to the right of the leading entry of the row above it (staircase down)
  3. all entries below a leading entry are zero

*reduced echelon form (REF)*
  4. the **leading** entry in each non-zero row is 1
  5. each leading 1 is the only nonzero entry in it's column

*Pivot position*
  - leading entry **in echelon form**

*Pivot column*
  - the column that contains a *pivot position*

*Basic variables*
  - variables corresponding to pivot columns

*Free variables*
  - does not correspond to a pivot column
  - MUST state a free variable
  - can be any value



## Details
zero column remains invariant under all elementary matrix operations.


## Section 1.2
**Row reduction and echelon forms**

### Transform a matrix into it's echelon form

> Every matrix can be row reduced to an echelon form, which is NOT unique

1. Omit zero columns if necessary
2. make each entry underneath the top left zero
3. repeat steps 1 and 2 for the submatrix until we get an EF

### Pivots

> if the last column is a pivot column, then it's inconsistent

... because **0 0 0 n** is inconsistent

> if last column isn't a pivot column

... you have at **least** one solution

> ignore the last column, if all remaining columns are pivot columns

... you have exactly one solution *consistent* and *unique*.
Otherwise infinitely many solutions.

### Reduced Echelon Form

> every matrix can be transformed into exactly one reduced echelon matrix

### Row Reduction Algorithm

```python
let A be a matrix

Forward Phase:
  1. if  all entries of A are zero, then done
     else  the leftmost non-zero column is a pivot.
           the corresponding pivot position is at the top.
  2. Select  a non-zero entry in the pivot column
     if  this entry is not in the pivot position.
     interchange  rows to move it to the pivot position
  3. Use replacement operations to make all positions below the pivot position be zeros.
  3. Apply steps 1-3 to the submatrix.

Backward Phase (step 5).
  5.1 Select the rightmost pivot position.
  5.2 Scale so the entry in pivot position is 1.
  5.3 Use replacement operations to make all entries above be zeros.
  5.4 Apply steps 5.1-5.3 to the next rightmost pivot position
```

Matrix --forward-phase--> Echelon Form --backward-phase--> Reduced echelon form

**A consistent system is unique (exactly one solution) if it has no free variable and is not unique (infinitely many solutions) otherwise.**
No free variables = unique. Free variables = infinitely many
