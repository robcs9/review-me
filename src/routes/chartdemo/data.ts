
const reviewsData = {
  // count for each answer type
  qualidade: [
    // 'Muito Insatisfeito',
    3,
    // 'Insatisfeito',
    4,
    // 'Neutro',
    1,
    // 'Satisfeito',
    12,
    // 'Muito Satisfeito'
    15
  ],
  cordialidade: [1,2,3,4,5,5,5],
  apresentacao: [1,2,3,4,5,5,5],
  temperatura: [1,2,3,4,5,5,5],
  sabor: [1,2,3,4,5,5,5],
  higiene: [1,2,3,4,5,5,5],
  comentario: [
    'bad','so, so','edible','better',
    'getting there','surprising','delicious'
  ],
  timestamp: [
    '2025-03-31 11:07:23',
    '2025-03-31 12:08:23',
    '2025-03-31 13:09:23',
    '2025-03-31 14:10:23',
    '2025-03-31 15:11:23',
    '2025-03-31 16:12:23',
    '2025-03-31 17:13:23',
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

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '% of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 134,159,0.4)',
        'rgba(98,  182, 239,0.4)',
        'rgba(255, 218, 128,0.4)',
        'rgba(113, 205, 205,0.4)',
        'rgba(170, 128, 252,0.4)',
        'rgba(255, 177, 101,0.4)',
      ],
      borderWidth: 2,
      borderColor: [
        'rgba(255, 134, 159, 1)',
        'rgba(98,  182, 239, 1)',
        'rgba(255, 218, 128, 1)',
        'rgba(113, 205, 205, 1)',
        'rgba(170, 128, 252, 1)',
        'rgba(255, 177, 101, 1)',
      ],
    },
  ],
};

export const reviews = {
  qualidade: {
    labels: [
      'Muito Insatisfeito',
      'Insatisfeito',
      'Neutro',
      'Satisfeito',
      'Muito Satisfeito'
    ],
    datasets: [
      {
        label: '% of Votes',
        data: reviewsData.qualidade,
        // data: [1,2,3,4,5],
        backgroundColor: [
          'rgba(255, 134,159,0.4)',
          'rgba(98,  182, 239,0.4)',
          'rgba(255, 218, 128,0.4)',
          'rgba(113, 205, 205,0.4)',
          'rgba(170, 128, 252,0.4)',
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(255, 134, 159, 1)',
          'rgba(98,  182, 239, 1)',
          'rgba(255, 218, 128, 1)',
          'rgba(113, 205, 205, 1)',
          'rgba(170, 128, 252, 1)',
        ],
      },
    ],
  },
  cordialidade: {
    labels: [1,2,3,4,5],
    datasets: [
      {
        label: '% of Votes',
        data: reviewsData.cordialidade,
        backgroundColor: [
          'rgba(255, 134,159,0.4)',
          'rgba(98,  182, 239,0.4)',
          'rgba(255, 218, 128,0.4)',
          'rgba(113, 205, 205,0.4)',
          'rgba(170, 128, 252,0.4)',
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(255, 134, 159, 1)',
          'rgba(98,  182, 239, 1)',
          'rgba(255, 218, 128, 1)',
          'rgba(113, 205, 205, 1)',
          'rgba(170, 128, 252, 1)',
        ],
      },
    ],
  },
  apresentacao: {
    labels: [1,2,3,4,5],
    datasets: [
      {
        label: '% of Votes',
        data: reviewsData.apresentacao,
        backgroundColor: [
          'rgba(255, 134,159,0.4)',
          'rgba(98,  182, 239,0.4)',
          'rgba(255, 218, 128,0.4)',
          'rgba(113, 205, 205,0.4)',
          'rgba(170, 128, 252,0.4)',
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(255, 134, 159, 1)',
          'rgba(98,  182, 239, 1)',
          'rgba(255, 218, 128, 1)',
          'rgba(113, 205, 205, 1)',
          'rgba(170, 128, 252, 1)',
        ],
      },
    ],
  },
  temperatura: {
    labels: [1,2,3,4,5],
    datasets: [
      {
        label: '% of Votes',
        data: reviewsData.temperatura,
        backgroundColor: [
          'rgba(255, 134,159,0.4)',
          'rgba(98,  182, 239,0.4)',
          'rgba(255, 218, 128,0.4)',
          'rgba(113, 205, 205,0.4)',
          'rgba(170, 128, 252,0.4)',
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(255, 134, 159, 1)',
          'rgba(98,  182, 239, 1)',
          'rgba(255, 218, 128, 1)',
          'rgba(113, 205, 205, 1)',
          'rgba(170, 128, 252, 1)',
        ],
      },
    ],
  },
  sabor: {
    labels: [1,2,3,4,5],
    datasets: [
      {
        label: '% of Votes',
        data: reviewsData.sabor,
        backgroundColor: [
          'rgba(255, 134,159,0.4)',
          'rgba(98,  182, 239,0.4)',
          'rgba(255, 218, 128,0.4)',
          'rgba(113, 205, 205,0.4)',
          'rgba(170, 128, 252,0.4)',
          'rgba(255, 177, 101,0.4)',
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(255, 134, 159, 1)',
          'rgba(98,  182, 239, 1)',
          'rgba(255, 218, 128, 1)',
          'rgba(113, 205, 205, 1)',
          'rgba(170, 128, 252, 1)',
          'rgba(255, 177, 101, 1)',
        ],
      },
    ],
  },
  higiene: {
    labels: [1,2,3,4,5],
    datasets: [
      {
        label: '% of Votes',
        data: reviewsData.higiene,
        backgroundColor: [
          'rgba(255, 134,159,0.4)',
          'rgba(98,  182, 239,0.4)',
          'rgba(255, 218, 128,0.4)',
          'rgba(113, 205, 205,0.4)',
          'rgba(170, 128, 252,0.4)',
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(255, 134, 159, 1)',
          'rgba(98,  182, 239, 1)',
          'rgba(255, 218, 128, 1)',
          'rgba(113, 205, 205, 1)',
          'rgba(170, 128, 252, 1)',
        ],
      },
    ],
  },
  comentario: {
    labels: [1,2,3,4,5],
    datasets: [
      {
        label: '% of Votes',
        data: reviewsData.comentario,
        backgroundColor: [
          'rgba(255, 134,159,0.4)',
          'rgba(98,  182, 239,0.4)',
          'rgba(255, 218, 128,0.4)',
          'rgba(113, 205, 205,0.4)',
          'rgba(170, 128, 252,0.4)',
          'rgba(255, 177, 101,0.4)',
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(255, 134, 159, 1)',
          'rgba(98,  182, 239, 1)',
          'rgba(255, 218, 128, 1)',
          'rgba(113, 205, 205, 1)',
          'rgba(170, 128, 252, 1)',
          'rgba(255, 177, 101, 1)',
        ],
      },
    ],
  },
  timestamp: {
    labels: [1,2,3,4,5],
    datasets: [
      {
        label: '% of Votes',
        data: reviewsData.timestamp,
        backgroundColor: [
          'rgba(255, 134,159,0.4)',
          'rgba(98,  182, 239,0.4)',
          'rgba(255, 218, 128,0.4)',
          'rgba(113, 205, 205,0.4)',
          'rgba(170, 128, 252,0.4)',
          'rgba(255, 177, 101,0.4)',
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(255, 134, 159, 1)',
          'rgba(98,  182, 239, 1)',
          'rgba(255, 218, 128, 1)',
          'rgba(113, 205, 205, 1)',
          'rgba(170, 128, 252, 1)',
          'rgba(255, 177, 101, 1)',
        ],
      },
    ],
  },
};