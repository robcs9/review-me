<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from '../$types';
	import type { PageData, PageParentData } from './$types';
	export let data: PageData, form: ActionData;
	// $: console.log(data)

	// Modal
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const MODALS = {
		FULLSCREEN: 'fullscreenModal',
		FORM: 'formModal',
		GENERIC: 'genericModal'
	};

	const modal: ModalSettings = {
		type: 'component',
		component: MODALS.FORM
		/* meta: {
			foo: "bar",
		},
		response: () => {
			// console.log('response: ', r);
			// console.log('Current Foo: ', $modalStore[0].meta.foo)
			setTimeout(() => { console.log('timeout is over.'); modalStore.clear(); }, 1000)
		} */
		// Data
		/* title: 'Example Alert',
		body: 'something something', */
		// image: 'https://i.imgur.com/WOgTG96.gif'
	};

	const openModal = () => {
		modalStore.trigger(modal);
	};


	let comentario = {
	name: 'comentario',
	label: 'Comentário',
	value: '',
}

const handleSubmit = ( { data, actions, form } ) => {

	console.log('Submitted!');
	console.log('form response: ', form)
	console.log('actions response: ', actions)
	console.log('data response: ', data)
}
</script>

<div>
	<h1>'/playground' is a PLAYGROUND for data manipulation and other kinds of tests</h1>
</div>

<hr />

<!-- <div class="flex flex-col gap-2 items-center mt-4">
	<button class="btn variant-filled-surface" on:click={openModal}>
		<p>INICIAR</p>
		<iconify-icon icon="flat-color-icons:survey" height="2em"></iconify-icon>
	</button>
</div>
 -->

<!-- Form debugging -->
<form method="POST" class="flex flex-col gap-6 p-4" use:enhance={handleSubmit}>
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