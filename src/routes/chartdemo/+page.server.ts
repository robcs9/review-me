import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

const attrs = [
  'qualidade', 'cordialidade', 'apresentacao',
  'temperatura', 'sabor', 'higiene',
  // 'comentario'
];

function buildDatasets(data: object[]) {
  // console.log(data)
  const datasets = {
    qualidade: [],
    cordialidade: [],
    apresentacao: [],
    temperatura: [],
    sabor: [],
    higiene: [],
  };
  attrs.forEach((attr) => {
    data[attr].forEach(
      (review) => {
        if(!(
          Object.hasOwn(review, 'null') ||
          Object.hasOwn(review, '0')
        )) {
          // console.log(Object.values(review)[0])
          // dataset.push(Object.values(review)[0])
          datasets[attr].push(Object.values(review)[0])
        }
      }
    );
  });

  return datasets;
}

export const load = (async () => {
  const DATE = new Date();
  const MONTH = DATE.getMonth();
  const YEAR = DATE.getFullYear();
  const QUERYCONDITION = {
    timestamp: { lt: new Date(YEAR, MONTH+1, 1) },
    AND: { timestamp: { gte: new Date(YEAR, MONTH, 1) } }
  };
  
  const reviews = await prisma.review.findMany({
    where: QUERYCONDITION
  });
  const data = {
    count: await prisma.review.count({
      where: QUERYCONDITION
    }),
    MONTH,
    datasets: {
      qualidade: [],
      cordialidade: [],
      apresentacao: [],
      temperatura: [],
      sabor: [],
      higiene: [],
      comentario: [],
    }
  }
  // console.log(counts.rows)
  for(const attr of attrs) {
    const groups = await prisma.review.groupBy({
      // by: 'qualidade',
      by: attr,
      _count: {
        _all: true,
        // id: true,
        // qualidade: true,
        // cordialidade: true,
      },
    });

    for(const group of groups) {
      const obj = {}
      const key = group[attr];
      const val = group['_count']['_all'];
      obj[key] = val;
      data.datasets[attr].push(obj)
    }
  }
  // const datasets = buildDatasets(res);
  data.datasets = buildDatasets(data.datasets);
  return { reviews: data };
}) satisfies PageServerLoad;