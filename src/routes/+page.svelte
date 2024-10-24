<script lang="ts">
	import Form from '$lib/components/form/form.svelte';
	import 'iconify-icon';
	import type { PageData } from './$types.js';
	// export let data: PageData;

	import type { ActionData } from './$types';
	export let form: ActionData;

	// $: console.log(data.tracks)
	/* let modal: HTMLDialogElement;

	const handleClick = () => {
		modal.showModal();
	} */
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center mt-2">
		<h1 class="h1">
			Obrigado por comer conosco!
			<iconify-icon icon="noto:red-heart" height="0.8em"></iconify-icon>
			<h3 class="h3 mt-2">Avalie-nos através da enquete abaixo!</h3>
		</h1>
		
		<button class="btn variant-filled-surface"><!--  on:click={handleClick}> -->
			<p>INICIAR</p>
			<iconify-icon icon="flat-color-icons:survey" height="2em"></iconify-icon>
		</button>
		<!-- <dialog bind:this={modal}> -->
			<Form {form} />
		<!-- </dialog> -->
	</div>
</div>
