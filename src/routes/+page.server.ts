import type { PageServerLoad, Actions } from "./$types";

/* export function load() {
    // let date = new Date(Date.now());//.toISOString();
    
    let data = {
        date: new Date(Date.now()).toISOString(),
    };
    
    return data;
} */

/* Server form actions */
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        console.log("data: ", data);
        /* const f = {
            name: 'name',
            review: 'review',
        } */
        return { success: true };
    },
} satisfies Actions;

import { getInitialTracks } from '$lib/server/db';

export const load = (() => {

  const tracks = getInitialTracks();


  return {

    tracks,

  };

}) satisfies PageServerLoad;