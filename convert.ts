import * as rawJson from "./projects.json"

const rawProjects = Object.values(rawJson);
// console.log(rawProjects);

const projects = rawProjects.map((p) => {
  return {
    id: p.id,
    title: p.title,
    coverImageUrl: p.cover_image?.url,
    lookingFor: p.looking_for,
    hiringType: p.hiring_type_and_labels?.[0].localized_label,
    whyDescription: p.why_description,
    whatDescription: p.what_description,
    howDescription: p.how_description,
    description: p.description,
    publishedAt: p.published_at,
    updatedAt: p.updated_at,
    staffings: p.staffings?.map((s) => {
      return {
        userId: s.user_id,
      };
    }) || [],
  }
});

// console.log(projects);
console.log(JSON.stringify(projects));