import type { PageServerLoad } from "./$types";

export const load = (async ({ parent }) => { 
    console.log('checking at /playground server')
    // console.log( await parent() )
}) satisfies PageServerLoad;