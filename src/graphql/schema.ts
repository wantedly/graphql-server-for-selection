import { makeSchema } from "nexus";
import path from "path";

import * as queries from "./queries/index";
import * as types from "./types/index";

export const schema = makeSchema({
  types: [
    ...Object.values(types),
    ...Object.values(queries),
  ],
  outputs: {
    typegen: path.join(__dirname, "/generated/typings.ts"),
    schema: path.join(__dirname, "/generated/schema.graphql"),
  },
});
