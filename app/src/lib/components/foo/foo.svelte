<script lang="ts">
	import type { SvelteComponent } from "svelte";

	let comp;
    let parent: SvelteComponent;
    const handleClick = () => {

    }
</script>

<div class="flex flex-col items-center gap-4">
	<h1 class="h1">Buzz</h1>
	<button class="btn variant-filled" on:click={parent.close()}>Dismiss!</button>
</div>
<!-- 
<svelte:component bind:this={comp}>

    <svelte:fragment></svelte:fragment>
</svelte:component> -->
