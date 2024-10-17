import type { PageServerLoad } from "./$types";

export function load() {
    // let date = new Date(Date.now());//.toISOString();
    
    let data = {
        date: new Date(Date.now()).toISOString(),
    };
    
    return data;
}

/* Server form actions */