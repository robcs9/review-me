<script lang="ts">
	import StarIcon from './star-icon.svelte';
	import StarFillIcon from './star-fill-icon.svelte';

	import { type ToastSettings, getToastStore } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();

	import { RadioGroup, RadioItem, Ratings } from '@skeletonlabs/skeleton';
	import 'iconify-icon';

	let qualidadeField = 0;

	let fields = [
		{
			name: 'cordialidade',
			current: 0,
			max: 5,
			label: 'Cordialidade da equipe'
		},
		{
			name: 'apresentacao',
			current: 0,
			max: 5,
			label: 'Apresentação dos pratos'
		},
		{
			name: 'temperatura',
			current: 0,
			max: 5,
			label: 'Temperatura dos alimentos'
		},
		{
			name: 'sabor',
			current: 0,
			max: 5,
			label: 'Sabor/tempero dos alimentos'
		},
		{
			name: 'higiene',
			current: 0,
			max: 5,
			label: 'Limpeza/higiene em geral'
		}
	];

	let comentario = {
		name: 'Comentário',
		value: '',
		label: 'Alguma sugestão, reclamação ou elogio?'
	};

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

	const iconClick =
		(idx: number) =>
		(event: CustomEvent<{ index: number }>): void => {
			/* console.dir(idx) */
			fields[idx].current = event.detail.index;
		};
	const capitalizeStr = (s: string) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
	const formatRadioName = (s: string) => {
		const splitStr = s.split('-');
		return splitStr.length > 1
			? `${capitalizeStr(splitStr[0])} ${capitalizeStr(splitStr[1])}`
			: `${capitalizeStr(splitStr[0])}`;
	};
	const notify = (msg: string) => {
		const toast: ToastSettings = {
			message: msg,
			background: 'variant-filled-success',
			timeout: 3000
		};
		toastStore.trigger(toast);
	};
	const handleSubmit = () => {
		notify('Obrigado pela sua avaliação! Volte sempre! <3');
	};
	/* $: if (qualidadeField > 1) {
		toastStore.trigger(toast);
	} */

	// $: console.log(qualidade.current)
	/* console.log(...Object.values(fields)) */
</script>

<div class="flex flex-col gap-2 p-4 border border-s-violet-500">
	<!-- <form class="" action=""> -->

	<label for="">Qualidade da sua refeição hoje</label>
	<RadioGroup class="inline-flex gap-2">
		{#each radio.items as item}
			<RadioItem class="" bind:group={qualidadeField} {...item.props}>
				<iconify-icon icon={item.icon} {...radio.iconSize}></iconify-icon>
				<p>{formatRadioName(item.props.name)}</p>
			</RadioItem>
		{/each}
	</RadioGroup>

	{#each fields as field, idx}
		<label for="">{field.label}</label>
		<!-- Fix flinching icons during interaction (replace icons?) -->
		<Ratings bind:value={fields[idx].current} interactive on:icon={iconClick(idx)} max={field.max}>
			<svelte:fragment slot="empty">
				<!-- <iconify-icon icon="ph:star-duotone"></iconify-icon> -->
				<StarIcon />
			</svelte:fragment>
			<svelte:fragment slot="full">
				<!-- <iconify-icon icon="ph:star-fill"></iconify-icon> -->
				<StarFillIcon />
			</svelte:fragment>
		</Ratings>
	{/each}

	<label for="">{comentario.label}</label>
	<textarea name="" id="" placeholder={'Deixe sua opinião...'}></textarea>

	<button type="button" class="btn variant-filled-primary" on:click={handleSubmit}>Enviar</button>
	<!-- </form> -->
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
