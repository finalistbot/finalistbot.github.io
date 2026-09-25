---
slug: hosting-scrims-google-form-breaks
title: "Hosting scrims from a Google Form: what breaks"
description: "Forms, WhatsApp and a pinned message get you to about twenty slots. Here is the exact point each one fails, and what has to replace it."
authors: [finalist]
tags: [hosting, scrims, bgmi, discord]
keywords:
  - how to host BGMI scrims
  - scrim slot list
  - Google Form scrim registration
  - esports scrim management
  - scrim waitlist
  - BGMI scrim host
image: /img/og/hosting-scrims-google-form-breaks.png
---

Almost every scrim host in India starts the same way: a Google Form for registration, a
Sheet for the slot list, a WhatsApp group for the room ID, and a pinned Discord message
that goes stale within an hour. It works. That is the honest part — it genuinely works, for
a while, and anyone telling you it doesn't has never filled 25 slots in four minutes.

It stops working at a predictable place, though, and it is worth naming exactly where,
because the failure isn't "you need a platform." It's four specific problems, and three of
them will bite you even if you never sign up for anything.

<!-- truncate -->

## Failure one: the form has no idea how many slots are left

A form takes answers. It does not count them, it does not close itself at 25, and it does
not know that submission 26 arrived eleven seconds after submission 25. So you get 40
entries for 25 slots and you are now the one deciding, by hand, who was "first" — from
timestamps, in a spreadsheet, while thirty captains ask you in DMs.

Whatever you decide, half of them think you decided it for a reason other than the
timestamp. That is the real cost. Not the ten minutes of sorting: the fact that your
neutrality is now an opinion rather than a mechanism.

The fix is the same whether you build it yourself or not — **registration order has to be
applied by something that isn't you**, and the queue past the cutoff has to be a visible
waitlist rather than a rejection. Teams accept a queue. They don't accept a judgement call.

## Failure two: teams register and then don't show up with five players

This is the one that quietly ruins more scrims than crashers do. A team registers six days
early with a full roster, and on the night two of them are asleep, one is at a wedding, and
the captain wants to play four-man. Meanwhile there are three teams on your waitlist who
would have shown up complete.

By the time you find out — in the lobby, at start time — the waitlist has gone home.

The thing that actually fixes this is a **deadline before the deadline**. Some fixed number
of minutes before start, the lineup is checked: anyone without an in-game name set is
dropped from it, and any team that falls below your minimum lineup size loses its slot,
which then goes to the first team waiting. Finalist runs that pass once per scrim at a
time you choose, and logs every removal with a reason (`no_ign`, `lineup_too_small`,
`slot_freed_backfill`) so that when a captain asks why they're out, there's an answer
instead of an argument. You can do the same thing manually with a 30-minute roll call —
it's the same idea, it just costs you the half hour.

## Failure three: the room ID goes to a group, and a group is not an audience

You have 25 slotted teams. You post the room ID in a WhatsApp group that has 240 people in
it, because that's the group everyone is in. Or you DM 25 captains one at a time and
mistype one. Or you post it in Discord three minutes early and someone screenshots it into
another server.

The distribution list and the slot list are different lists, and every leak is that
mismatch. Credentials have to go **to the captains of teams actually holding a slot**, at a
moment you pick, and they have to stay unreadable until then — including to you posting
them early by accident. We wrote about how those leaks actually happen in
[Stop the lobby crashers](/blog/room-id-leaks).

## Failure four: results live in your head

Placements and kills get typed into a Sheet, points get calculated with a formula someone
copied wrong, and the final table is a screenshot. Nobody can check it. When a team says
"we should be third", the only way to settle it is for you to reopen the sheet and walk
them through it, which you will not do at 1 a.m., which means the answer is "trust me".

A standings row should be able to explain itself: the placement, the kills, the points the
table priced them at, and — when two teams are level — which comparison actually broke the
tie. If your scoring can't answer "why is this team above that one" without you in the
room, you will spend your evenings being the room.

## What this looks like when it's solved

Nothing exotic. Registration in order, with a waitlist that backfills itself. A lineup
check that runs before start rather than at it. Room details revealed to slotted captains
on a schedule. Results that price themselves from a points table nobody can overwrite.

That's the whole job, and it's the job Finalist does — a scrim is created once, teams
register themselves, slots hand themselves out, the filter runs, room details go out on
time, and you declare results at the end. The
[getting started guide](/docs/getting-started) takes about ten minutes, and hosting on it
is free.

But if you take one thing from this: the form isn't your problem. **Being the mechanism is
your problem.** Every hour you spend sorting timestamps, chasing lineups and DMing room IDs
is an hour you're not spending on the thing that made people come to your scrims in the
first place.

---

**Related reading**

- [Running a daily scrim without burning out](/blog/daily-scrims-without-burning-out)
- [BGMI points table explained, with tiebreakers](/blog/bgmi-points-table-explained)
