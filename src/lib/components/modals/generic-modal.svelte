<script lang="ts">
    // import Form from "../form/form.svelte";

    // Replace with proper event dispatch or data flow manipulation
    // export let form; //formDrill; // placeholder

    // Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
    
	// Props
	import type { SvelteComponent } from 'svelte';
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;
    // $: console.log(parent)
	
    const modalStore = getModalStore();

	// Base Classes
	// Notes: Use `w-screen h-screen` to fit the visible canvas size.
	const cBase = 'flex justify-center items-center'// bg-surface-100-800-token';

	// export let foo;
</script>

<!-- Modal state check -->
{#if $modalStore[0]}
	<div class="{cBase} bg-surface-600 rounded-xl border border-violet-200 pb-4">
		<div class="flex flex-col items-center space-y-4">
            <!-- <Form form={form} /> -->
			<!-- <span>Passed prop: {foo}</span> -->
			<slot />
			<!-- <button class="btn variant-filled" on:click={parent.onClose}>× Fechar</button> -->
		</div>
		<!-- <svelte:fragment name="content">

		</svelte:fragment> -->
	</div>
{/if}