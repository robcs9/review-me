<script>
	import Form from '$lib/components/form/form.svelte';
	import 'iconify-icon';
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h1 class="h1">
			Obrigado por comer conosco!
			<iconify-icon icon="noto:red-heart" height="0.8em"></iconify-icon>
		</h1>
		<h4 class="h4">Avalie-nos através da enquete abaixo!</h4>
		<Form />
	</div>
</div>