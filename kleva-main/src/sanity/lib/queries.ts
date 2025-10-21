import { defineQuery } from "groq";

export const klevaPostsQuery = defineQuery(
  `*[
    _type == "klevaPost"]|order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    readingTime,
    brief,
    body,
    category->{title},
    author->{name, slug, role},
    }`
);

export const klevaPostQuery =
  defineQuery(`*[_type == "klevaPost" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    readingTime,
    brief,
    body,
    category->{title},
    author->{name, slug, role},
}`);
