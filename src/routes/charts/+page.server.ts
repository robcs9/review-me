// import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import type { Review } from "$lib/server/db/types";
import { saveReview, getAllReviews } from "$lib/server/db";
import { validateReview } from "$lib/utils/validateReview";

export const load = (async ({ parent }) => { 
  console.log(getAllReviews());
  
}) satisfies PageServerLoad;