import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
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
        backend: {
          name: "git-gateway",
          branch: "main",
        },
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
                name: "tag",
                widget: "relation",
                label: "Tag",
                collection: "tags",
                value_field: "title",
                search_fields: ["title"],
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
