---
slug: bgmi-points-table-explained
title: "BGMI points table explained, with tiebreakers"
description: "The official BGMI placement table, how kill points stack on it, and the tiebreak chain that decides two teams sitting level on 38 points."
authors: [finalist]
tags: [bgmi, formats, tournaments, free-fire]
keywords:
  - BGMI points table
  - BGMI points system
  - BGMI points table 2026
  - PMGC points table
  - WWCD points
  - BGMI kill points
  - Free Fire points table
  - battle royale tiebreaker
  - BGMI scrim scoring
image: /img/og/bgmi-points-table-explained.png
---

Most arguments about a battle royale standings table are not arguments about the table.
They're arguments about the tiebreakers, which almost nobody has read, because they only
matter on the one night they decide who qualifies.

So: the whole thing, in order.

<!-- truncate -->

## The placement table

Krafton's standard BGMI table — the one used at official events, and the one most Indian
scrims and community tournaments copy:

| Placement | Points |
|-----------|--------|
| 1st (WWCD) | 10 |
| 2nd | 6 |
| 3rd | 5 |
| 4th | 4 |
| 5th | 3 |
| 6th | 2 |
| 7th | 1 |
| 8th | 1 |
| 9th–16th | 0 |

Plus **1 point per kill**, uncapped.

Two things people get wrong about it. First, the drop from 1st to 2nd is enormous — four
points, wider than any other step, and wider than 2nd to 5th combined. A WWCD is worth
roughly ten kills. Second, the tail is flat: 7th and 8th are both worth 1, and from 9th
down placement is worth nothing at all. Below top eight, the only thing that moves your
score is frags.

That shape is deliberate, and it's why the table rewards a very specific style: play for
the win, and when the win is gone, play for kills, because there is no prize for dying 11th
instead of 14th.

### Free Fire, for comparison

Garena's table runs longer and starts higher — 12 for the Booyah, sliding down to 1 for
10th, plus 1 per kill. Twelve teams, ten scoring positions: nearly everyone scores
something, so kills swing a Free Fire table less than they swing a BGMI one. If you're
copying a BGMI table onto a Free Fire event because you had it lying around, that's the
difference you're importing.

## Kill caps

Some organisers cap kill points — say, 15 per match. It exists to stop one team farming a
dead lobby into an unbeatable lead, and it's a real decision, not a default.

Cap it and you flatten the table toward placement, which favours consistent survival.
Leave it uncapped and a single 22-kill game can carry a team through a bad day. Neither is
wrong; what's wrong is discovering which one you chose halfway through the event. Decide
before match one, and write it in the rules post.

## The tiebreakers

This is the part that matters, and the part that's usually missing from the rules post
entirely.

Two teams finish level on points. Which is higher? The default chain, applied in order
until one of them breaks:

1. **Total points**
2. **WWCD** — number of match wins
3. **Total kills**
4. **Best single placement**
5. **Last match placement**

Order is everything here, and it's worth seeing it bite. Four matches:

**Team A** — 1st/8 kills, 5th/4, 12th/2, 3rd/6
→ placement 10 + 3 + 0 + 5 = 18, kills 20. **38 points, 1 WWCD.**

**Team B** — 2nd/9 kills, 4th/6, 6th/8, 10th/3
→ placement 6 + 4 + 2 + 0 = 12, kills 26. **38 points, 0 WWCD.**

Level on points. Team B has six more kills. **Team A finishes higher**, because WWCD is
compared before kills, and A has one.

Flip the chain — kills before WWCD — and the result flips with it. Both orderings are
defensible; official BGMI events compare wins first. What is not defensible is not having
published which one you use, and then picking on the night.

## Points should be computed, not submitted

A practical note that prevents an entire category of dispute.

A result sheet should carry **placement and kills** — what happened. It should never carry
"we got 34 points". The moment a captain, a referee or a spreadsheet can type a total, the
total becomes the thing you argue about, and every arithmetic slip is indistinguishable
from a claim.

On Finalist the table is attached to the stage, points are priced server-side from
placement and kills, and then frozen onto the row. Nobody can enter a total, and changing
a stage's points table later doesn't silently rewrite matches already confirmed under the
old one. Standings also carry the tiebreak comparisons that actually decided each position,
so "why are we 3rd" has an answer that isn't "because the sheet says so".

## Picking a table for your event

You do not need a custom one. The official tables exist, everyone already knows them, and
using a familiar table removes an entire argument before it starts. Finalist ships them as
templates — BGMI Official, PUBG Official, Free Fire Official, COD Mobile BR — plus **kills
only** for kill races and **placement only** for when survival should decide it. Pick one,
adjust if you must, and publish the tiebreak order alongside it.

The [stages and formats reference](/docs/tournaments/formats) has the full configuration —
groups, lobbies, maps and the rest — if you're building something bigger than one lobby.

---

**Related reading**

- [How room ID leaks actually happen](/blog/room-id-leaks)
- [How to draw tournament groups nobody calls rigged](/blog/drawing-lobbies-nobody-can-call-rigged)
