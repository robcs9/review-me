<script lang="ts">
	import type { ChartOptions, ChartData, Plugin } from 'chart.js';
	import type { PageData } from './$types';
	// import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { Bar, Pie, Doughnut } from 'svelte-chartjs';
	import { Chart, registerables } from 'chart.js';
	import ChartDataLabels from 'chartjs-plugin-datalabels';
	import * as mockData from './data';
	import { MONTHS, COLORS, buildCsatPlugin, csatColors, csatBgColors } from '$lib/utils/chartUtils';

	export let data: PageData;
	const {
		datasets: { qualidade: qualidadeDataset, ...reviewsDatasets },
		MONTH: currentMonth,
		count: reviewsCount
	} = data.reviews;
	const satisfaction = (((qualidadeDataset[3] + qualidadeDataset[4]) / reviewsCount) * 100).toFixed(
		2
	);

	Chart.register(...registerables);
	Chart.register(ChartDataLabels);

	const csatData: ChartData = {
		labels: ['Muito Insatisfeito', 'Insatisfeito', 'Neutro', 'Satisfeito', 'Muito Satisfeito'],
		datasets: [
			{
				label: 'Respostas',
				data: qualidadeDataset,
				backgroundColor: csatBgColors
				// borderWidth: 2,
				// radius: 200
				// hoverOffset: 4,
			}
		]
	};

	const reviewData: ChartData = {
		labels: ['Cordialidade', 'Apresentação', 'Temperatura', 'Sabor', 'Limpeza'],
		datasets: [
			{
				label: 'Nota 1',
				data: [
					reviewsDatasets.cordialidade[0],
					reviewsDatasets.apresentacao[0],
					reviewsDatasets.temperatura[0],
					reviewsDatasets.sabor[0],
					reviewsDatasets.higiene[0]
				],
				backgroundColor: 'rgba(255, 134, 159,1)'
			},
			{
				label: 'Nota 2',
				data: [
					reviewsDatasets.cordialidade[1],
					reviewsDatasets.apresentacao[1],
					reviewsDatasets.temperatura[1],
					reviewsDatasets.sabor[1],
					reviewsDatasets.higiene[1]
				],
				backgroundColor: 'rgba(98, 182, 239,1)'
			},
			{
				label: 'Nota 3',
				data: [
					reviewsDatasets.cordialidade[2],
					reviewsDatasets.apresentacao[2],
					reviewsDatasets.temperatura[2],
					reviewsDatasets.sabor[2],
					reviewsDatasets.higiene[2]
				],
				backgroundColor: 'rgba(255, 218, 128,1)'
			},
			{
				label: 'Nota 4',
				data: [
					reviewsDatasets.cordialidade[3],
					reviewsDatasets.apresentacao[3],
					reviewsDatasets.temperatura[3],
					reviewsDatasets.sabor[3],
					reviewsDatasets.higiene[3]
				],
				backgroundColor: 'rgba(113, 205, 205,1)'
			},
			{
				label: 'Nota 5',
				data: [
					reviewsDatasets.cordialidade[4],
					reviewsDatasets.apresentacao[4],
					reviewsDatasets.temperatura[4],
					reviewsDatasets.sabor[4],
					reviewsDatasets.higiene[4]
				],
				backgroundColor: 'rgba(170, 128, 252,1)'
			}
		]
	};

	const csatOptions: ChartOptions = {
		plugins: {
			title: {
				display: true,
				text: `Satisfação dos Frequentadores do RU - ${MONTHS[currentMonth]} de 2025`,
				font: {
					size: '20em',
					weight: 'bolder'
				}
			},
			datalabels: {
				anchor: 'center',
				align: 'center',
				offset: -40,
				textAlign: 'center',
				// textStrokeWidth: 1,
				font: {
					weight: 'bolder',
					size: '16em'
				},
				color: COLORS.txt,
				// padding: 10,
				formatter: (val, ctx) => {
					const total = ctx.chart.data.datasets[0].data.reduce((prev, curr) => prev + curr);
					const percentual = ((val / total) * 100).toFixed(2);
					return `${percentual}%\n(${val})`;
				}
			},
			legend: {
				labels: {
					font: {
						size: '16em',
						weight: 'bolder'
					},
					padding: 20
				}
			}
		},
		responsive: true
	};

	const options: ChartOptions = {
		plugins: {
			title: {
				display: false,
				text: 'Indicadores - /2025',
				font: {
					size: '20em',
					weight: 'bolder'
				}
			},
			legend: {
				display: false
			},
			datalabels: {
				anchor: 'end',
				align: 'start',
				color: 'black',
				labels: {
					title: {
						font: {
							weight: 'bold',
							size: 14
						}
					}
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
					const total = ctx.chart.data.datasets[0].data.reduce((prev, curr) => prev + curr);
					const percentual = ((val / total) * 100).toFixed(1);
					return `${percentual}% (${val})`;
				}
			}
		},
		responsive: true,
		scales: {
			x: {
				stacked: true
			},
			y: {
				stacked: true
			}
		}
	};
</script>
<h2 class="h2 py-2 text-center">Análise das Avaliações Recebidas</h2>
<!-- <div class="flex flex-col items-center gap-2 border-4 border-success-600"> -->
	<div class="
    flex flex-col gap-4 p-4 w-[30em] text-sm bg-orange-100
    lg:flex-row sm:w-[70vw] lg:w-[60vw] xl:w-[45vw] xl:text-lg
    border-4 border-warning-600
  ">
			<Doughnut data={csatData} options={csatOptions} plugins={[buildCsatPlugin(satisfaction)]} />
      <Bar data={reviewData} {options} />
			<h4 class="h4 text-neutral-700 py-2">
				Total de respostas neste mês: {reviewsCount}
			</h4>
		<p class="text-neutral-700">
			Indicadores apresentados:<br />
		</p>
		<ul class="list-disc list-inside text-neutral-700">
			<li>Cordialidade da equipe</li>
			<li>Apresentação dos pratos</li>
			<li>Temperatura dos alimentos</li>
			<li>Sabor dos alimentos</li>
			<li>Limpeza e Higiene</li>
		</ul>
	</div>
<!-- </div> -->