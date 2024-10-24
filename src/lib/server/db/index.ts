//#region Sample DB code
// const db = new Database('db.sqlite', { verbose: console.log });
// Improves concurrent read and write speeds
// db.pragma('journal_mode = WAL');

// import type { Track } from './types';
// const db = new Database(CHINOOK_DB_PATH, /* { verbose: console.log } */)

/* export function getInitialTracks(limit = 10): Track[] {
  const sql = `

  select t.TrackId as trackId

  , t.Name as trackName

  , a.AlbumId as albumId

  , a.Title as albumTitle

  , at.ArtistId as artistId

  , at.Name as artistName

  , g.Name as genre

from tracks t

join albums a

 on t.AlbumId = a.AlbumId

join artists at

 on a.ArtistId = at.ArtistId

join genres g

 on t.GenreId = g.GenreId

limit $limit 

`;
  // stmnt (statement)
	const stmnt = db.prepare(sql);

	const rows = stmnt.all({ limit });

	return rows as Track[];
} */
//#endregion

import Database from 'better-sqlite3';

import { CHINOOK_DB_PATH, DB_PATH } from '$env/static/private';
import type { Review } from './types';

const db = new Database(DB_PATH, {verbose: console.log});

export const getAllReviews = (): Review[] | undefined => {
	const query = `
  
  select r.reviewId as reviewId,

	r.qualidade as qualidade,
  
  r.cordialidade as cordialidade,
  
	r.apresentacao as apresentacao,
    
	r.temperatura as temperatura,
    
	r.sabor sabor,
    
	r.higiene higiene,

	r.comentario comentario
  
  from reviews r
  `;

	// let rows: Review[] = [];
	let rows;
	// SQL statement returned
	let stmnt;

	try {
		stmnt = db.prepare(query);
		rows = stmnt.all();
		console.warn('\nReviews data retrieved successfully!');
		/* rows = stmnt.all();
		return rows as Review[]; */
	} catch (error) {
		console.error('\nReviews data retrieval failed!');

		if (error instanceof Error) {
			const stackTrace = error;
			console.log(`\n${error}`);

			if (error.message.includes('no such table: reviews')) {
				console.warn('\nAttempting database reinitialization...');
				
        initReviews();
        // retry last read op from here...

        /* const { res, err } = initReviews();

        if(res?.database.open) {
          stmnt = db.prepare(query);
          rows = stmnt.all();
          console.warn(stmnt)
        } */

				/* if (!err) {
        } */
			}
		}
		// Implement handlers for:
		// - non-existant table;
		// - corrupted table structure;
	}

	return rows as Review[];
};

export const initReviews = () => {
	const sql = `

    create table if not exists reviews (
      
      reviewId integer primary key,

	    qualidade integer,
    
	    cordialidade integer,
      
	    apresentacao integer,
      
	    temperatura integer,
      
	    sabor integer,
      
	    higiene integer,

	    comentario text
    )

  `;

	let stmnt, err;

	try {
		// try db.exec instead?
    // failing table creation
    stmnt = db.prepare(sql);
		console.warn('\nDatabase initialized successfully!');
    
	} catch (error) {
		console.error('\nDatabase initialization failed!');

		if (error instanceof Error) {
			console.log(error);
			err = error;
		}
	}
	// return { res: stmnt, err };
};
