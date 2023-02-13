import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
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
    Array.from({ length: 10 }).map(async (_, index) => {
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
          id: index + 1,
          title: faker.lorem.sentence(7),
          coverImageUrl: faker.internet.avatar(),
          whatDescription: faker.lorem.paragraph(),
          whyDescription: faker.lorem.paragraph(),
          howDescription: faker.lorem.paragraph(),
          description: faker.lorem.paragraph(),
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
