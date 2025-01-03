<script lang="ts">
	// import Form from "../form/form.svelte";

	// Replace with proper event dispatch or data flow manipulation
	// export let form; //formDrill; // placeholder

	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	// Props
	import type { SvelteComponent } from 'svelte';
	/** Exposes parent props to this component. */
	// export let parent: SvelteComponent;
	// $: console.log(parent)
	export let parent: any;

	const modalStore = getModalStore();

	// Base Classes
	// Notes: Use `w-screen h-screen` to fit the visible canvas size.
	const cBase = 'flex justify-center items-center'; // bg-surface-100-800-token';

	// export let foo: string | number;
	// console.log($modalStore[0].meta.foo)
	// console.log($modalStore[0].response = () => ("overridden!"));

	import Form from '$lib/components/form/form.svelte';

	const handleSubmitTransition = () => {
		/* setTimeout(() => {
			parent.onClose
		}, 2000); */
		parent.onClose;
	};
	// ref parent (modal) component
	// let parentComp = parent;

	// console.log('Debug form-modal.svelte');
	//export let foo: string | number;
	//console.log('foo: ', $modalStore[0].meta.foo);
	
	// console.log('Parent: ')
	// console.dir(parent.background)

	
</script>

<!-- Modal state check -->
{#if $modalStore[0]}
	<div class="{cBase} bg-surface-600 rounded-xl border border-violet-200 pb-4">
		<div class="flex flex-col items-center space-y-4">
			<Form />
			<!-- test form modal -->
			<!-- <input
				class="input"
				type="text"
				bind:value={$modalStore[0].meta.foo}
			/> -->
			<!-- <input class="input" type="text" bind:value={foo}> -->
			<button class="btn variant-filled" on:click={parent.onClose()}>× Fechar</button>
			<!-- <button class="btn variant-filled" on:click={handleSubmitTransition}>× Fechar</button> -->
		</div>
	</div>
{/if}
