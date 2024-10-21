import type { PageServerLoad } from "./$types";
import { getInitialTracks } from "$lib/server/db";

export const load: PageServerLoad = () => {
    const tracks = getInitialTracks();

    return { tracks, }
}