import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { links } from "./constants";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// What the blog published while it lived on this site. Kept as data because the
// redirect table below is the only thing that still needs to know.
const BLOG_HOME = "https://finalist.live/blog";
const BLOG_POSTS = [
  "bgmi-points-table-explained",
  "room-id-leaks",
  "hosting-scrims-google-form-breaks",
  "drawing-lobbies-nobody-can-call-rigged",
  "daily-scrims-without-burning-out",
  "entry-fees-prize-money-and-the-act",
];
const BLOG_TAGS = [
  "bgmi",
  "community",
  "discord",
  "formats",
  "free-fire",
  "hosting",
  "india",
  "scrims",
  "tournaments",
];

const config: Config = {
  title: "Finalist",
  tagline: "Run scrims and tournaments your community actually shows up for",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // The site is served from the custom domain, not the Pages default. This has
  // to be the domain people actually land on: Docusaurus builds every canonical
  // URL, og:url and og:image from it, and pointing them at finalistbot.github.io
  // while the content lives at docs.finalist.live splits the two hosts in search.
  url: "https://docs.finalist.live",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "finalistbot", // Usually your GitHub org/user name.
  projectName: "finalistbot.github.io", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Font hosts are on separate origins and block first paint; warm the
  // connections while the HTML is still parsing.
  headTags: [
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://api.fontshare.com" },
    },
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],

  // Brand faces, the same pairing and the same sources as the app: Clash Display
  // for headings (Fontshare — there is no npm package), Inter for body.
  // src/css/custom.css points --ifm-heading-font-family at them.
  stylesheets: [
    {
      href: "https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap",
      type: "text/css",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      type: "text/css",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/finalistbot/finalistbot.github.io/tree/main/",
        },
        // The blog lives at finalist.live/blog now: a post earns links for the
        // domain that has the product and the signup on it, not for a docs
        // subdomain. `false`, not omitted — preset-classic turns the blog on
        // with defaults when the key is missing.
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        // Default sitemap entries are all priority 0.5 / weekly, which tells a
        // crawler nothing. Rank them instead.
        sitemap: {
          lastmod: "date",
          changefreq: null,
          priority: null,
          createSitemapItems: async ({ defaultCreateSitemapItems, ...rest }) => {
            const items = await defaultCreateSitemapItems(rest);
            return items.map((item) => {
              const path = item.url.replace(/^https?:\/\/[^/]+/, "") || "/";
              if (path === "/") return { ...item, priority: 1.0 };
              if (path === "/docs/getting-started")
                return { ...item, priority: 0.8 };
              return { ...item, priority: 0.6 };
            });
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  // Every URL the blog published while it lived here, pointed at its new home.
  // GitHub Pages serves static files and cannot issue a 301, so these are
  // meta-refresh pages — weaker than a real redirect, and enough here: the blog
  // was up for hours, so there is little accumulated ranking to carry across.
  // If docs.finalist.live ever sits behind a proxy that can issue a 301, do it
  // there and leave these as the fallback.
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          { from: "/blog", to: BLOG_HOME },
          { from: "/blog/archive", to: BLOG_HOME },
          { from: "/blog/authors", to: BLOG_HOME },
          { from: "/blog/authors/finalist", to: BLOG_HOME },
          { from: "/blog/tags", to: BLOG_HOME },
          // The feed moved with it; Atom folds into the one feed that exists now.
          { from: "/blog/rss.xml", to: `${BLOG_HOME}/rss.xml` },
          { from: "/blog/atom.xml", to: `${BLOG_HOME}/rss.xml` },
          // Tag pages were never rebuilt on the new site — six posts over nine
          // tags is nine near-empty pages — so they land on the index.
          ...BLOG_TAGS.map((tag) => ({
            from: `/blog/tags/${tag}`,
            to: BLOG_HOME,
          })),
          ...BLOG_POSTS.map((slug) => ({
            from: `/blog/${slug}`,
            to: `${BLOG_HOME}/${slug}`,
          })),
        ],
      },
    ],
  ],

  themeConfig: {
    // 1200x630, generated by scripts/generate-og-cards.py. The logo is square,
    // and every platform crops a square into a wide slot badly.
    image: "img/og/default.png",
    colorMode: {
      // The app is dark-first — the marketing site is hardcoded dark and can't
      // even be switched — so the docs open dark to match. A visitor whose OS
      // says light still gets light; this only decides the no-preference case.
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Finalist",
      logo: {
        alt: "Finalist Logo",
        src: "img/finalist.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        { href: links.blog, label: "Blog", position: "left" },
        {
          href: links.supportServer,
          label: "Support Server",
          position: "right",
        },
        {
          href: links.botInvite,
          label: "Invite Bot",
          position: "right",
        },
        {
          href: links.github,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/docs/getting-started",
            },
            {
              label: "Blog",
              href: links.blog,
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: links.supportServer,
            },
            {
              label: "Github",
              href: links.github,
            },
            {
              label: "Youtube",
              href: links.youtube,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Finalist.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
