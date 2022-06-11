const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  
  try {
    const missionCommander1 = await prisma.missionCommander.upsert({
      where:{name: "Commander 1"},
      update:{},
      create:{
        name: "Commander 1",
        username: "commax1",
        mainStack: "Java",
        currentEnrollment: 765432,
        hasAzureCertification: true
      }
    });
    
    const missionCommander2 = await prisma.missionCommander.upsert({
      where:{name: "Commander 2"},
      update:{},
      create:{
        name: "Commander 2",
        username: "commax2",
        mainStack: "Node",
        currentEnrollment: 76506432,
        hasAzureCertification: true
      }
    });
    const missionCommander3 = await prisma.missionCommander.upsert({
      where:{name: "Commander 3"},
      update:{},
      create:{
        name: "Commander 3",
        username: "commax3",
        mainStack: "Python",
        currentEnrollment: 723125432,
        hasAzureCertification: true
      }
    });
    const missionCommander4 = await prisma.missionCommander.upsert({
      where:{name: "Commander 4"},
      update:{},
      create:{
        name: "Commander 4",
        username: "commax4",
        mainStack: "Kotlin",
        currentEnrollment: 76543902,
        hasAzureCertification: true
      }
    })

    console.log("mission commander");
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }

})();