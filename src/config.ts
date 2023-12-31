import type { Config } from "@staticcms/core";

const config: Config = {
  backend: {
    name: 'git-gateway'
  },
  media_folder: "public/images",
  public_folder: "/images",
  collections: [
    {
      name: "config",
      label: "Config",
      delete: false,
      editor: { preview: false },
      files: [
        {
          name: "general",
          label: "Site Config",
          file: "content/config.json",
          description: "General site settings",
          fields: [
            {
              label: "URL",
              name: "base_url",
              widget: "string",
              hint: "Do not enter the trailing slash of the URL",
            },
            { label: "Site title", name: "site_title", widget: "string" },
            {
              label: "Site description",
              name: "site_description",
              widget: "string",
            },
            {
              label: "Site keywords",
              name: "site_keywords",
              widget: "list",
              summary: "{{fields.keyword.keyword}}",
              fields: [{ label: "Keyword", name: "keyword", widget: "string" }],
            },
            {
              label: "Twitter account",
              name: "twitter_account",
              widget: "string",
            },
            {
              label: "GitHub account",
              name: "github_account",
              widget: "string",
            },
          ],
        },
      ],
    },
    {
      name: "meta",
      label: "Meta",
      delete: false,
      editor: { preview: false },
      files: [
        {
          name: "authors",
          label: "Authors",
          file: "content/meta/authors.yml",
          description: "Author descriptions",
          fields: [
            {
              name: "authors",
              label: "Authors",
              label_singular: "Author",
              widget: "list",
              fields: [
                {
                  label: "Slug",
                  name: "slug",
                  widget: "string",
                  hint: "The part of a URL identifies the author",
                },
                {
                  label: "Name",
                  name: "name",
                  widget: "string",
                  hint: "First and Last",
                },
                { label: "Introduction", name: "introduction", widget: "text" },
              ],
            },
          ],
        },
        {
          name: "tags",
          label: "Tags",
          file: "content/meta/tags.yml",
          description: "List of tags",
          fields: [
            {
              name: "tags",
              label: "Tags",
              label_singular: "Tag",
              widget: "list",
              fields: [
                {
                  label: "Slug",
                  name: "slug",
                  widget: "string",
                  hint: "The part of a URL identifies the tag",
                },
                {
                  label: "Display Name",
                  name: "name",
                  widget: "string",
                  hint: "Tag name for displaying on the site",
                },
              ],
            },
          ],
        },
        {
          name: "types",
          label: "types",
          file: "content/meta/types.yml",
          description: "List of types",
          fields: [
            {
              name: "types",
              label: "types",
              label_singular: "type",
              widget: "list",
              fields: [
                {
                  label: "Slug",
                  name: "slug",
                  widget: "string",
                  hint: "The part of a URL identifies the type",
                },
                {
                  label: "Display Name",
                  name: "name",
                  widget: "string",
                  hint: "Type name for displaying on the site",
                },

              ],
            },
          ],
        },
        {
          name: "colors",
          label: "colors",
          file: "content/meta/colors.yml",
          description: "List of colors",
          fields: [
            {
              name: "colors",
              label: "colors",
              label_singular: "color",
              widget: "list",
              fields: [
                {
                  label: "Slug",
                  name: "slug",
                  widget: "string",
                  hint: "The part of a URL identifies the color",
                },
                {
                  label: "Display Name",
                  name: "name",
                  widget: "string",
                  hint: "Color name for displaying on the site",
                },

              ],
            },
          ],
        },
        {
          name: "models",
          label: "models",
          file: "content/meta/models.yml",
          description: "List of models",
          fields: [
            {
              name: "models",
              label: "models",
              label_singular: "model",
              widget: "list",
              fields: [
                {
                  label: "Slug",
                  name: "slug",
                  widget: "string",
                  hint: "The part of a URL identifies the model",
                },
                {
                  label: "Display Name",
                  name: "name",
                  widget: "string",
                  hint: "Model name for displaying on the site",
                },

              ],
            },
          ],
        },
      ],
    },
    {
      name: "products",
      label: "Products",
      folder: "content/products/",
      extension: "mdx",
      format: "frontmatter",
      create: true,
      slug: "{{slug}}",
      identifier_field: "slug",
      summary: "{{title}}",
      fields: [
        { label: "Slug", name: "slug", widget: "string" },
        { label: "Title", name: "title", widget: "string" },
        {
          label: "Publish Date",
          name: "date",
          widget: "datetime",
          format: "yyyy-MM-dd",
          date_format: "yyyy-MM-dd",
          time_format: false,
        },
        {
          label: "Model",
          name: "model",
          widget: "relation",
          collection: "meta",
          file: "models",
          search_fields: ["models.*.name"],
          display_fields: ["models.*.name"],
          value_field: "models.*.slug",
        },
        {
          label: "Type",
          name: "type",
          widget: "relation",
          collection: "meta",
          file: "types",
          search_fields: ["types.*.name"],
          display_fields: ["types.*.name"],
          value_field: "types.*.slug",
        },
        {
          label: "Price",
          name: "price",
          widget: "number",
          value_type: "int",
        },
        {
          label: "Images",
          name: "images",
          widget: "list",
          fields: [
            {
              name: 'color',
              label: 'Color',
              widget: 'relation',
              collection: "meta",
              file: "colors",
              search_fields: ["colors.*.name"],
              display_fields: ["colors.*.name"],
              value_field: "colors.*.slug",
            },
            {
              name: 'image',
              label: 'Image',
              widget: 'image',
            },
          ]
        },
        {
          label: "Tags",
          label_singular: "Tag",
          name: "tags",
          widget: "list",
          summary: "{{fields.tag}}",
          fields: [
            {
              label: "Tag",
              name: "tag",
              widget: "relation",
              collection: "meta",
              file: "tags",
              search_fields: ["tags.*.name"],
              display_fields: ["tags.*.name"],
              value_field: "tags.*.slug",
            },
          ],
        },
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
    {
      name: "posts",
      label: "Posts",
      folder: "content/posts/",
      extension: "mdx",
      format: "frontmatter",
      create: true,
      slug: "{{slug}}",
      identifier_field: "slug",
      summary: "{{title}}",
      fields: [
        { label: "Slug", name: "slug", widget: "string" },
        { label: "Title", name: "title", widget: "string" },
        {
          label: "Publish Date",
          name: "date",
          widget: "datetime",
          format: "yyyy-MM-dd",
          date_format: "yyyy-MM-dd",
          time_format: false,
        },
        {
          label: "Author",
          name: "author",
          widget: "relation",
          collection: "meta",
          file: "authors",
          search_fields: ["authors.*.name"],
          display_fields: ["authors.*.name"],
          value_field: "authors.*.slug",
        },
        {
          label: "Tags",
          label_singular: "Tag",
          name: "tags",
          widget: "list",
          summary: "{{fields.tag}}",
          fields: [
            {
              label: "Tag",
              name: "tag",
              widget: "relation",
              collection: "meta",
              file: "tags",
              search_fields: ["tags.*.name"],
              display_fields: ["tags.*.name"],
              value_field: "tags.*.slug",
            },
          ],
        },
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
  ],
};

export default config;
