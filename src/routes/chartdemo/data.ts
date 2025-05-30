import type { ChartData } from "chart.js";
interface ReviewChartData {
  // qualidade: ChartData;
  cordialidade: ChartData;
  apresentacao: ChartData;
  temperatura: ChartData;
  sabor: ChartData;
  higiene: ChartData;
}

// crypto doesn't play well on the client-side
function randomReviewData() {
  let randNums = [];
  for(let i = 0; i < 5; i++) {
    randNums.push(Math.floor(Math.random() * 100));
  }
  return randNums;
}

// Muito Insatisfeito,Insatisfeito,Neutro,Satisfeito,Muito Satisfeito
const qualidade = [10,20,30,40,50];
// Nota 1, 2, 3, 4, 5
const cordialidade = randomReviewData();
const apresentacao = randomReviewData();
const temperatura = randomReviewData();
const sabor = randomReviewData();
const higiene = randomReviewData();
const qualidadeTotal = countTotal(qualidade);
const cordialidadeTotal = countTotal(cordialidade);
const apresentacaoTotal = countTotal(apresentacao);
const temperaturaTotal = countTotal(temperatura);
const saborTotal = countTotal(sabor);
const higieneTotal = countTotal(higiene);

function countTotal(values: number[]) {
  return values.reduce(
    (prev, curr) => (prev + curr)
  );
}

export const reviewsData = {
  qualidade,
  cordialidade,
  apresentacao,
  temperatura,
  sabor,
  higiene,
  qualidadeTotal,
  cordialidadeTotal,
  apresentacaoTotal,
  temperaturaTotal,
  saborTotal,
  higieneTotal,
  // qualidadeTotal: qualidade.reduce(),
  comentario: [
    'bad','so, so','edible','better',
    'getting there','surprising','delicious'
  ],
  timestamp: [
    '2025-03-31 11:07:23','2025-03-31 12:08:23',
    '2025-03-31 13:09:23','2025-03-31 14:10:23',
    '2025-03-31 15:11:23','2025-03-31 16:12:23',
    // ...
  ],
};

/* const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Weekly Sales',
      data: [18, 12, 6, 9, 14],
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 1)'
      ],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    },
    {
      label: 'Weekly Sales',
      data: [18, 12, 6, 9, 14],
      backgroundColor: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 1)'
      ],
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ]}; */

export const csatData: ChartData = {
  labels: [
    'Muito Insatisfeito', 'Insatisfeito',
    'Neutro', 'Satisfeito', 'Muito Satisfeito'
  ],
  datasets: [
    {
      label: 'Respostas (%)',
      data: reviewsData.qualidade,
      backgroundColor: [
        'rgba(255, 134,159,1)',
        'rgba(98,  182, 239,1)',
        'rgba(255, 218, 128,1)',
        'rgba(113, 205, 205,1)',
        'rgba(170, 128, 252,1)',
      ],
      borderWidth: 2,
    },
  ],
};

export const reviews: ChartData = {
  labels: [
    'Cordialidade da Equipe','Apresentação dos Pratos',
    'Temperatura dos alimentos','Sabor dos alimentos','Limpeza/Higiene',
  ],
  datasets: [
    {
      label: 'Nota 1',
      data: [
        reviewsData.cordialidade[0],
        reviewsData.apresentacao[0],
        reviewsData.temperatura[0],
        reviewsData.sabor[0],
        reviewsData.higiene[0],
      ],
      backgroundColor: 'rgba(255, 134, 159,1)',
    },
    {
      label: 'Nota 2',
      data: [
        reviewsData.cordialidade[1],
        reviewsData.apresentacao[1],
        reviewsData.temperatura[1],
        reviewsData.sabor[1],
        reviewsData.higiene[1],
      ],
      backgroundColor: 'rgba(98, 182, 239,1)',
    },
    {
      label: 'Nota 3',
      data: [
        reviewsData.cordialidade[2],
        reviewsData.apresentacao[2],
        reviewsData.temperatura[2],
        reviewsData.sabor[2],
        reviewsData.higiene[2],
      ],
      backgroundColor: 'rgba(255, 218, 128,1)',
    },
    {
      label: 'Nota 4',
      data: [
        reviewsData.cordialidade[3],
        reviewsData.apresentacao[3],
        reviewsData.temperatura[3],
        reviewsData.sabor[3],
        reviewsData.higiene[3],
      ],
      backgroundColor: 'rgba(113, 205, 205,1)',
    },
    {
      label: 'Nota 5',
      data: [
        reviewsData.cordialidade[4],
        reviewsData.apresentacao[4],
        reviewsData.temperatura[4],
        reviewsData.sabor[4],
        reviewsData.higiene[4],
      ],
      backgroundColor: 'rgba(170, 128, 252,1)',
    },
  ],
};