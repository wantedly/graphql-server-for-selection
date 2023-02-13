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

const createProjects = async () => {
  Array.from({ length: 5 }).forEach(async () => {
    await prisma.user.create({
      data: {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      },
    });
  });

  Array.from({ length: 10 }).forEach(async () => {
    await prisma.project.create({
      data: {
        title: faker.lorem.sentence(7),
        coverImageUrl: faker.internet.avatar(),
        whatDescription: faker.lorem.paragraph(),
        whyDescription: faker.lorem.paragraph(),
        howDescription: faker.lorem.paragraph(),
        description: faker.lorem.paragraph(),
        staffings: {
          create: Array.from({ length: 4 }).map((_, index) => {
            return {
              userId: index + 1,
            };
          }),
        },
      },
    });
  });
};

async function main() {
  await createBooks();
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
