<script lang="ts">
    import type { PageData } from "./$types";
    import type { PageParentData } from "./$types";
    export let data: PageParentData;

    $: console.log(data)
</script>

<h1>'/playground' is a PLAYGROUND for data manipulation and other kinds of tests</h1>