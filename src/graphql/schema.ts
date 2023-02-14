import { makeSchema } from "nexus";
import path from "path";

import * as inputs from "./inputs";
import * as queries from "./queries/index";
import * as types from "./types/index";

type ContextType = Parameters<typeof makeSchema>[0]["contextType"];
const contextType: ContextType =
  process.env.NODE_ENV === "development"
    ? {
        module: path.join(__dirname, "/../context.ts"),
        export: "Context",
      }
    : undefined;

export const schema = makeSchema({
  types: [...Object.values(types), ...Object.values(queries), ...Object.values(inputs)],
  outputs: {
    typegen: path.join(__dirname, "/generated/typings.ts"),
    schema: path.join(__dirname, "/generated/schema.graphql"),
  },
  contextType,
});
