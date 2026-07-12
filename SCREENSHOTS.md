# Screenshot shot list

Every image below currently exists as a **labelled placeholder**. Replace the file at the
given path, keep the filename exactly, and the docs pick it up with no edits.

Placeholders are 1280×720. Real screenshots don't have to match that, but keeping a
consistent width (1280–1600) and a 16:9-ish crop makes the pages look even.

Tips:

- Use a **dark theme**. The docs and the placeholders are dark, and the site defaults to it.
- Crop to the thing being explained. Full-desktop screenshots read as noise.
- Blur or fake any real emails, tokens, invite links and lobby passwords.
- For Discord shots, capture just the embed and the message, not the whole client.

---

## `docs/assets/`: Getting Started

| File | What to capture |
|------|-----------------|
| `sign-in.png` | The sign-in page at play.finalist.live, showing the Discord, Google and email options together. |
| `setup-username.png` | The username step new accounts land on, with the live availability check visible. |

## `docs/players/assets/`: For Players

| File | What to capture |
|------|-----------------|
| `game-identities.png` | Profile → Game identities, with an IGN filled in for at least two different games. |
| `profile-page.png` | A player profile showing avatar, banner and recent scrim history. |
| `notification-bell.png` | The in-app notification bell open, showing a few unread notifications. |
| `create-team.png` | The Teams page, with the Create team button. |
| `create-team-page.png` | The Create team page: name field and the captain/join-code/scrim-ready cards. |
| `team-page.png` | A team page showing the roster, the captain, and the team code. |
| `team-invite-link.png` | The invite-link dialog: the member/substitute choice, max uses and expiry. |
| `join-with-code.png` | The Join with code dialog, where a player enters a team code and sends a request. |
| `join-request.png` | A captain's view of an incoming join request, with accept and decline. |
| `scrim-browse.png` | The scrim list on play.finalist.live, with at least one scrim open for registration. |
| `register-lineup.png` | The registration screen: picking the lineup, each player's role, and an IGN override. |
| `waitlist.png` | A scrim's waitlist as a player sees it, with the queue order. |
| `removed-from-scrim.png` | The "Removed from scrim" notification a captain gets when the filter kicks their team. |
| `room-details-player.png` | Room details as a slotted captain sees them on the scrim page. |
| `results-page.png` | A completed scrim's declared results, showing placements and scores. |

## `docs/organizers/assets/`: For Organizers

| File | What to capture |
|------|-----------------|
| `create-org.png` | The create-organization form, with the name and slug fields. |
| `org-public-page.png` | The public organization page at finalist.live/o/your-slug. |
| `org-members.png` | The members list, showing owner, admin and moderator roles side by side. |
| `org-invite.png` | Inviting a member by username, with the role picker open. |
| `org-bans.png` | The organization's team and player ban lists. |
| `create-scrim.png` | The new-scrim form, showing game, mode and map selection. |
| `scrim-settings.png` | Scrim settings: max slots, substitutes, visibility, minimum lineup size, require IGN, filter timing. |
| `scrim-manage.png` | A scrim's management page with the lifecycle actions (open/close registration, start, end, cancel). |
| `slotlist.png` | The slot grid for a scrim, with teams assigned to numbered slots. |
| `assign-slot.png` | Assigning or swapping a team's slot by hand. |
| `waitlist-manage.png` | The host's waitlist view, with promote and demote controls. |
| `filter-log.png` | The filter log, showing entries with their reasons (`no_ign`, `lineup_too_small`, `slot_freed_backfill`). |
| `room-details-editor.png` | The room-details editor with key/value fields, one marked secret. |
| `room-details-publish.png` | The publish dialog: reveal now vs. schedule a reveal time. |
| `declare-results.png` | The declare-results confirmation, mentioning the 24-hour edit window. |
| `leaderboard.png` | An organization's player or team leaderboard. |
| `create-preset.png` | The new-preset form, showing daily/weekly recurrence and map rotation. |
| `preset-list.png` | A recurring schedule's page: its cadence summary, Pause/Delete, and the occurrences it generated. |

## `docs/discord/assets/`: Discord

| File | What to capture |
|------|-----------------|
| `add-app.png` | The bot's Discord profile, with the **Add App** button. |
| `org-discord-settings.png` | Organization Settings → Discord on the dashboard, where a server is connected. |
| `claim-command.png` | The `/claim` reply: "Organization claimed", with the Open dashboard button. |
| `host-bind.png` | Running `/host bind` in a channel, and the bot's **confirmation** (not the error). |
| `host-bind-wrong-org.png` | `/host bind scrim:…` refused because the scrim belongs to another organization. |
| `announcement-embed.png` | A scrim status announcement embed in a bound channel (e.g. "Registration is OPEN"). |
| `link-command.png` | The `/link` reply. *Currently shows the already-linked confirmation; the unlinked reply with the "Log in with Discord" button would be the better shot.* |
| `help-command.png` | The `/help` landing embed with its category dropdown. |
| `scrim-list-command.png` | The `/scrim list` reply. *Currently shows the empty state; a reply with scrims grouped into Live / Open / Upcoming would be the better shot.* |
| `room-details-announcement.png` | The room-details announcement embed with the "Reveal room details" button. |
| `room-details-reveal.png` | The private reveal a slotted captain sees after clicking the button. |

---

## Checking your work

```bash
pnpm build
```

A missing or misnamed image **fails the build**, because Docusaurus resolves these paths at
build time. So if it builds, every image resolved.
