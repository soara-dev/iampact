import { themes as prismThemes } from "prism-react-renderer";

const config = {
  title: "Iampact",
  tagline: "Ngoding Makin Simple tapi Powerful Gesss ",
  favicon: "img/favicon.ico?v=1",
  url: "https://iam-starterpack.iamevent.my.id/",
  baseUrl: "/",
  organizationName: "facebook",
  projectName: "docusaurus",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          breadcrumbs: false,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      disableSwitch: true,
      defaultMode: "light",
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "Iampact",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg?v=1",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Tutorial",
        },
        // { to: "/docs/about", label: "About", position: "right" },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Iampact.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
