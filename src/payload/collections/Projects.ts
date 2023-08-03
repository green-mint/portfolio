import type { CollectionConfig } from "payload/types";
import { formatSlug } from "../utils";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "oneLiner",
      type: "text",
      label: "One Line Description",
      required: true,
    },
    {
      name: "isSelected",
      type: "checkbox",
      label: "Is Selected",
      defaultValue: false,
    },
    {
      name: "position",
      type: "number",
      label: "Position",
      required: true,
    },
    {
      name: "url",
      type: "text",
      label: "URL",
      required: true,
      defaultValue: "/",
    },
    {
      name: "techStack",
      type: "array",
      label: "Tech Stack",
      required: true,
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: "name",
          type: "text",
          label: "Name",
          required: true,
        },
      ],
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
  ],
};

export default Projects;
