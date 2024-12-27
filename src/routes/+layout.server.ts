import type { PageServerLoad } from "./$types";
import { initReviews, getAllReviews, saveReview } from "$lib/server/db";
import type { Review } from "$lib/server/db/types";

// Sample code
/* import { getInitialTracks } from "$lib/server/db";

export const load: PageServerLoad = () => {
    const tracks = getInitialTracks();

    return { tracks, }
} */

export const load: PageServerLoad = () => {
    
    // const res = saveReview(review);

    console.log('-- DB CHECK --')
    let rows = getAllReviews(0);
}
