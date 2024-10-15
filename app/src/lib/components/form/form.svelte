<script lang="ts">
	import { type ToastSettings, getToastStore } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();
	const toast: ToastSettings = {
		message: 'test toast',
		background: 'variant-filled-success',
		timeout: 3000
	};

	import { RadioGroup, RadioItem, Ratings } from '@skeletonlabs/skeleton';
	import 'iconify-icon';

	let qualidade = 0;
	let cordialidade = 0; // da equipe
	let apresentacao = 0; // dos pratos
	let temperatura = 0; // dos alimentos
	let sabor = 0; // sabor/tempero dos alimentos
	let higiene = 0; // limpeza/higiene
	let comentario = ''; // sugestão ou elogio

	let radio = {
		items: [
			{
				props: {
					name: 'muito-insatisfeito',
					value: 1
				},
				icon: 'noto-v1:pouting-face'
			},
			{
				props: {
					name: 'insatisfeito',
					value: 2
				},
				icon: 'noto-v1:confused-face'
			},
			{
				props: {
					name: 'neutro',
					value: 3
				},
				icon: 'noto-v1:pensive-face'
			},
			{
				props: {
					name: 'satisfeito',
					value: 4
				},
				icon: 'noto-v1:smiling-face'
			},
			{
				props: {
					name: 'muito-satisfeito',
					value: 5
				},
				icon: 'noto-v1:face-savouring-delicious-food'
			}
		],
		iconSize: {
			height: '2em',
			width: '2em'
		}
	};

	let satisfaction = {
		current: 0,
		max: 5,
		label: "Cordialidade da equipe",
	};
	
	const iconClick = (event: CustomEvent<{ index: number }>): void => {
		satisfaction.current = event.detail.index;
	};
	const capitalizeStr = (s: string) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
	const formatRadioName = (s: string) => {
		const splitStr = s.split('-');
		return splitStr.length > 1
			? `${capitalizeStr(splitStr[0])} ${capitalizeStr(splitStr[1])}`
			: `${capitalizeStr(splitStr[0])}`;
	};

	$: if (qualidade > 1) {
		toastStore.trigger(toast);
	}

	// $: console.log(qualidade.current)
</script>

<div class="flex flex-col gap-2">
	<label for="">Qualidade da sua refeição hoje</label>
	<RadioGroup class="inline-flex gap-2">
		{#each radio.items as item}
			<RadioItem class="" bind:group={qualidade} {...item.props}>
				<iconify-icon icon={item.icon} {...radio.iconSize}></iconify-icon>
				<p>{formatRadioName(item.props.name)}</p>
			</RadioItem>
		{/each}
	</RadioGroup>

	<label for="">{satisfaction.label}</label>
	<!-- Labels for fields 
		Cordialidade da equipe
		Apresentacao dos pratos
		Temperatura dos alimentos
		Sabor/tempero dos alimentos
		Limpeza e higiene em geral
		Alguma sugestão, reclamação ou elogio?
	-->

	<!-- Fix flinching icons during interaction (replace icons?) -->
	<Ratings bind:value={satisfaction.current} interactive on:icon={iconClick} max={satisfaction.max}>
		<svelte:fragment slot="empty">
			<iconify-icon icon="ph:star-duotone"></iconify-icon>
		</svelte:fragment>
		<svelte:fragment slot="full">
			<iconify-icon icon="ph:star-fill"></iconify-icon>
		</svelte:fragment>
	</Ratings>
</div>

<!-- <div class="flex flex-col gap-2 border">
    <label class="flex flex-col" for="comment">
        Comment
        <textarea class="form-textarea" name="comment" id="comment" />
    </label>
    
    <div class="">
        <label for="">
            Question
            <label class="flex items-center space-x-2">
                <input class="radio" type="radio" checked name="radio-direct" value="1" />
                <p>Option 1</p>
            </label>
            <label class="flex items-center space-x-2">
                <input class="radio" type="radio" name="radio-direct" value="2" />
                <p>Option 2</p>
            </label>
            <label class="flex items-center space-x-2">
                <input class="radio" type="radio" name="radio-direct" value="3" />
                <p>Option 3</p>
            </label>
        </label>
    </div>
</div> -->
