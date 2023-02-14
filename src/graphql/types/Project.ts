import { objectType } from "nexus";
import { Staffing } from "./Staffing";

export const Project = objectType({
  name: "Project",
  description: "募集",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("title", { description: "募集のタイトル。" });
    t.nonNull.string("coverImageUrl", { description: "募集トップに表示する画像の URL。" });
    t.string("lookingFor", { description: "募集している職種。" });
    t.string("hiringType", { description: "雇用形態。" });
    t.nonNull.string("whyDescription", { description: "なぜやっているのか、の本文" });
    t.nonNull.string("whatDescription", { description: "なにをやっているのか、の本文" });
    t.nonNull.string("howDescription", { description: "どうやっているのか、の本文" });
    t.nonNull.string("description", { description: "こんなことをやります、の本文" });
    t.nonNull.datetime("publishedAt", { description: "公開日時" });
    t.nonNull.datetime("updatedAt", { description: "更新日時" });
    t.nonNull.list.field("staffings", {
      type: Staffing,
      description: "募集に紐付けられたメンバーのリスト。"
    });
  },
});
