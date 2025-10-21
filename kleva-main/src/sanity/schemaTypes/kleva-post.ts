import { defineField, defineType } from "sanity";

export const KlevaPost = defineType({
  name: "klevaPost",
  type: "document",
  fields: [
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      description: "The category of the post, choose from the list",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readingTime",
      type: "number",
      validation: (Rule) => Rule.required(),
      description: "Estimated reading time in minutes",
    }),
    defineField({
      name: "brief",
      type: "text",
      description: "A brief summary of the post",
      validation: (Rule) =>
        Rule.required()
          .max(250)
          .error("Brief must be less than 250 characters"),
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "keyTakeaways",
      title: "Key Takeaways",
      type: "array",
      of: [{ type: "string" }],
      description: "Bullet points summarizing the main insights (3-5 items)",
    }),
    defineField({
      name: "targetPrompts",
      title: "Target Prompts",
      type: "array",
      of: [{ type: "string" }],
      description: "AI prompts this article should rank for",
    }),
    defineField({
      name: "comparisonData",
      title: "Comparison Data",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "feature", type: "string" },
            { name: "kleva", type: "string" },
            { name: "competitor", type: "string" },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "author.name",
      media: "author.image",
    },
  },
});
