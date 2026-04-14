import { PrismaClient } from "@prisma/client";
import { education, experience } from "../src/data/data ";

const prisma = new PrismaClient();

async function main() {
  // EDUCATION
  await prisma.education.createMany({
    data: education,
    skipDuplicates: true,
  });

  // EXPERIENCE
  await prisma.experience.createMany({
    data: experience,
    skipDuplicates: true,
  });
}

main()
  .then(() => console.log("✅ Data berhasil di-import"))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
