// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContent";
import { KlevaPost } from "./kleva-post";
import { authorType } from "./author";
import { categoryType } from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, KlevaPost, authorType, categoryType],
};
