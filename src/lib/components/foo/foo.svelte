<!-- <script lang="ts">
	import type { SvelteComponent } from "svelte";

	let comp;

    export let parent: SvelteComponent;
    const handleClick = () => {
        parent.close();
    }
</script>

<div class="flex flex-col items-center gap-4">
	<h1 class="h1">Buzz</h1>
	<button class="btn variant-filled" on:click={handleClick}>Dismiss!</button>
</div> -->

<script lang="ts">
    // Stores
	import { getModalStore } from '@skeletonlabs/skeleton';
    
	// Props
	import type { SvelteComponent } from 'svelte';
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;
    // $: console.log(parent)
	
    const modalStore = getModalStore();

	// Notes: Use `w-screen h-screen` to fit the visible canvas size.
	const cBase = 'bg-surface-100-800-token w-screen h-screen p-4 flex justify-center items-center';
    
</script>

{#if $modalStore[0]}
	<div class="modal-example-fullscreen {cBase}">
		<div class="flex flex-col items-center space-y-4">
			<h2 class="h2">Full Screen Modal</h2>
			<p>This demonstrates a full screen modal dialog.</p>
			<button class="btn variant-filled" on:click={parent.onClose}>× Close</button>
		</div>
	</div>
{/if}