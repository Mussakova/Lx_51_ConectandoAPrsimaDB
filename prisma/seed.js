const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
      const Explorercrud0 = await prisma.explorerCrud.upsert({
        where: { name: 'AralyaCrud' },
        update: {},
        create: {
          name: 'Aralya Mussakova',
                  lang: 'Español',
                  missionCommander: 'Carlogilmar',
                  enrollments: 567890,
                  hasCertification: true
        },
      });

      

    console.log('Create 3 explorers n 1 Exp.crud');
  } 
  
  catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }

})();