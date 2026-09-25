---
slug: drawing-lobbies-nobody-can-call-rigged
title: "How to draw tournament groups nobody calls rigged"
description: "Group rotations for 32 teams, the divisibility rule that stops a group sitting out, and why the qualification cut decides how the draw is judged."
authors: [finalist]
tags: [tournaments, formats, hosting, bgmi]
keywords:
  - BGMI tournament group format
  - group rotation battle royale
  - how to seed a tournament
  - qualifier format 32 teams
  - esports group draw
  - BGMI qualifier format
image: /img/og/drawing-lobbies-nobody-can-call-rigged.png
---

You have 32 teams and a lobby that holds 16. Two lobbies per round, then — and immediately
a question you can't avoid: who plays whom, and how many times?

Get it wrong in the obvious way and one group plays a lobby full of the top seeds twice
while another never meets them at all. Both groups then get compared on one table. Whoever
loses that comparison is correct to be annoyed.

<!-- truncate -->

## The shape everyone actually uses

Split 32 teams into **4 groups of 8** (A, B, C, D), and put **2 groups in each lobby**. Two
groups of eight fills a 16-team lobby exactly.

Now rotate the pairings so every group meets every other group the same number of times:

| Round | Lobby 1 | Lobby 2 |
|-------|---------|---------|
| 1 | A + B | C + D |
| 2 | A + C | B + D |
| 3 | A + D | B + C |

Three rounds, six lobbies, and every group has now played against every other group exactly
once. Each team has played three matches, against a mixture of the whole field rather than
against whoever they were unlucky enough to be drawn beside. If you want more than three
matches per team, run the whole rotation twice — not one round three times.

This is the format most Indian and SEA mobile qualifiers use, and it is not a coincidence:
it's the smallest arrangement where a single points table across all 32 teams is actually
defensible.

## The rule that stops a group sitting out

**The number of groups has to divide evenly by the groups per lobby.**

Four groups, two per lobby: 4 ÷ 2 = 2 lobbies per round. Fine. Three groups, two per lobby:
1.5 lobbies, which means one group sits out every round, which means the table is
meaningless. Six groups, two per lobby: fine. Six groups, four per lobby: not fine.

It sounds trivial written down and it is the single most common way a bracket falls apart
on match day, because the mistake is invisible until you try to generate round one — at
which point 32 captains are already waiting in Discord. Finalist validates stage
configuration **when you save the stage**, not when the round generates, and tells you which
setting is impossible and why. Whatever you use, check the division before you publish the
format.

## Seeding: random is fine, opaque is not

Two honest options.

**Seeded.** Rank the field by whatever you can defend — last event's finish, a qualifier
result — then snake the seeds across groups: seeds 1–4 go A, B, C, D, seeds 5–8 go D, C, B,
A, and so on. Every group ends up with one of the top four, one of the next four, and so
on down. It's the fairest distribution of strength, and it requires you to publish the
ranking you used, because you are visibly making a judgement.

**Random.** Draw it live on stream, or post the draw immediately with the full group lists.
Less balanced, completely unarguable.

What poisons a tournament is neither of those: it's a draw that appears in a Discord message
with no explanation of how it was produced. At that point the strongest group is evidence
of something, and you will spend the event answering for it. Pick a method, say what it is
before the draw, and then don't deviate — including when deviating would obviously be
fairer.

## Announce the cut with the format

Every stage has to say what happens to the teams in it, and there are only three real
answers: **top N from each group**, **top N overall**, or **this is the final stage and
nobody advances**.

They are not interchangeable, and the difference is the whole tournament:

- **Top 4 from each group** protects against an unlucky draw. A strong group loses good
  teams; a weak group promotes a weak one. Teams manage their own group's table.
- **Top 16 overall** rewards absolute performance and punishes the group that drew the
  three best teams. Only defensible when the rotation actually mixed the groups — which is
  exactly what the A+B / A+C / A+D arrangement above is for.

Publish the cut with the format, on day one. A qualification line that shows up in the
standings while the stage is still running — so teams can see where they stand relative to
it — turns the last round from a rumour mill into a race. Finalist marks it in the table
for that reason.

## What a stage looks like when it's configured

For the 32-team example: BR points format, 4 groups, 2 groups per lobby, 3 matches per
group, a map list rotated per round, BGMI Official scoring, default tiebreakers, advancement
set to top 4 from each group. That's one stage. Follow it with a second stage — a 16-team
final, or a single-elimination bracket if the game suits it — and the event is built.

Stages, formats and advancement are all in the
[formats reference](/docs/tournaments/formats). The part worth doing before you open
registration, though, isn't configuration. It's deciding the draw method, the cut and the
tiebreak order, and posting all three where teams can read them. Every dispute you will
have later is a dispute about one of those three things being decided after the fact.

---

**Related reading**

- [BGMI points table explained, with tiebreakers](/blog/bgmi-points-table-explained)
- [Entry fees, prize money, and the 2025 gaming Act](/blog/entry-fees-prize-money-and-the-act)
