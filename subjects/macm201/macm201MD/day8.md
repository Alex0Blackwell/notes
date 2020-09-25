# MACM day 8 - Probability

## Summary
The **probability** of something happening is the different ways it can happen which satisies a condition divided by the **total number** possibilities. When things are **disjoint** we can just slap 'em together but if their intersection is not equal to the empty set, then we have to use the **rule of inclusion and exclusion**. 

## Probability

> Hypothesis:
S is a set of possible outcomes called the sample space, all having equal liklihood. A is a subset of S.
Experiment:
We generate an event by drawing at random an outcome x from S.
Event: Let Pr(A) denote the probability that x is in A
Question: What is Pr(A)
Answe: if each outcome is equally likely and |S| is finite
Pr(A) = |A|/|S|

## Axioms of probability

let S be a sample space and let A and B be subsets of S
1. 0 <= Pr(A) <= 1
2. Pr(S) = 1
3. A intersection B = empty set
then Pr(A Union B) = Pr(A) + Pr(B)

Theorem (the rule of complement)
let A bar = S-A be the complement of A. Then Pr(Abar) = 1-Pr(A)

Theorem (the additive rule)
Pr(A union B) = Pr(A) + Pr(B) - Pr(A union B).
