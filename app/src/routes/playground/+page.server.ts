// import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

export const load = (async ({ parent }) => { 
    // console.log('checking at /playground server')
    // console.log( await parent() )
}) satisfies PageServerLoad;

export const actions = {
    default: async ( {request} ) => {
        const data = await request.formData();
        console.log('data: \n', data);
        return {
            success: true
        }
    },
} satisfies Actions;