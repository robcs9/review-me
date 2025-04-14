<!-- <script>
  import { Bar } from 'svelte-chartjs';
  import { data } from './data';

  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
</script>

<Bar {data} options={{ responsive: true }} />
 -->

<!-- Single File Component -->
<!-- Chart.svelte -->
<!-- <script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let chartCanvas;

  onMount(() => {
    const ctx = chartCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
          label: 'Colors',
          data: [12, 19, 3, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
</script>

<canvas bind:this={chartCanvas}></canvas>

<style>
  canvas {
    max-width: 600px;
    margin: 20px;
  }
</style> -->

<!-- With Reactive Data -->
<!-- <script>
  import { onMount, onDestroy } from 'svelte';
  import Chart from 'chart.js/auto';

  let chartCanvas;
  let chart;
  let dataPoints = [12, 19, 3, 5];

  // Reactive statement to update chart when data changes
  $: if (chart) {
    chart.data.datasets[0].data = dataPoints;
    chart.update();
  }

  onMount(() => {
    chart = new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Sales',
          data: dataPoints,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  });

  onDestroy(() => {
    if (chart) chart.destroy();
  });

  function addData() {
    dataPoints = [...dataPoints, Math.floor(Math.random() * 20)];
    console.log(dataPoints)
  }
</script>

<canvas bind:this={chartCanvas}></canvas>
<button on:click={addData}>Add Data</button> -->

<!-- Using with SvelteKit (TypeScript version): -->
<!-- +page.svelte -->
<!-- <script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Chart from 'chart.js/auto';
  import type { ChartConfiguration } from 'chart.js';

  let chartCanvas: HTMLCanvasElement;
  let chart: Chart;

  const config: ChartConfiguration = {
    type: 'pie',
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ]
      }]
    }
  };

  onMount(() => {
    chart = new Chart(chartCanvas, config);
  });

  onDestroy(() => {
    if (chart) chart.destroy();
  });
</script>

<canvas bind:this={chartCanvas}></canvas> -->

<!-- Using svelte-chartjs (Alternative Wrapper): -->

<script lang="ts">
  import type { ChartOptions, ChartData, Plugin } from 'chart.js';
  import type { PageData } from './$types';
  import { Bar, Pie, Doughnut } from 'svelte-chartjs';
  import { Chart, registerables } from 'chart.js';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  import * as mockData from './data';
  
  export let data: PageData;

  Chart.register(...registerables);
  Chart.register(ChartDataLabels);

  const csatColors = {
    MUITOINSATISFEITO: [255,134,159],
    INSATISFEITO: [98,182,239],
    NEUTRO: [255,218,128],
    SATISFEITO: [113,205,205],
    MUITOSATISFEITO: [170,128,252],
  }
  // bg and txt colors are matched by index
  const COLORS = {
    bg: [
      '#ff869f','#62b6ef','#ffda80',
      '#71cdcd','#aa80fc'
    ],
    txt: ['#410000', ],
  }

  const plugin: Plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = options.color || '#99ffff';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };
  const customPlugin: Plugin = {
    id: 'customCanvasBg',
    beforeDraw: (chart) => {
      if (image.complete) {
        const ctx = chart.ctx;
        const {top, left, width, height} = chart.chartArea;
        const x = left + width / 2 - image.width / 2;
        const y = top + height / 2 - image.height / 2;
        ctx.drawImage(image, x, y);
      } else {
        image.onload = () => chart.draw();
      }
    }
    /* 
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = options.color || '#99ffff';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
   */
  };

  const csatData: ChartData = {
    labels: [
      'Muito Insatisfeito', 'Insatisfeito',
      'Neutro', 'Satisfeito', 'Muito Satisfeito'
    ],
    datasets: [
      {
        label: 'Respostas',
        data: data.reviews.datasets.qualidade,
        // data: [1,2,3,4,5],
        backgroundColor: [
          `rgba(${csatColors.MUITOINSATISFEITO},1)`,
          `rgba(${csatColors.INSATISFEITO},1)`,
          `rgba(${csatColors.NEUTRO},1)`,
          `rgba(${csatColors.SATISFEITO},1)`,
          `rgba(${csatColors.MUITOSATISFEITO},1)`,
        ],
        // borderWidth: 2,
        // radius: 200
        // hoverOffset: 4,
      },
    ],
  };
  const currentMonth = data.reviews.MONTH;
  const reviewsCount = data.reviews.count;

  const csatOptions: ChartOptions = {
    plugins: {
      title: {
        display: true,
        text: `CSAT - ${currentMonth}/2025`,
        font: {
          size: '20em',
          weight: 'bolder'
        },
      },
      subtitle: {
        display: true,
        text: `${reviewsCount} Respostas`,
        // color: 'black',
        font: {
          size: '16em',
          weight: 'bolder'
        },
      },
      datalabels: {
        anchor: 'center',
        align: 'center',
        offset: -40,
        textAlign: 'center',
        // textStrokeWidth: 1,
        font: {
          weight: 'bolder',
          size: '16em',
        },
        // color: (ctx) => {
        //   const bgColor = ctx.chart.data.datasets[0].backgroundColor[ctx.dataIndex];
        //   return "#410000";
        //   return colorInverter(bgColor);
        // },
        color: COLORS.txt,
        // padding: 10,
        formatter: (val, ctx) => {
          const total = ctx.chart.data.datasets[0].data.reduce(
            (prev, curr) => (prev + curr)
          );
          const percentual = (val / total * 100).toFixed(2);
          return `${percentual}%\n(${val})`;
        }
      },
      legend: {
        labels: {
          font: {
            size: '16em',
            weight: 'bolder'
          }
        }
      }
    },
    responsive: true,
  };
  

  // const reviewDatasets = mockData.reviews;
  const { qualidade: qualidadeDataset, ...reviewsDatasets } = data.reviews.datasets;
  console.log('reviewsDatasets')
  console.log(reviewsDatasets);
  const reviewData: ChartData = {
    labels: [
      'Cordialidade da Equipe','Apresentação dos Pratos',
      'Temperatura dos alimentos','Sabor dos alimentos','Limpeza/Higiene',
    ],
    datasets: [
      {
        label: 'Nota 1',
        data: [
          reviewsDatasets.cordialidade[0],
          reviewsDatasets.apresentacao[0],
          reviewsDatasets.temperatura[0],
          reviewsDatasets.sabor[0],
          reviewsDatasets.higiene[0],
        ],
        backgroundColor: 'rgba(255, 134, 159,1)',
      },
      {
        label: 'Nota 2',
        data: [
          reviewsDatasets.cordialidade[1],
          reviewsDatasets.apresentacao[1],
          reviewsDatasets.temperatura[1],
          reviewsDatasets.sabor[1],
          reviewsDatasets.higiene[1],
        ],
        backgroundColor: 'rgba(98, 182, 239,1)',
      },
      {
        label: 'Nota 3',
        data: [
          reviewsDatasets.cordialidade[2],
          reviewsDatasets.apresentacao[2],
          reviewsDatasets.temperatura[2],
          reviewsDatasets.sabor[2],
          reviewsDatasets.higiene[2],
        ],
        backgroundColor: 'rgba(255, 218, 128,1)',
      },
      {
        label: 'Nota 4',
        data: [
          reviewsDatasets.cordialidade[3],
          reviewsDatasets.apresentacao[3],
          reviewsDatasets.temperatura[3],
          reviewsDatasets.sabor[3],
          reviewsDatasets.higiene[3],
        ],
        backgroundColor: 'rgba(113, 205, 205,1)',
      },
      {
        label: 'Nota 5',
        data: [
          reviewsDatasets.cordialidade[4],
          reviewsDatasets.apresentacao[4],
          reviewsDatasets.temperatura[4],
          reviewsDatasets.sabor[4],
          reviewsDatasets.higiene[4],
        ],
        backgroundColor: 'rgba(170, 128, 252,1)',
      },
    ],
  };
  
  const options: ChartOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Indicadores - Janeiro/2025',
      },
      datalabels: {
        anchor: 'end',
        align: 'start',
        // offset: -5,
        color: 'black',
        labels: {
          title: {
            font: {
              weight: 'bold',
              size: 14,
            },
          },
          /* value: {
            color: 'green',
            font: {
              size: 16,
            },
          }, */
        },
        // textStrokeWidth: 0.7,
        formatter: (val, ctx) => {
          // console.log(`canvas width: ${ctx.chart.canvas.width}`);
          const total = ctx.chart.data.datasets[0].data.reduce(
            (prev, curr) => (prev + curr)
          );
          const percentual = (val / total * 100).toFixed(1);
          return `${percentual}% (${val})`;
        }
      },
      /* legend: {
        labels: {
          color: 'red'
        }
      }, */
      /* subtitle: {
        display: true,
        text: 'SUBTITLE'
      }, */

    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  };
  
  
  const satisfaction = 0;
</script>
<!-- <header>
</header> -->
<div class="flex justify-center">
  <div class="h-[100vh] w-[100vw] bg-slate-400">
    <!-- <div class="w-[60vw] md:w-[60vw]"> -->
    <div class="flex flex-col items-center">
      <h2 class="h2 m-4">Resultado Mensal</h2>
      <Doughnut data={csatData} options={csatOptions} />
      <!-- <Pie data={csatData} options={csatOptions}/> -->
      <h3 class="h3">Nível de Satisfação: { satisfaction }%</h3>
    </div>
    <Bar data={reviewsDatasets} {options} />
    <!-- <h3 class="h3 m-4">Resultado Anual - 2025</h3> -->
  </div>
</div>