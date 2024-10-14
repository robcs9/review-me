<script lang="ts">
	import { RadioGroup, RadioItem, Ratings } from '@skeletonlabs/skeleton';
	import 'iconify-icon';

	let radioValue: number;
	let radioItems = [
		{
			name: 'test1',
			value: 1,
            icon: 'openmoji:cat-face',
		},
		{
			name: 'test2',
			value: 2,
            icon: 'openmoji:dog-face',
		},
		{
			name: 'test3',
			value: 3,
            icon: 'openmoji:pig-face',
		}
	];
	let satisfaction = {
		current: 0,
		max: 5
	};
	let quality = {
		current: 0,
		max: 5
	};
	const iconClick = (event: CustomEvent<{ index: number }>): void => {
		satisfaction.current = event.detail.index;
	};
</script>

<!-- Fix the messy attrs -->

<div class="flex flex-col gap-2">
	<label for="">Qualidade da sua refeição hoje</label>
	<RadioGroup>
		{#each radioItems as item}
			<RadioItem bind:group={radioValue} {...item}>
				<iconify-icon width="2em" height="2em" icon={item.icon}></iconify-icon>
			</RadioItem>
		{/each}
        </RadioGroup>

	<label for="">Satisfação</label>
	<!-- Fix flinching icons during interaction (replace icons?) -->
	<Ratings bind:value={satisfaction.current} interactive on:icon={iconClick} max={satisfaction.max}>
		<svelte:fragment slot="empty">
			<iconify-icon icon="ph:star-duotone"></iconify-icon>
		</svelte:fragment>
		<svelte:fragment slot="full">
			<iconify-icon icon="ph:star-fill"></iconify-icon>
		</svelte:fragment>
	</Ratings>
</div>

<!-- <div class="flex flex-col gap-2 border">
    <label class="flex flex-col" for="comment">
        Comment
        <textarea class="form-textarea" name="comment" id="comment" />
    </label>
    
    <div class="">
        <label for="">
            Question
            <label class="flex items-center space-x-2">
                <input class="radio" type="radio" checked name="radio-direct" value="1" />
                <p>Option 1</p>
            </label>
            <label class="flex items-center space-x-2">
                <input class="radio" type="radio" name="radio-direct" value="2" />
                <p>Option 2</p>
            </label>
            <label class="flex items-center space-x-2">
                <input class="radio" type="radio" name="radio-direct" value="3" />
                <p>Option 3</p>
            </label>
        </label>
    </div>
</div> -->
