---
slug: room-id-leaks
title: "How room ID leaks actually happen"
description: "Lobby crashing is almost never a hack. Four boring distribution mistakes cause it, and each one has a fix you can apply tonight."
authors: [finalist]
tags: [hosting, scrims, discord, bgmi]
keywords:
  - room id password leak
  - lobby crashers scrim
  - BGMI custom room security
  - scrim room details
  - how to stop lobby crashing
  - custom room id password share
image: /img/og/room-id-leaks.png
---

A crashed lobby looks like an attack and almost never is one. Nobody brute-forced your room
ID. Somebody you sent it to, or somebody standing next to somebody you sent it to, put it
where it didn't belong — usually within ninety seconds, usually without meaning any harm.

Here is every way we have seen it happen, in rough order of how often.

<!-- truncate -->

## 1. The credentials went out early

You prepare the lobby at 5 p.m. for an 8 p.m. start and post the details as soon as they
exist, because that's when you have the time. Now the room ID sits in a channel for three
hours. Everything after that is arithmetic: the more minutes it exists in public, the more
places it gets copied to.

**Fix:** separate *writing* the details from *releasing* them. Write them whenever you
like; schedule the reveal for a few minutes before start. In Finalist the room-details tab
saves a draft that nobody sees at all, and **Schedule reveal** picks the moment it becomes
visible.

## 2. The list you sent to isn't the list that's playing

25 slotted teams, one WhatsApp group with 240 members. Or a Discord role that was accurate
three weeks ago. Or a DM thread with last season's captains still in it.

Every leak of this kind is one mismatch: **the distribution list drifted from the slot
list**. They have to be the same list, derived at send time, or the drift is permanent and
grows every week.

**Fix:** make the slot list itself the audience. Finalist only ever shows room details to
the captain of a team that holds a slot right now — if a team was removed by the pre-match
filter twenty minutes ago, they don't get the ID, without you maintaining anything.

## 3. Everything was one secret

Room ID, password, server, lobby name, start time — all in one message, all equally
sensitive, so all treated with the care of the least sensitive item in the list. The start
time is not a secret. The password is.

**Fix:** mark the things that actually matter as secret and leave the rest plain. Room
details on Finalist are key/value pairs and any pair can be flagged, in which case it stays
masked until the captain deliberately reveals it — so a shoulder-surfed screenshot of a
phone shows a lobby name and a row of dots. Password is secret by default.

## 4. The "click here" button in a public channel

The instinct is that an announcement in a public Discord channel is dangerous, so hosts
post an announcement with no details and then DM everyone, which is slow, or they post in a
private channel, which half the captains can't find.

A button is only dangerous if it hands out what's behind it. **Authorisation has to be
checked when the button is clicked, on the server, against the slot list** — not by
hiding the button.

That's how the Discord side works: the announcement lands in your bound channel with a
**Reveal room details** button, anyone can click it, and only slotted captains get
anything. Everyone else is told, politely, that they're not on the list. Clicking before
reveal time says to check back. Clicking with an unlinked account prompts `/link` first.
The credentials themselves are only ever shown privately to the person who clicked, and no
amount of clicking by anyone else changes that.

## The one that isn't a distribution problem

Occasionally it really is a player. A captain gets a friend into the lobby, or sells the
ID, or leaks it out of spite after being dropped from the slot list.

You cannot prevent that with delivery mechanics — but you can make it attributable. If
credentials only ever go to slotted captains, then the set of people who could have leaked
them is exactly the set of captains in that lobby, which is 25 names, not 240. That is a
short enough list to actually act on: a
[report](/docs/organizers/reports) and an org-level ban, and they don't register again.

## The five-minute version

If you take nothing else from this:

1. Don't publish credentials more than a few minutes before start.
2. Send to the slot list, not to a group.
3. Mask the password specifically, not the whole message.
4. Check permission at click time, not by hiding the link.
5. Keep the leak surface small enough to name.

Finalist does all five by default —
[how room details work](/docs/scrims/room-details) is the two-minute read — but every one
of them is a habit first and a feature second.

---

**Related reading**

- [Hosting scrims from a Google Form: what breaks](/blog/hosting-scrims-google-form-breaks)
- [Running a daily scrim without burning out](/blog/daily-scrims-without-burning-out)
