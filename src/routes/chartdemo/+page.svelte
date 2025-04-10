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
  import type { ChartOptions, ChartData } from 'chart.js';
  import type { PageData } from './$types';
  import { Bar, Pie, Doughnut } from 'svelte-chartjs';
  import { Chart, registerables } from 'chart.js';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  import * as mockData from './data';
  
  export let data: PageData;
  
  Chart.register(...registerables);
  Chart.register(ChartDataLabels);
  
  function colorInverter(rgba: string) {
    const MAX = 255;
    const rgbaStrs = rgba.slice(5, -3).split(',');
    const invertedRgba = rgbaStrs.map((el: string) => 255 - Number(el));
    rgba = `rgba(${invertedRgba})`;

    return rgba;
  }

  // Colors contrast
  // https://colourcontrast.cc/
  const csatColors = {
    MUITOINSATISFEITO: [255, 134, 159],
    INSATISFEITO: [98,  182, 239],
    NEUTRO: [255, 218, 128],
    SATISFEITO: [113, 205, 205],
    MUITOSATISFEITO: [170, 128, 252],
  }

  // bg and txt colors are matched by index
  const COLORS = {
    bg: ['#ff869f'],
    txt: ['#410000', ],
  }
  const csatData: ChartData = {
    labels: [
      'Muito Insatisfeito', 'Insatisfeito',
      'Neutro', 'Satisfeito', 'Muito Satisfeito'
    ],
    datasets: [
      {
        label: 'Respostas',
        // TO-DO: substituir com dados de prismamockdata.json e refatorar demais props
        // data: mockData.reviewsData.qualidade,
        data: data.reviews.datasets.qualidade,
        backgroundColor: [
          `rgba(${csatColors.MUITOINSATISFEITO},1)`,
          `rgba(${csatColors.INSATISFEITO},1)`,
          `rgba(${csatColors.NEUTRO},1)`,
          `rgba(${csatColors.SATISFEITO},1)`,
          `rgba(${csatColors.MUITOSATISFEITO},1)`,
        ],
        // borderWidth: 2,
        // radius: 200
        hoverOffset: 4,
      },
    ],
  };
  
  const currentMonth = data.reviews.month;
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
  
  const reviewData = mockData.reviews;
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
  
  
  // console.log('DB data:');
  // console.dir(data.review);
</script>
<!-- <header>
</header> -->
<div class="flex justify-center">
  <div class="h-[100vh] w-[100vw] bg-slate-400">
    <!-- <div class="w-[60vw] md:w-[60vw]"> -->
    <div class="flex flex-col items-center">
      <h3 class="h3 m-4">Resultado Mensal</h3>
      <Doughnut data={csatData} options={csatOptions} />
      <!-- <Pie data={csatData} options={csatOptions}/> -->
    </div>
    <Bar data={reviewData} {options} />
    <!-- <h3 class="h3 m-4">Resultado Anual - 2025</h3> -->
  </div>
</div>