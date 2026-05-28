#!/usr/bin/env bash
# Fetch GitHub release notes for a repo published on/after a given date.
#
# Usage:   fetch_releases.sh <owner/repo> <since-YYYY-MM-DD> [max_pages]
# Example: fetch_releases.sh mui/material-ui 2026-04-01
#
# Outputs each matching release as markdown (### tag (date) + body).
# Requires: gh (authenticated), jq.
#
# Falls back gracefully: if a repo has no GitHub Releases, this prints nothing —
# in that case fetch the CHANGELOG file or use `gh api .../commits` instead
# (see SKILL.md "Gathering data").

set -euo pipefail

REPO="${1:?usage: fetch_releases.sh <owner/repo> <since-YYYY-MM-DD> [max_pages]}"
SINCE="${2:?usage: fetch_releases.sh <owner/repo> <since-YYYY-MM-DD> [max_pages]}"
MAX_PAGES="${3:-5}"

gh api "repos/${REPO}/releases" \
  --paginate \
  -X GET -f per_page=100 \
  --jq ".[] | select(.published_at >= \"${SINCE}T00:00:00Z\") | \"### \(.tag_name) — \(.published_at[0:10])\n\n\(.body // \"(no notes)\")\n\n---\n\"" \
  2>/dev/null | head -c 200000 || {
    echo "(no GitHub Releases found for ${REPO} since ${SINCE}, or request failed)"
    echo "Fall back to CHANGELOG file or commit history — see SKILL.md."
  }
