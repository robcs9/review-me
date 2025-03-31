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

<script>
  import { Bar } from 'svelte-chartjs';
  import { Chart, registerables } from 'chart.js';
  import * as mockData from './data';
  // console.log(data1.data)
  Chart.register(...registerables);
  const data = mockData.reviews.qualidade;

  const options = {
    scales: {
      y: {
        
      }
    }
  };
</script>

<Bar {data} {options} />
