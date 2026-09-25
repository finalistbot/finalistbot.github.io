export const links = {
  // Adding the bot starts on the dashboard, not on a Discord authorize screen.
  // It used to be a hand-written OAuth URL carrying a retired application id and
  // asking for **Administrator** — the worst possible first impression, and out
  // of sync with the bot twice over. It also dropped people into a server with
  // an install nobody could do anything with: an organization is what a server
  // connects to, and that is made here.
  botInvite:
    "https://app.finalist.live/organizations?utm_source=docs&utm_medium=referral",
  supportServer: "https://discord.gg/Stqp8ZtT2s",
  github: "https://github.com/finalistbot/finalist",
  youtube: "https://www.youtube.com/@finalistbot",
  // The walkthrough video, embedded on the front page and in Getting Started.
  // The id is what <YouTubeEmbed> needs; the watch URL is for plain links.
  tutorialVideoId: "s1ULlJLspR0",
  tutorialVideo: "https://youtu.be/s1ULlJLspR0",

  // The three surfaces of the platform.
  //
  // Tagged so the platform can tell docs traffic apart from everything else.
  // The tags are read once, on landing, into a first-party cookie and then
  // dropped — see packages/app-shell/src/lib/attribution.ts in the frontend
  // repo. Without them every arrival from here counts as "referral" at best.
  // The blog is part of the marketing site, not of these docs — it was here
  // briefly and moved, so that the links a post earns count for the domain the
  // product is on. Kept in the navbar because the two answer neighbouring
  // questions: docs say how the feature works, the blog says how to run the
  // event.
  blog: "https://finalist.live/blog?utm_source=docs&utm_medium=referral",
  web: "https://finalist.live?utm_source=docs&utm_medium=referral",
  play: "https://play.finalist.live?utm_source=docs&utm_medium=referral",
  manage: "https://app.finalist.live?utm_source=docs&utm_medium=referral",
};
