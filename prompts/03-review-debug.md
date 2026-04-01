# Review, debug & hardening

## Code review pass

```
Review this change like a senior engineer.

Focus on:
- Correctness & edge cases
- Security (input, authz, secrets, injection)
- Performance hot paths
- Tests missing for risky logic
- Naming & API clarity

Output:
1) Blocking issues
2) Non-blocking suggestions
3) Questions / assumptions
```

## Explain a failure

```
Symptom: <what you see>
Expected: <what should happen>
Environment: <OS, browser, branch, env flags>

Hypothesize root causes (ranked), propose the fastest experiment to falsify the top hypothesis,
then suggest a fix. If you need logs or stack traces, say exactly what to capture.
```

## Performance investigation

```
Slow path: <URL, job, or function>
Current: <latency / resource usage>

Propose a measurement plan (what to time/trace), likely bottlenecks, and fixes ordered by ROI.
Avoid premature optimization; call out uncertainty.
```

## Security quick pass

```
Threat model this feature briefly:
- Assets
- Trust boundaries
- Likely abuse cases

List concrete mitigations and test ideas (no hand-wavy “use best practices”).
```
