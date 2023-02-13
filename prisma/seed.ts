import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createTodos = async () => {
  Array.from({ length: 5 }).forEach(async () => {
    await prisma.book.create({
      data: {
        title: faker.lorem.words(),
        author: `${faker.name.firstName()} ${faker.name.lastName()}`,
      },
    });
  });
};

async function main() {
  await createTodos();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
