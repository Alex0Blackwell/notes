# MACM day9 - Conditional Probability and Independence

## Summary
Probabilities can be dependent on eachother. For example what's the chances of something happening if something else happens. We have a couple fun laws for this :)

## Four consequences of Pr(B|A) = Pr(B n A) / Pr(A)
1. switching A and B
Pr(A|B) = Pr(A n B) / Pr(B)

2. Mutliplicative rule
Pr(A n B) = Pr(B) * Pr(A|B)

3. Law of total probability
B = [A n B] U [B n A(bar)]
Pr(B) = Pr([A n B] U [B n A(bar)])
Pr(B) = Pr(A n B) + Pr(B n A(bar))
Pr(B) = Pr(A) * Pr(B|A) + Pr(A(bar)) * Pr(B|A)

4. Bayes' Theorem
Pr(B|A) = Pr(A n B) / Pr(A) = Pr(B) * Pr(A|B)/Pr(A)
**Pr(B|A) = Pr(A|B) * Pr(B)/Pr(A).**

Independent
Two events A and B are independent if either one of them has probability 0 or both have positive probability and
Pr(B|A) = Pr(B) and Pr(A|B) = Pr(A)

Two events A and B are independed if and only if
Pr(A n B) = Pr(A)Pr(B)
