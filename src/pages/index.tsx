import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import YouTubeEmbed from "@site/src/components/YouTubeEmbed";
import Heading from "@theme/Heading";
import { links } from "@site/constants";

import styles from "./index.module.css";

// The three ways people arrive, in the order they're most common. Each lands on
// the page that actually answers "what do I do first", not on a section index.
const PATHS = [
  {
    eyebrow: "If you play",
    title: "Bring a team",
    body: "Create or join a team, then register a lineup for a scrim.",
    to: "/docs/scrims/registering",
  },
  {
    eyebrow: "If you host",
    title: "Run a scrim",
    body: "Create an organization, publish a scrim, work the slot board, declare results.",
    to: "/docs/scrims/running",
  },
  {
    eyebrow: "If you run a server",
    title: "Connect Discord",
    body: "Invite the bot and run /claim. Announcements land in your channels.",
    to: "/docs/discord/connect-server",
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
          >
            Get started
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to={links.play}
          >
            Browse scrims
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepagePaths() {
  return (
    <section className={styles.paths}>
      <div className="container">
        <div className={styles.pathGrid}>
          {PATHS.map((path) => (
            <Link to={path.to} className={styles.pathCard} key={path.to}>
              <span className={styles.pathEyebrow}>{path.eyebrow}</span>
              <Heading as="h3" className={styles.pathTitle}>
                {path.title}
              </Heading>
              <p className={styles.pathBody}>{path.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Under the audience router, above the feature screenshots: whoever didn't
// pick a path off the three cards gets the whole product in one sitting
// instead of leaving.
function HomepageVideo() {
  return (
    <section className={styles.video}>
      <div className="container">
        <Heading as="h2" className={styles.videoTitle}>
          Watch the walkthrough
        </Heading>
        <p className={styles.videoBody}>
          Hosting a scrim end to end — create it, open registration, assign
          slots, send room details, declare results.
        </p>
        <div className={styles.videoFrame}>
          <YouTubeEmbed
            id={links.tutorialVideoId}
            title="Finalist walkthrough: hosting a scrim end to end"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Run BGMI and Free Fire scrims and tournaments"
      description="Guides for hosting and playing scrims and tournaments on Finalist: slot lists, room details, results and the Discord bot."
    >
      <HomepageHeader />
      <main>
        <HomepagePaths />
        <HomepageVideo />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
