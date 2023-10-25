import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  site: "https://phongever.netlify.app",
  markdown: {
    shikiConfig: {
      theme: "monokai",
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    NetlifyCMS({
      config: {
        backend: import.meta.env.PROD
          ? {
              name: "github",
              repo: "phongever/phongever",
              branch: "preview",
            }
          : {
              name: "git-gateway",
            },
        publish_mode: "editorial_workflow",
        media_folder: "src/content/uploads",
        public_folder: "../uploads",
        collections: [
          {
            name: "blog",
            label: "Blog",
            folder: "src/content/blog",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Title" },
              {
                name: "date",
                widget: "datetime",
                label: "Date",
                date_format: "YYYY-MM-DD",
              },
              { name: "body", widget: "markdown", label: "Body" },
            ],
          },
          {
            name: "notes",
            label: "Notes",
            folder: "src/content/notes",
            create: true,
            delete: true,
            fields: [
              {
                name: "title",
                widget: "string",
                label: "Title",
              },
              {
                name: "tags",
                widget: "relation",
                label: "Tag",
                collection: "tags",
                value_field: "title",
                search_fields: ["title"],
                multiple: true,
              },
              { name: "body", widget: "markdown", label: "Body" },
            ],
          },
          {
            name: "tags",
            label: "Tags",
            folder: "src/content/tags",
            create: true,
            delete: true,
            fields: [{ name: "title", widget: "string", label: "Title" }],
          },
          {
            label: "Pages",
            name: "pages",
            files: [
              {
                label: "Home",
                name: "home",
                file: "src/content/pages/home.md",
                fields: [{ label: "Body", name: "body", widget: "markdown" }],
              },
            ],
          },
        ],
      },
    }),
  ],
});
