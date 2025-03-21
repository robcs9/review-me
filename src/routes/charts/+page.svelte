<!-- <svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
</svelte:head> -->

<script lang="ts">
  import { onMount } from "svelte";

  let options = {
    chart: {
      type: "bar",
    },
    series: [
      {
        name: "sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };
  
  let chart: HTMLDivElement;

  onMount(async () => {
    const apexcharts = await import('apexcharts');
    // console.dir(apexcharts)
    let c = new apexcharts.default(chart,options)
    c.render();
  })
</script>
<!-- <div use:chart={options} /> -->
<div id="chart" bind:this={chart} />


<!-- For best results, preview this in either the full-width or full-screen preview modes. -->
<div class="grid grid-rows-[auto_1fr_auto]">
  <!-- Header -->
  <header class="bg-red-500 p-4">(header)</header>
  <!-- Page -->
  <div class="container mx-auto grid grid-cols-1 xl:grid-cols-[200px_minmax(0px,_1fr)_200px]">
    <!-- Sidebar (Left) -->
    <!-- NOTE: hidden in smaller screen sizes -->
    <aside class="sticky top-0 col-span-1 hidden h-screen bg-yellow-500 p-4 xl:block">(sidebar)</aside>
    <!-- Main -->
    <main class="col-span-1 space-y-4 bg-green-500 p-4">
      <p class="h-[512px] bg-purple-500 p-4">Paragraph 1</p>
      <p class="h-[512px] bg-purple-500 p-4">Paragraph 2</p>
      <p class="h-[512px] bg-purple-500 p-4">Paragraph 3</p>
    </main>
    <!-- Sidebar (Right) -->
    <!-- NOTE: hidden in smaller screen sizes -->
    <aside class="sticky top-0 col-span-1 hidden h-screen bg-yellow-500 p-4 xl:block">(sidebar)</aside>
  </div>
  <!-- Footer -->
  <footer class="bg-blue-500 p-4">(footer)</footer>
</div>