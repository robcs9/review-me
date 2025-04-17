import type { Plugin } from "chart.js";
export enum MONTHS {
  Janeiro, Fevereiro, Março, Abril,
  Maio, Junho, Julho, Agosto,
  Setembro, Outubro, Novembro, Dezembro
}

export const csatColors = {
  MUITOINSATISFEITO: [255,134,159],
  INSATISFEITO: [98,182,239],
  NEUTRO: [255,218,128],
  SATISFEITO: [113,205,205],
  MUITOSATISFEITO: [170,128,252],
};
export const csatBgColors = [
  `rgba(${csatColors.MUITOINSATISFEITO},1)`,
  `rgba(${csatColors.INSATISFEITO},1)`,
  `rgba(${csatColors.NEUTRO},1)`,
  `rgba(${csatColors.SATISFEITO},1)`,
  `rgba(${csatColors.MUITOSATISFEITO},1)`,
];
// bg and txt colors are matched by index
export const COLORS = {
  bg: [
    '#ff869f','#62b6ef','#ffda80',
    '#71cdcd','#aa80fc'
  ],
  txt: ['#410000', ],
};

export const buildCsatPlugin = (satisfaction: number): Plugin => ({
  id: 'csatBackground',
  beforeDraw: (chart, args, options) => {
    // console.groupCollapsed('draftPlugin (id: customCanvasBg) logs');
    const { ctx, chartArea: { top, left, width, height } } = chart;
    const x = width / 2;
    const y = height / 2 + top;
    const csatText = `CSAT: ${satisfaction}%`;
    const txtWidth = ctx.measureText(csatText).width;
    // const title = `Satisfação`;
    const offsetX = (txtWidth) / 2;
    const offsetY = 10;
    
    ctx.font = "bold 1em sans-serif";
    // ctx.fillText(title, x - offsetX, y - offsetY);
    ctx.fillText(csatText, x - offsetX, y);
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = options.color || '#99ffff';
    // ctx.fillRect(x - 150, y - 150, width / 2, width / 2);
    // ctx.fillRect(x - 10, y - 18, txtWidth + 18, 36);
    ctx.restore();
    
  }
});

// Inserts custom image in the center of the doughnut
// +page.svelte
  /* onMount(() => {
    const image = new Image();
    image.src = 'https://www.chartjs.org/img/chartjs-logo.svg';
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
      },
    };
    // Enables plugin on all charts
    // Chart.register(customPlugin);
  }); */
  

// chart.js-svelte usage
/* 
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
*/