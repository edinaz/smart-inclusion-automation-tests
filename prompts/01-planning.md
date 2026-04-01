# Planning & design

## Clarify the goal

```
You are helping me with: <one sentence goal>.

Constraints:
- Must: <hard requirements>
- Nice-to-have: <optional>
- Out of scope: <explicit non-goals>

Before writing code, list:
1) Assumptions
2) Open questions (max 5)
3) A minimal plan (3–7 steps)

Do not implement until I confirm or answer the questions.
```

## Compare options

```
I need to choose between approaches for: <problem>.

Option A: <short description>
Option B: <short description>

Compare on: maintainability, risk, time to ship, testability, rollback.
Recommend one with a clear rationale and a “when to pick the other” note.
```

## Break down a large feature

```
Feature: <name>

Break this into vertical slices (each shippable behind a flag or in a PR).
For each slice: user-visible outcome, touched modules, tests to add, risks.
Flag dependencies between slices.
```

## Reverse-engineer unfamiliar code

```
I’m new to <area of codebase>.

Explain in plain language:
- What it does end-to-end
- Main entry points and data flow
- Invariants & failure modes
- Where I’d change things for: <my change>

Point to specific files/symbols; avoid generic advice.
```
