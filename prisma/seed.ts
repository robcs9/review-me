import { PrismaClient } from '@prisma/client';
import reviewData from "../src/lib/prismamockdata.json" assert { type: "json" };

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding...`);
  
  for (const r of reviewData.reviews) {
    const review = await prisma.review.create({
      data: {
        qualidade: r.qualidade,
        cordialidade: r.cordialidade,
        apresentacao: r.apresentacao,
        temperatura: r.temperatura,
        sabor: r.sabor,
        higiene: r.higiene,
        comentario: r.comentario,
        // timestamp: new Date()
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