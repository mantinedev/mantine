---
name: codex-code-review
description: Run an automated code review of unstaged changes using Codex CLI, then fix issues and re-review in a loop until approved. Use when the user asks to review changes with Codex, run a code review cycle, or invokes /codex-code-review.
---

# Codex Code Review

Automated review loop: run Codex review on unstaged changes, apply fixes, re-review until clean.

## Workflow

1. Check for unstaged changes with `git diff`. If empty, report "No unstaged changes to review" and stop.
2. Run the Codex review:

```bash
codex review --uncommitted "Review unstaged git changes. Provide specific, actionable feedback. For each issue, mention the file and approximate line. Focus on: correctness, edge cases, code style, and potential bugs. Do not suggest running tests or adding tests. If everything looks good, respond with LGTM."
```

3. Read the review output carefully.
4. For each piece of feedback, decide if it is valid. Apply valid fixes directly. Skip feedback that is incorrect, irrelevant, or purely stylistic preference with no real benefit.
5. After applying fixes, run the review command again (step 2).
6. Repeat until the review output contains "LGTM" or only minor/irrelevant comments remain.
7. Summarize what was reviewed and what was fixed.

## Important

- Run the review automatically without asking the user for confirmation at each cycle.
- Do not run tests as part of this skill - tests are handled separately.
- If Codex review keeps flagging the same issue after you've addressed it, skip it on the next cycle and move on.
- Limit to a maximum of 5 review cycles to avoid infinite loops.
