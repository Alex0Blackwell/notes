# PHIL 105 Bayes Theorem

## Bayes Theorem

Fire alarm rings.
We think that it is a false alarm.
We aren't concerned about this because we must assign the probality of a fire given an alarm a low chance.
`P(Fire|Alarm)`

P(Fire|Alarm) = Alarms with fire / Alarm
`// note that the denominator can be written as a sum`
`// Alarms with fire + Alarms without fire`

---
Hypothesis (GC): My girlfriend is cheating on me.
New Evidence (TWL): She texts me that she's working late.

What's the chance that she's cheating on me.

1) How likely was GC before the new evidence. P(GC) `  // Prior probability`
2) How strong is the new evidence: ` // a ratio`
  P(TWL | GC) / P(TWL | ~GC)  ` // ratio of being right vs being wrong`

---
P(A and B) = P(A|B)*P(B) = P(B|A)*P(A)

P(B|G) = (P(G|B)*P(B)) / P(G)

P(Hypothesis | Evidence) = (P(E|H) * P(H)) / P(E)

P(H) - Prior probability
Base rate or plausibility

P(H|E) - Updated probability (Prosterior probability)
We update our believes or Hypothesis based on evidence


P(G) = (Green Animals) / (Green Animals and non-green Animals)

P(H|E) = (P(E|H)*P(H)) / (P(E|H)*P(H) + P(E|~H)*P(~H))

If the probability goes up then it is confirmed. Is is supported, it is confirmed.
