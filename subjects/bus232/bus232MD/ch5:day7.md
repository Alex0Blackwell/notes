# BUS 232 - Binomial

sampling distribution.
- Probability distribution of a statistic  

## Statistical estimation

Law of large numbers
- Draw independent observations at random from any population with a finite mean. As the number of observations drawn increases, the mean x of the observed values gets closer and closer to the mean of the population.

Binomial setting
Binomial distributions are models for some categorical variables, typically representing the number of successes in a series of n trials. The observations must meet these requirements:
1. The total number of observations n is fixed in advance
2. The outcomes of all n observations are independent
3. Each observation falls into just one of two categories: success or failure
We don't care about a magnitude, we need a count
4. All n observations have the same probability of success p

Binomial formula
P(X = k) = (n choose k) * p^k * (1-p)^(n-k)

## Normal approximation to the binomial

If n is large, the binomial distribution can be approximated by the Normal distribution.

You can do a continuity correction by adding 0.5 to the binomial distribution to get a normal distribution and then use this number.
