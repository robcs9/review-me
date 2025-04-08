import { PrismaClient } from '@prisma/client';
import reviewData from "../src/lib/data.json" assert { type: "json" };

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding...`);

  for (const r of reviewData.reviews) {
    const review = await prisma.review.create({
      data: {
        comentario: r.comentario,
        timestamp: new Date()
      }
    });
    console.log(`Created review with id: ${review.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
