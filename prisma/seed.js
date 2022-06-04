const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  
  try {
    console.log("");
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }

})();