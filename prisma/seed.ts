import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import rawProjectSeed from "./projects-seed.json";

const prisma = new PrismaClient();

const createBooks = async () => {
  Array.from({ length: 5 }).forEach(async () => {
    await prisma.book.create({
      data: {
        title: faker.lorem.words(),
        author: `${faker.name.firstName()} ${faker.name.lastName()}`,
      },
    });
  });
};

const createUsers = async () => {
  return await Promise.all(
    Array.from({ length: 10 }).map(async () => {
      await prisma.user.create({
        data: {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatar: faker.internet.avatar(),
        },
      });
    })
  );
};

const createProjects = async () => {
  return Promise.all(
    Object.values(rawProjectSeed).map(async (projectSeed) => {
      const set = new Set(
        Array.from({ length: 4 }).map(() => {
          return faker.datatype.number({ min: 1, max: 10 });
        })
      );
      const ids = Array.from(set).map((id) => {
        return { userId: id };
      });

      await prisma.project.create({
        data: {
          id: projectSeed.id,
          title: projectSeed.title || faker.lorem.sentence(7),
          coverImageUrl: projectSeed.coverImageUrl || "",
          lookingFor: projectSeed.lookingFor || null,
          hiringType: projectSeed.hiringType || null,
          whatDescription: projectSeed.whatDescription || faker.lorem.paragraphs(3),
          whyDescription: projectSeed.whyDescription || faker.lorem.paragraphs(3),
          howDescription: projectSeed.howDescription || faker.lorem.paragraphs(3),
          description: projectSeed.description || faker.lorem.paragraphs(3),
          publishedAt: projectSeed.publishedAt || new Date(),
          updatedAt: projectSeed.updatedAt || new Date(),
          staffings: {
            create: ids,
          },
        },
      });
    })
  );
};

async function main() {
  await createBooks();
  await createUsers();
  await createProjects();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
