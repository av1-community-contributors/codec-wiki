import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  site: "https://codec-wiki.pages.dev",
  integrations: [
    starlight({
      plugins: [starlightBlog()],
      title: "Codec Wiki",
      lastUpdated: true,
      description: "Your Guide to All Things Encoding",
      logo: { src: "./src/assets/favicon.svg" },
      editLink: {
        baseUrl: "https://github.com/libreom/codec-wiki/edit/main/star/",
      },
      social: {
        discord: "https://discord.gg/bbQD5MjDr3",
        github: "https://github.com/libreom/codec-wiki",
      },
      sidebar: [
        {
          label: "💡 Introduction",
          collapsed: true,
          autogenerate: { directory: "docs/introduction" },
        },
        {
          label: "🔊 Audio",
          collapsed: true,
          autogenerate: { directory: "docs/audio" },
        },
        {
          label: "📹️ Video",
          collapsed: true,
          autogenerate: { directory: "docs/video" },
        },
        {
          label: "💽 Data",
          collapsed: true,
          autogenerate: { directory: "docs/data" },
        },
        {
          label: "🏞️ Images",
          collapsed: true,
          autogenerate: { directory: "docs/images" },
        },
        {
          label: "💾 Encoders",
          collapsed: true,
          autogenerate: { directory: "docs/encoders" },
        },
        {
          label: "🚀 Hardware Encoders",
          collapsed: true,
          autogenerate: { directory: "docs/encoders_hw" },
        },
        {
          label: "💬 Subtitles",
          collapsed: true,
          autogenerate: { directory: "docs/subtitles" },
        },
        {
          label: "🎞️ Filtering",
          collapsed: true,
          autogenerate: { directory: "docs/filtering" },
        },
        {
          label: "🛠️ Utilities",
          collapsed: true,
          autogenerate: { directory: "docs/utilities" },
        },
        {
          label: "👁️ Metrics",
          collapsed: true,
          autogenerate: { directory: "docs/metrics" },
        },
        {
          label: "▶️ Video Players",
          link: "/docs/video-players/",
        },
        {
          label: "🗃️ Resources",
          link: "/docs/resources/",
        },
        {
          label: "✒️ Contribution Guide",
          link: "/docs/contribution-guide/",
        },
        {
          label: "❓ FAQ",
          link: "/docs/faq/",
        },
        {
          label: "🔏 Privacy Policy",
          link: "/docs/privacy-policy/",
        },
        {
          label: "🤝 Terms of Use",
          link: "/docs/terms-of-use/",
        },
      ],
    }),
  ],
});
