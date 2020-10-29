# PHIL 105 - Consequences of Bayes Theorem

Cataxia Scorga (made up disease)
Life expectancy: 6-8 months

Testing for CS.

I test positive for CS.
1) does the result confirm CS.
2) I want to quit my job and take up base jumping if and only if my odds of having CS are at lease 2 to 3.
Should I quit my job?

2 mistakes in testing

1)
False Negative:
Sometimes a sike person gets a healthy error result
Say P(NegativeResult|CS) = 0.1

Say P(PositiveResult|CS) = 0.9

This is the sensitivity of the test (90% sensitive)

2)
False Positive:
P(PositveResult|Not CS) = 0.03

This is a very *specific* test.

We need P(CS)
Say P(CS) = 0.01

P(CS | Negative result) = (.1 * 0.01) / [ (0.1 * 0.1) + (0.97 * 0.99)]
P(CS | Negative result) = 0.001

A metal detector that always beeps is perfectly sensitive.
A metel detector that never beeps is perfectly specific.

Consider prior probabilities

Confirming evidence:
- more likely if hypothesis true
- less likely if hypothesis false

keep updating
