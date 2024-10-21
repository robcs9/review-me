<script lang="ts">
	import type { PageData, PageParentData } from './$types';
	export let data: PageData;
	// $: console.log(data)

	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	
	const modalStore = getModalStore();
    
    import Foo from '$lib/components/foo/foo.svelte';

    // let ref;
    let props;
    let slot;

    let modalComp: ModalComponent = {
        ref: Foo,
        /* props,
        slot,   */
    };

	const modal: ModalSettings = {
		type: 'component',
        component: modalComp,
		// Data
		/* title: 'Example Alert',
		body: 'something something', */
		// image: 'https://i.imgur.com/WOgTG96.gif'
	};
	
    const handleClick = () => {
		modalStore.trigger(modal);
	};
</script>

<div>
	<h1>'/playground' is a PLAYGROUND for data manipulation and other kinds of tests</h1>
</div>

<hr />

<div class="flex flex-col gap-2 items-center mt-4">
	<button class="btn variant-outline-tertiary" on:click={handleClick}>Open Fizz</button>

	<div>
		<h6 class="h6">My favorite tracks are:</h6>
		<ul>
			{#each data.tracks as { trackName }}
				<li>
					<p>{trackName}</p>
				</li>
			{/each}
		</ul>
	</div>
</div>