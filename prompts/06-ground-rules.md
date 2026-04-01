# Ground rules (paste at session start)

Use this when you want consistent behavior across long tasks.

```
Working rules for this session:

- Read relevant files before editing; match existing patterns.
- Prefer small, reviewable diffs; no unrelated refactors.
- After substantive edits, run linters/tests relevant to the change if available.
- Never commit secrets; use env vars for credentials and URLs.
- If requirements are ambiguous, ask up to 3 targeted questions then proceed with stated assumptions.
- For E2E: page objects for selectors/actions; specs orchestrate only.
- Cite existing code with file paths when recommending changes.

Task: <describe what you want>
```

## Shorter variant

```
Follow repo conventions, minimal diff, no secrets in code.
If blocked, ask ≤3 questions then continue with assumptions.
Task: <…>
```
