import { PrismaClient } from "@prisma/client";
import { education, experience, project } from "@/data/data ";

const prisma = new PrismaClient();

async function main() {
  await prisma.education.createMany({
    data: education,
    skipDuplicates: true,
  });

  await prisma.experience.createMany({
    data: experience,
    skipDuplicates: true,
  });

  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: project,
  });
}

main()
  .then(() => console.log("✅ Data berhasil di-import"))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
