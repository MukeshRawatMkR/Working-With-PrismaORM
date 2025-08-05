const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({
  //   data: {
  //     name: 'John Doe',
  //     email: 'john1@example.com',
  //   },
  // });
  // console.log(user);
  
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
