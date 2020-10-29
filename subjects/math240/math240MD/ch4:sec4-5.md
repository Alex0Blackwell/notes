# MATH 240 The Dimension of a Vector Space

**Proposition** If a vector space V has a basis with n vectors, then any set in V with more than n vectors is linearly dependent.

**Theorem** Every basis of a vector space has the same size. Let V be a vector space. If V has a basis with n vectors, then every other basis of V also contains n vectors.

**Definition** Let V be a vector space. If V is the span of a finite set of vectors then we say that V is *finite dimensional*.
In that vase, V has a basis consisting of finitely many vectors, and every basis of V has the same number of elements. This common number is called *the dimension of V* and is denoted by *dimV*.

dimRn = n
dimPn = n+1 `  // because the standard vectors are {1, t, t^2 ...}`
dim{0} = 0  `  // special case. only 0-dimensional subspace`
dim*Col*A = # of pivot columns of A (or # of basic variables) `  // row reduce and the pivot columns correspond to the vectors`
dim*Nul*A = # of free variables of the homogeneous linear system `  // because we look for Ax = 0`

What is the dimension of F, the space of all real valued functions? What about all polynomials?
These are not spanned by a finite set.
so we call them infinite-dimensional.

**Proposition** Let V be a finite dimensional vector space and W a subspace of V. Then W is finite dimensional and *dim*W <= *dim*V

**Proposition** Let V be an n-dimensional vector space
1. Any linearly independent set in V with n vectors is a basis for V.
2. Any set of n vectors that spans V is a basis for V.

**Property** A basis B of an n-dimensional vector space V statisfies three properties:
SpanB = V
B is linearly independent
B has n vectors
To check that B is a basis, we only need to check any two of these properties.
