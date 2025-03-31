<!-- <svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
</svelte:head> -->

<script lang="ts">
	import { onMount } from 'svelte';
	/* to-do: fix server imports for data fetching  */

	const months = ['Jan', 'Fev', 'Mar'];
	const qualidadeMonthlyData = {
		Jan: {
			null: 0,
			nota1: 1,
			nota2: 2,
			nota3: 3,
			nota4: 4,
			nota5: 5
		},
		Fev: {
			null: 0,
			nota1: 6,
			nota2: 7,
			nota3: 8,
			nota4: 9,
			nota5: 10
		},
		Mar: {
			null: 0,
			nota1: 11,
			nota2: 12,
			nota3: 13,
			nota4: 14,
			nota5: 15
		}
	};
	const data = qualidadeMonthlyData;

	let options = {
		chart: {
			type: 'bar'
		},
		series: [
			{
				name: 'Cordialidade Nota 1',
				data: [
					data['Jan']['nota1'],
					data['Jan']['nota2'],
					data['Jan']['nota3'],
					data['Jan']['nota4'],
					data['Jan']['nota5']
				]
			},
			{
				name: 'Cordialidade Nota 2',
				data: [
					data['Fev']['nota1'],
					data['Fev']['nota2'],
					data['Fev']['nota3'],
					data['Fev']['nota4'],
					data['Fev']['nota5']
				]
			},
			{
				name: 'Cordialidade Nota 3',
				data: [
					data['Mar']['nota1'],
					data['Mar']['nota2'],
					data['Mar']['nota3'],
					data['Mar']['nota4'],
					data['Mar']['nota5']
				]
			}
			/* {
        name: "Cordialidade Nota 2",
        data: data['nota2'],
      },
      {
        name: "Cordialidade Nota 3",
        data: data['nota3'],
      },
      {
        name: "Cordialidade Nota 4",
        data: data['nota4'],
      },
      {
        name: "Cordialidade Nota 5",
        data: data['nota5'],
      }, */
		],
		xaxis: {
			categories: months
		}
	};

	let chart: HTMLDivElement;

	onMount(async () => {
		const apexcharts = await import('apexcharts');
		const { default: ApexCharts } = apexcharts;
		const c = new ApexCharts(chart, options);
		c.render();
	});
</script>

<!-- <div use:chart={options} /> -->

<!-- For best results, preview this in either the full-width or full-screen preview modes. -->
<div class="grid grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header class="bg-red-500 p-4">(header)</header>
	<!-- Page -->
	<div class="container mx-auto grid grid-cols-1 xl:grid-cols-[200px_minmax(0px,_1fr)_200px]">
		<!-- Sidebar (Left) -->
		<!-- NOTE: hidden in smaller screen sizes -->
		<aside class="sticky top-0 col-span-1 hidden h-screen bg-yellow-500 p-4 xl:block">
			(sidebar)
		</aside>
		<!-- Main -->
		<main class="col-span-1 space-y-4 bg-green-500 p-4">
			<div class="h-[512px] bg-purple-500 p-4">
				<p>Cordialidade da equipe</p>
				<div id="chart" bind:this={chart} />
			</div>
			<div class="h-[512px] bg-purple-500 p-4">
				<p>Div 2</p>
			</div>
		</main>
		<!-- Sidebar (Right) -->
		<!-- NOTE: hidden in smaller screen sizes -->
		<aside class="sticky top-0 col-span-1 hidden h-screen bg-yellow-500 p-4 xl:block">
			(sidebar)
		</aside>
	</div>
	<!-- Footer -->
	<footer class="bg-blue-500 p-4">(footer)</footer>
</div>
