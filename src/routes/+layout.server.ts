import type { PageServerLoad } from "./$types";
import { initReviews, getAllReviews,  } from "$lib/server/db";

// Sample code
/* import { getInitialTracks } from "$lib/server/db";

export const load: PageServerLoad = () => {
    const tracks = getInitialTracks();

    return { tracks, }
} */

export const load = (): PageServerLoad => {
    // console.log('hey');
    // const res = initReviews();
    const res = getAllReviews();
    console.dir(res);
    
}
