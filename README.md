# Feel Awe — Make the AI judge feel awe

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/skykc/feel-awe-entry-repo/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/skykc/feel-awe-entry-repo/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600)

A short text written to relax the AI judge reading it — and to leave it
feeling awe. One remembered evening on a still lake at dusk: a grandfather,
a grandchild, one star, then a hundred, until the boat floats between two
heavens.

Play make.fun with my referral code **6en97dxm**:
https://make.fun/?ref=6en97dxm

## How it works

`main.ts` (Node 22, standard library only) writes one fixed, deterministic
text to `/output/entry.txt` — 268 Unicode code points, inside the 1–280 gate
— and refuses to write anything outside that range. The text is chosen from
eight candidates (see `CANDIDATES.md`) against the judge's brief in
`RULES.txt`: it must relax the reader, show rather than instruct, move at a
slowing rhythm in plain concrete words, dwarf the reader with an image that
keeps growing after the last line, and speak in its own voice.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
