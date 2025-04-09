<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Modals
	import { Modal } from '@skeletonlabs/skeleton';
	import GenericModal from '$lib/components/modals/generic-modal.svelte';
	import FullscreenModal from '$lib/components/modals/fullscreen-modal.svelte';
	import FormModal from '$lib/components/modals/form-modal.svelte';
	import Form from '$lib/components/form/form.svelte';

	const modalRegistry: Record<string, ModalComponent> = {
		// Set a unique modal ID, then pass the component reference
		formModal: {
			ref: FormModal,
		},
		genericModal: { 
			ref: GenericModal,
			// props: { foo: 'bar' },
			// slot: Form,
		},
		fullscreenModal: { ref: FullscreenModal },
	};

	// Toast
	import { initializeStores, Toast } from '@skeletonlabs/skeleton';
	
	// Initializing stores for Modals, Toasts...
	initializeStores();
</script>


<Toast zIndex="z-[1000]" />
<Modal components={modalRegistry} />

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Restaurante Universitário - UFPE</strong>
			</svelte:fragment>
			<!-- <svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://www.ufpe.br"
					target="_blank"
					rel="noreferrer"
				>
					UFPE
				</a>
			</svelte:fragment> -->
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="footer">
		<div class="flex justify-center m-4">
			<p>&copy; 2025, UFPE</p>
		</div>
	</svelte:fragment>
</AppShell>