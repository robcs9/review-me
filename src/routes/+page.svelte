<script lang="ts">
	import type { PageData, ActionData } from './$types';
	//export let data: PageData, form: ActionData;
	// let { data, form }: { data: PageData, form: ActionData } = $props(); // Svelte 5

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
		component: MODALS.FORM,
		/* meta: {
			foo: "bar",
			data,
			form
		},
		response: () => {
			// console.log('response: ', r);
			// console.log('Current Foo: ', $modalStore[0].meta.foo)
			setTimeout(() => { console.log('timeout is over.'); modalStore.clear(); }, 1000)
		}, */
		// Data
		/* title: 'Example Alert',
		body: 'something something', */
		// image: 'https://i.imgur.com/WOgTG96.gif'
	};

	const openModal = () => {
		modalStore.trigger(modal);
	};

	// export let form;
</script>

<!-- <div class="flex flex-col gap-2 items-center mt-4"> -->
<!-- <button class="btn variant-outline-tertiary" on:click={handleClick}>Open Form</button> -->
<!-- <button class="btn variant-filled-surface"
		on:click={openModal}
	>
		<p>INICIAR</p>
		<iconify-icon icon="flat-color-icons:survey" height="2em"></iconify-icon>
	</button>
</div> -->
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center mt-2">
		<h1 class="h1">
			Obrigado por comer conosco!
			<iconify-icon icon="noto:red-heart" height="0.8em"></iconify-icon>
			<h3 class="h3 mt-2">Avalie-nos através da enquete abaixo!</h3>
		</h1>

		<button class="btn variant-filled-surface" on:click={openModal}>
			<p>INICIAR</p>
			<iconify-icon icon="flat-color-icons:survey" height="2em"></iconify-icon>
		</button>

		<!-- <dialog bind:this={modal}>
			<Form {form} />
		</dialog> -->
	</div>
</div>
