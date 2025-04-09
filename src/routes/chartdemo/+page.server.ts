import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const res = await prisma.review.findFirst();
  return { review: res };
}) satisfies PageServerLoad;
