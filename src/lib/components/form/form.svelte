<script lang="ts">
	import StarIcon from './star-icon.svelte';
	import StarFillIcon from './star-fill-icon.svelte';
	import { getModalStore, RadioGroup, RadioItem, Ratings } from '@skeletonlabs/skeleton';
	import 'iconify-icon';

	import * as toastify from '$lib/utils/toastify';
	import { getToastStore } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();

	let fields = [
		{
			name: 'cordialidade',
			current: null,
			max: 5,
			label: 'Cordialidade da equipe'
		},
		{
			name: 'apresentacao',
			current: null,
			max: 5,
			label: 'Apresentação dos pratos'
		},
		{
			name: 'temperatura',
			current: null,
			max: 5,
			label: 'Temperatura dos alimentos'
		},
		{
			name: 'sabor',
			current: null,
			max: 5,
			label: 'Sabor/tempero dos alimentos'
		},
		{
			name: 'higiene',
			current: null,
			max: 5,
			label: 'Limpeza/higiene em geral'
		}
	];

	let comentario = {
		name: 'comentario',
		value: null,
		label: 'Alguma sugestão, reclamação ou elogio?'
	};

	// let qualidadeField = 0;
	const QUALITY = Object.freeze({
		MUITOSATISFEITO: 'Muito Satisfeito',
		SATISFEITO: 'Satisfeito',
		NEUTRO: 'Neutro',
		INSATISFEITO: 'Insatisfeito',
		MUITOINSATISFEITO: 'Muito Insatisfeito'
	});

	let qualidade = {
		name: 'qualidade',
		current: '',
		items: [
			{
				props: {
					// name: 'muito-insatisfeito',
					value: QUALITY.MUITOINSATISFEITO
				},
				icon: 'noto-v1:pouting-face'
			},
			{
				props: {
					// name: 'insatisfeito',
					value: QUALITY.INSATISFEITO
				},
				icon: 'noto-v1:confused-face'
			},
			{
				props: {
					// name: 'neutro',
					value: QUALITY.NEUTRO
				},
				icon: 'noto-v1:pensive-face'
			},
			{
				props: {
					// name: 'satisfeito',
					value: QUALITY.SATISFEITO
				},
				icon: 'noto-v1:smiling-face'
			},
			{
				props: {
					// name: 'muito-satisfeito',
					value: QUALITY.MUITOSATISFEITO
				},
				icon: 'noto-v1:face-savouring-delicious-food'
			}
		],
		iconSize: {
			height: '2em',
			width: '2em'
		}
	};

	const iconClick =
		(idx: number) =>
		(event: CustomEvent<{ index: number }>): void => {
			fields[idx].current = event.detail.index;
		};
	const capitalizeStr = (s: string) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
	const formatRadioName = (s: string) => {
		const splitStr = s.split('-');
		return splitStr.length > 1
			? `${capitalizeStr(splitStr[0])} ${capitalizeStr(splitStr[1])}`
			: `${capitalizeStr(splitStr[0])}`;
	};

	import { enhance } from '$app/forms';
	// export let form;
	export let form, data;

	// const modalStore = getModalStore();
	// const handleSubmit = ({ action, data, form, }) => {
	const handleSubmit = ({ action, data, form }) => {
		console.log('form prop: ', form);
		console.log('action prop: ', action);
		console.log('data prop: ', data);
		/* let ratings = fields.map(({ name, current }) => ({ name: name, value: current }));
		const f = {
			ratings: ratings,
			qualidade: qualidade, //qualidadeField
			comentario: comentario.value
			}; */
		// form = f;

		// Not working properly, notifies everything as errors. Unreachable.
		if (form?.success) {
			console.log('Data saved');
			toastify.success(toastStore, 'Obrigado pela sua avaliação! Volte sempre! <3');
			// console.log('formData: \n', f);
			// console.log("All good!")
			// console.log($modalStore)
		}
		/* else {
				toastify.error(toastStore, 'Error!');
				} */

		resetForm();

		// console.info("debugging handlesubmit");
		// console.dir($modalStore[0].component)
		// parentComp.onClose;

		// window.alert(`it's all over, go home!`);
	};

	// import { getModalStore } from '@skeletonlabs/skeleton';
	// const modalStore = getModalStore();

	// todo - fix empty string assignment to all fields except qualidade/comentario when multiple
	// empty forms are submitted in sequence
	const resetForm = () => {
		/* let resetFields = fields.map((e) => {
			e.current = 0;
			return e;
		});
		fields = resetFields;
		qualidade.current = ''; */

		fields = fields.map((field) => {
			field.current = 0;
			return field;
		});
		qualidade.current = undefined;
		// console.log(fields)
	};

	$: console.log('form debugging: ', form);
</script>

<form method="POST" class="flex flex-col gap-6 p-4" use:enhance={handleSubmit}>
	<label for="f-qualidade" class="flex flex-col items-center">
		<h4 class="h4 mb-3">QUALIDADE DA SUA REFEIÇÃO HOJE</h4>
		<RadioGroup class="inline-flex gap-2" id="f-qualidade">
			{#each qualidade.items as item}
				<RadioItem class="" bind:group={qualidade.current} {...item.props} name={qualidade.name}>
					<iconify-icon icon={item.icon} {...qualidade.iconSize}></iconify-icon>
					<p>{formatRadioName(item.props.value).toUpperCase()}</p>
				</RadioItem>
			{/each}
		</RadioGroup>
	</label>

	{#each fields as field, idx}
		<label for={`f-${field.name}`} class="flex flex-col items-center">
			<!-- <label for={}> -->
			<h4 class="h4 mb-3">{field.label.toUpperCase()}</h4>
			<!-- Fix the unique id for iterated over elements -->
			<Ratings
				bind:value={fields[idx].current}
				interactive
				on:icon={iconClick(idx)}
				max={field.max}
				name={field.name}
			>
				<svelte:fragment slot="empty">
					<StarIcon className="fill-transparent w-8 h-8" />
				</svelte:fragment>
				<svelte:fragment slot="full">
					<StarFillIcon className="fill-yellow-400 w-8 h-8" />
				</svelte:fragment>
			</Ratings>
			<!-- Input para passar os valores dos campos de avaliação para o servidor -->
			<input type="text" name={field.name} hidden bind:value={fields[idx].current} />
		</label>
	{/each}
	<label for="f-comentario" class="flex flex-col items-center">
		<h4 class="h4">{comentario.label.toUpperCase()}</h4>
	</label>
	<textarea
		class="bg-red-100 text-red-800 rounded-2xl"
		name={comentario.name}
		bind:value={comentario.value}
		placeholder={'Deixe sua opinião...'}
		id="f-comentario"
	></textarea>

	<button class="btn variant-filled-primary">Enviar</button>
</form>
<!-- </div> -->
