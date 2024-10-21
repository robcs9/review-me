<script lang="ts">
    import type { PageData, PageParentData, } from "./$types";
    export let data: PageData;
    // $: console.log(data)
</script>

<div>
    <h1>'/playground' is a PLAYGROUND for data manipulation and other kinds of tests</h1>

</div>

<hr>

<div>
    <h6 class="h6">My favorite tracks are: </h6>
    <ul>
        {#each data.tracks as { trackName }}
            <li>
                <p>{trackName}</p>
            </li>
        {/each}
    </ul>
</div>