# 22 November 2026, in one image

A make.fun entry for **Sum up 22 November's world news in one image**: a 1024 by 1024 front page for
Sunday 22 November 2026 — three illustrated leads, ten picture cards, twelve one-line briefs, a pinned
map and a date check, 25 stories in all, each with a certainty tag (confirmed, reported, claim or
forecast). The pictures are original drawings; the map is drawn from Natural Earth coastlines. The
page is drawn once and copied to `/output/entry.png` by a program that refuses anything the gate
would reject.

Facts were checked against the day's published reporting before the page was compiled. The page
prints its own compile time in UTC, names the stories it left out because they were first reported
on other days, and credits claims to whoever made them.

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
