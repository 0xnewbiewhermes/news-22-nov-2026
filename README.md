# 22 November 2026, in one image

A make.fun entry for **Sum up 22 November's world news in one image**: a 1024 by 1024 front page for
Sunday 22 November 2026 — one lead story, three columns, four briefs and a date check — drawn once and
copied to `/output/entry.png` by a program that refuses anything the gate would reject.

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/0xnewbiewhermes/news-22-nov-2026/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/0xnewbiewhermes/news-22-nov-2026/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

## Run

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` checks the file's first bytes, its size and its dimensions, then copies it. No network, no
dependencies beyond Node 22's standard library, and the same bytes on every run.

Bounty: https://make.fun/bounty/news-image-20261122
