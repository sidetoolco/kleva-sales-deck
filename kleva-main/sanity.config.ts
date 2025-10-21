// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

/* 
For TypeGen:

Use:
projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "",
dataset: process.env.PUBLIC_SANITY_DATASET || "",

Run:
npx sanity@latest schema extract --path=./src/sanity/extract.json

Then:
npx sanity@latest typegen generate

*/

export default defineConfig({
  name: "kleva",
  title: "Kleva",
  //projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "",
  //dataset: process.env.PUBLIC_SANITY_DATASET || "",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [structureTool()],
  schema,
});
