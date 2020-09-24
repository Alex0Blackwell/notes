# PHIL 105 class 5 - Unit 3: statement logic

## Summary
We can connect statements with the **conjunction AND** and the **disjunction OR**. We can negate things with **NOT**.

## Truth values and logical operators

The letters stand for truth values.

***negation ~***
1. The moon revolves around the earth.
2. The moon does **not** revolve around the earth.

Says that the other statement is false.
1 says 2 is false and 2 says 1 is false.

1 is the negation of 2 and 2 is the negation of 1.

negations can be stacked: \~\~A - it's FALSE that A is FALSE

***conjunction AND***
1. The moon revolves around Earth and Earth revolves around the sun.

- **Although** I don't have a girlfriend I do know a girl who'd be real mad if she heard me say that

**Although** acts as an **AND**

***disjunction OR***
Earth is a giant disc or a giant cube.

Either Earth must be a giant disc or earth must be a giant cube.

**Inclusive**
At least one must be true.

**Exclusive XOR**
Exactly one must be true

### Truth tables
___________________________________________
| A | B | ~A | A and B | A or B | A XOR B |
| T | T | F  | T       | T      | F       |
| T | F | F  | F       | T      | T       |
| F | T | T  | F       | T      | T       |
| F | F | T  | F       | F      | F       |
___________________________________________

P AND Q
`------`
P
*Valid*

**Disjunctive syllogism**

The zombies got abby or they got bob.
But they didn't get abby,
so they must have got bob

let A = Zombies got abby
let B = Zombies got bob

*Pattern*
A OR B
NOT A
`------`
B

Next up... conditionals
