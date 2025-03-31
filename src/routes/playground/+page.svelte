<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from '../$types';
	import type { PageData, PageParentData } from './$types';
	// import { Card } from '@skeletonlabs/skeleton'
	

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
		value: ''
	};

	export let data: PageData, form: ActionData;
	// const handleSubmit = ( { data, actions, form } ) => {
	// handleSubmit is invoked before the server even receive the formData for processing
	const handleSubmit = (res) => {
		// console.log('Submitted!');
		console.log('Submit event response: ', res);
	};

	// $: console.log('form: ', form);

	import * as toastify from '$lib/utils/toastify';
	import { getToastStore } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();

	// Notification
	$: if (form?.success) {
		console.log('Data saved');
		toastify.success(toastStore, 'Obrigado pela sua avaliação! Volte sempre! <3');
		console.log('Removing notification in 1.5 secs...');
		setTimeout(() => {
			toastify.success(toastStore, 'Obrigado pela sua avaliação! Volte sempre! <3');
			form.success = false;
		}, 1500);
		// toastStore.clear
	}
	$: if (form?.fail) {
		toastify.error(toastStore, 'Error!');
	}
	
	const imgSrc =
  'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<div>
	<h1>'/playground' is a place for testing all sorts of implementations for this project</h1>
</div>

<hr />

<!-- <div class="flex flex-col gap-2 items-center mt-4">
	<button class="btn variant-filled-surface" on:click={openModal}>
		<p>INICIAR</p>
		<iconify-icon icon="flat-color-icons:survey" height="2em"></iconify-icon>
	</button>
</div>
 -->
<!-- z-index and positioning testing -->
<!-- <h1 class="h1 absolute z-[1000] bg-green-400 outline-double">All Good!</h1>
<h1 class="h1 absolute z-[999] bg-blue-400">All Gucci!</h1> -->

<!-- Form debugging -->
<!-- <form method="POST" class="flex flex-col items-center gap-6 p-4" use:enhance={handleSubmit}>
	<label for="f-comentario" class="">
		<h4 class="h4">{comentario.label.toUpperCase()}</h4>
	</label>
	<textarea
		class="bg-red-100 text-red-800 rounded-2xl w-[32em]"
		name={comentario.name}
		bind:value={comentario.value}
		placeholder={'Deixe sua opinião...'}
		id="f-comentario"
	></textarea>

	<button class="btn variant-filled-primary">Enviar</button>
	{#if form?.success}
		<h1 class="h1">FORM SUCCESSFULLY SUBMITTED</h1>
	{/if}
</form> -->

<div class="m-4 h-[100vh] bg-orange-200 outline-dashed outline-teal-500">
	<a
  href="#"
  class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden"
>
  <!-- {/* Header */} -->
  <header>
    <img src={imgSrc} class="aspect-[21/9] w-full grayscale hue-rotate-90" alt="banner" />
  </header>
  <!-- {/* Article */} -->
  <article class="space-y-4 p-4">
    <div>
      <h2 class="h6">Announcements</h2>
      <h3 class="h3">Skeleton is Awesome</h3>
    </div>
    <p class="opacity-60">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint
      nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.
    </p>
  </article>
  <!-- {/* Footer */} -->
  <footer class="flex items-center justify-between gap-4 p-4">
    <small class="opacity-60">By Alex</small>
    <small class="opacity-60">On {new Date().toLocaleDateString()}</small>
  </footer>
</a>
</div>