import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import type { Review, ReviewKeys  } from './types';

const attrs = [
  'qualidade', 'cordialidade', 'apresentacao',
  'temperatura', 'sabor', 'higiene', 'comentario'
];

function buildDatasets(data: Review[]) {
  let datasets = {
    qualidade: [],
    cordialidade: [],
    apresentacao: [],
    temperatura: [],
    sabor: [],
    higiene: [],
    comentario: [],
  };

  attrs.forEach((attr) => {
    data.forEach(review => {
      datasets[attr].push(review[attr]);
    });
  });

  return datasets;
}

export const load = (async () => {
  const month = new Date().getMonth();
  const count = await prisma.review.count();
  const res = await prisma.review.findMany() satisfies Review[];
  const datasets = buildDatasets(res);

  return { reviews: { month, datasets, count } };
}) satisfies PageServerLoad;