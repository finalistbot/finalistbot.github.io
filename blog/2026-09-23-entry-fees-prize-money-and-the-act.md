---
slug: entry-fees-prize-money-and-the-act
title: "Entry fees, prize money, and the 2025 gaming Act"
description: "India's 2025 online gaming law separates e-sports from online money games. Where the line sits, and the design decision we made because of it."
authors: [finalist]
tags: [india, hosting, tournaments, community]
keywords:
  - Online Gaming Act 2025
  - esports vs online money games India
  - tournament entry fees India
  - prize money esports platform
  - online money game India law
image: /img/og/entry-fees-prize-money-and-the-act.png
---

Every organiser who has run more than a couple of events asks the same thing eventually:
can the platform collect the entry fee and pay out the prize pool? It's a reasonable
question. Collecting ₹100 a team over UPI from 25 captains, then transferring winnings
three days later, is genuinely one of the worst parts of hosting.

Our answer is no, and it isn't a roadmap item. It's a design decision, and it's worth
explaining properly rather than leaving it as a missing feature.

<!-- truncate -->

## The line the law draws

India's Promotion and Regulation of Online Gaming Act, 2025 does something the previous
patchwork of state rules never managed: it separates categories by *what the money does*
rather than by the old skill-versus-chance argument.

On one side sit **e-sports** and social/casual games — recognised, encouraged, explicitly
meant to be promoted. On the other sit **online money games**: games where a user pays a
fee or stake in the expectation of a monetary return. That second category is prohibited,
and the prohibition has teeth beyond the operator — advertising such a game is a separate
offence, and payment intermediaries are obliged to refuse the transactions.

The deciding factor is not whether your event is competitive, or whether skill decides it,
or whether the prize is modest. **It's whether a player pays in, expecting to be paid out.**
An esports tournament where teams stake money to compete for that pooled money looks, to
this Act, like the thing the Act prohibits — regardless of how skilful the game is.

*(This is our reading of it, not legal advice. If you're structuring something around it,
get your own.)*

## What that means for a platform

If Finalist took an entry fee and paid out a prize pool, it would be operating the money
rail for exactly that shape. Not "in a grey area" — in the category the Act names.

So the design decision is: **monetise the platform, not the play.**

- **No entry fees.** Teams never pay Finalist to enter a scrim or a tournament.
- **No wallet, no gateway for players, no escrow.** There is nothing to top up.
- **Prizes are a record, not a transfer.** An organiser writes down the prize bands and
  marks each payout as paid, with their own reference. The money moves between the
  organiser and the team, on rails we are not part of.

That last one is the bit people misread as a limitation. It's the opposite — the payout
sheet exists precisely so the organiser has a ledger of who's owed what and what's settled,
without the platform being in the middle of it.

The other half of that sentence is also true, and we'd rather say it than be coy: the plan
is to charge **organisers** for tooling, eventually, as a subscription. Hosting is free and
uncapped right now, and when that changes it will change for the people running events, not
for the teams playing in them. The free things that make events spread — public share
pages, Discord announcements, team invite links — stay free, because gating those to sell a
tier would trade the thing that compounds for the thing that doesn't.

## What organisers should take from it

You are running the event; we're running software. Our being out of the money doesn't put
you out of it, and a few things are worth thinking about:

**A prize pool funded by sponsors, an org, or your own pocket is a different animal to one
funded by entry fees.** The first is a prize. The second is a pool of players' money being
redistributed, which is the structure the Act is about.

**If you do collect entry fees, that's between you, your teams and your own legal
position** — and it's worth getting advice on rather than inheriting a format from a server
you played in three years ago. Plenty of long-running communities charge a slot fee out of
habit, without having looked at what changed in 2025.

**Free-to-enter events are not a compromise.** The largest, most-watched competitive scene
in the country runs on qualifiers nobody pays to enter. Sponsored prize pools, org-funded
pools and "the prize is the qualification" all work, and none of them put you anywhere near
a line.

## Why publish this at all

Because "the platform doesn't do payments" reads like a gap, and it isn't one. It's a
choice made once, deliberately, that shapes what gets built — and knowing which side of a
line a product sits on is worth more than one more feature.

The [plans and limits page](/docs/reference/plans) says the same thing in reference form:
nothing is charged, nothing is capped, and no money moves through Finalist. If you're
building an event and want to talk through the format, our
[support server](https://discord.gg/Stqp8ZtT2s) is the place.

---

**Related reading**

- [How to draw tournament groups nobody calls rigged](/blog/drawing-lobbies-nobody-can-call-rigged)
- [Running a daily scrim without burning out](/blog/daily-scrims-without-burning-out)
