---
slug: daily-scrims-without-burning-out
title: "Running a daily scrim without burning out"
description: "Daily scrims die from host fatigue, not from lack of teams. What to automate, what to keep doing by hand, and how to take a week off."
authors: [finalist]
tags: [hosting, community, scrims, discord]
keywords:
  - daily scrims
  - run a scrim community
  - esports community building
  - recurring scrims
  - BGMI daily scrims Discord
  - scrim schedule
image: /img/og/daily-scrims-without-burning-out.png
---

Daily scrim lobbies rarely die because teams stopped coming. They die because the one
person creating the event every evening at 5:30 got tired, missed a day, missed three, and
the regulars found somewhere else to play. Teams are loyal to a time slot, not to a host —
and a time slot that isn't there is a time slot they replace within a week.

So the useful question isn't how to grow a daily scrim. It's how to make missing a day
impossible.

<!-- truncate -->

## The 5:30 problem

Creating tonight's scrim is a five-minute job: same game, same mode, same slot count, same
registration window, new date. It is also a five-minute job that must happen every single
day, before a specific hour, forever, by you.

Five minutes isn't the cost. **Being required is the cost.** You can't travel without
setting an alarm, you can't be ill, and every evening carries a small background obligation
that never clears. That's what burns hosts out, and it's why the fix isn't discipline.

Describe the scrim once as a recurring schedule and let it generate the instances. On
Finalist that's a [preset](/docs/scrims/presets): game and mode, name, cadence (daily, or
weekly on the days you pick), start time, duration, registration window, slot and lineup
defaults. It materialises scrims seven days ahead as ordinary public events, so next
Tuesday's lobby already exists and is already taking registrations while you're doing
something else.

Two details that matter more than they look:

**Registration windows are relative, not clock times.** "Opens 360 minutes before start,
closes 30 minutes before" follows every instance to wherever its start time lands. Set it
once; it never needs revisiting.

**The schedule carries its own timezone.** Every start time is read in it, so a
daylight-saving shift somewhere doesn't drag your 8 p.m. lobby to 7.

Generated scrims are just scrims. Edit tomorrow's, cancel Friday's, change one map — none of
it touches the schedule.

## What you should not automate

The reason people come back is not that the lobby exists. Plenty of lobbies exist.

Keep doing by hand: showing up in chat before start, saying something about last night's
game, knowing which teams are new, settling a dispute the same evening instead of the next
morning. The automation is there to buy you the attention for exactly this, and a daily
scrim that runs itself perfectly while the host has vanished is a scrim people play in
rather than a community they belong to.

The practical version of that: if automating the setup doesn't leave you more present at
7:55 p.m. than you were before, you've just moved the work.

## Taking a week off

This is the part nobody plans and everybody eventually needs.

**Pause the schedule, don't delete it.** Pausing stops the next instances from being
created while keeping the whole configuration — and, importantly, leaves the scrims that
were already generated exactly where they are. Teams registered for Thursday don't lose
Thursday because you tidied up on Tuesday. Resume when you're back.

Then say so. A pinned message with the dates — "no scrims 12th–18th, back Monday, same
time" — is the difference between a break and a disappearance. Teams will wait a week for a
lobby they trust. They will not wait three days for one they think is dead.

## Make the lobby findable when you're not in the room

A daily scrim grows from people stumbling into it, and most of that happens through Discord
rather than through anything you post.

Add the bot to your server and `/scrim list`, `/scrim view`, `/tournament standings` and
`/help` answer for anyone, with no account and no setup — including in servers that have
nothing to do with you. Connect your server to your organisation and your announcements
land in the channels you choose, automatically, including the room-details reveal. Every
scrim also has a public page on a share link that works without an account, which is the
thing to paste into other servers, into a story, or into a group chat.

That's the growth loop, and it runs without you: someone sees the lobby, brings a team, the
team comes back on Thursday because Thursday exists.

## The short version

Automate the parts that must happen on time. Keep the parts that make people come back.
Pause instead of vanishing, and tell people when you'll be back.

If you want the mechanics, [recurring scrims](/docs/scrims/presets) is the page —
schedules, cadence, pausing, and what happens to already-generated events. It's free to
host on, and unlimited.

---

**Related reading**

- [Hosting scrims from a Google Form: what breaks](/blog/hosting-scrims-google-form-breaks)
- [How room ID leaks actually happen](/blog/room-id-leaks)
