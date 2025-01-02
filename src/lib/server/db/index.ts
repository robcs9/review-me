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

import { DB_PATH } from '$env/static/private';
import type { Review } from './types';

const db = new Database(DB_PATH /* , { verbose: console.log } */);

export const getAllReviews = (limit: undefined | number): Review[] | undefined => {
	
	let orderStmnt = "";
	let limitStmnt = "limit @limit";
	
	if(limit === undefined) limitStmnt = "";
	if(typeof(limit) === 'number' && limit < 0) {
		orderStmnt = "ORDER BY id DESC"
		limit *= -1;
	}

	const query = `
  
  SELECT
	r.id AS id,
	r.qualidade AS qualidade,
  r.cordialidade AS cordialidade,
	r.apresentacao AS apresentacao,
	r.temperatura AS temperatura,
	r.sabor AS sabor,
	r.higiene AS higiene,
	r.comentario AS comentario
  FROM reviews r
	${orderStmnt}
	${limitStmnt}

  `;

	let rows;
	let stmnt; // SQL statement returned

	try {
		stmnt = db.prepare(query);
		rows = stmnt.all({ limit });
		console.warn('\nReviews data retrieved successfully!');
	} catch (error) {
		console.error('\nReviews data retrieval failed!');
		console.log('Number of tables in db: ', db.prepare('SELECT * FROM sqlite_master').all());

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
			}
		}
		// Implement handlers for:
		// - non-existant table;
		// - corrupted table structure;
	}

	return rows as Review[];
};

export const initReviews = () => {
	
	const query = `

	CREATE TABLE IF NOT EXISTS reviews (
      
      id INTEGER PRIMARY KEY AUTOINCREMENT,

	    qualidade INTEGER,
    
	    cordialidade INTEGER,
      
	    apresentacao INTEGER,
      
	    temperatura INTEGER,
      
	    sabor INTEGER,
      
	    higiene INTEGER,

	    comentario TEXT
    )
	`;

	let stmnt; //, err;

	try {
		stmnt = db.prepare(query);
		const res = stmnt.run();
		console.warn('\nDatabase initialized successfully!');
	} catch (error) {
		console.error('\nDatabase initialization failed!');

		if (error instanceof Error) {
			console.log(error);
			// err = error;
		}
	}
	// return { res: stmnt, err };
};

// Wrap with a Promise to provide asynchronous behavior
export const saveReview = (review: Review) => {
	// ids e.g.: 20240201001, 202403230023
	/* const review = {
		//reviewId: crypto.randomUUID(),
		qualidade,
		cordialidade,
		apresentacao,
		temperatura,
		sabor,
		higiene,
		comentario,
	} */
	/* const rvw = {
		qualidade: 'Insatisfeito',
		cordialidade: 1,
		apresentacao: 2,
		temperatura: 3,
		sabor: 4,
		higiene: 5,
		comentario: 'Boa comida.',
	} */

	try {
		const stmnt = db.prepare(`INSERT INTO reviews (qualidade, cordialidade, apresentacao, temperatura, sabor, higiene, comentario) VALUES (@qualidade, @cordialidade, @apresentacao, @temperatura, @sabor, @higiene, @comentario)`); //(?, ?, ?, ?, ?, ?, ?)`);
		// const stmnt = db.prepare(`insert into reviews (qualidade, cordialidade, apresentacao, temperatura, sabor, higiene, comentario) values (@qualidade, @cordialidade, @apresentacao, @temperatura, @sabor, @higiene, @comentario)`); //(?, ?, ?, ?, ?, ?, ?)`);
		const insert = stmnt.run(review);
		console.warn('\nReview saved successfully!');
		// console.log(insert);
		
		let lastEntry = getAllReviews(-1);
		console.log('Last entry:\n', lastEntry);
	} catch (error) {
		console.error('\nReview saving has failed!');
		// console.log('error: ',error)
		if (error instanceof Error) {
			console.log(`\n${error.message}`);
		}
	}
	// console.warn(stmnt);
	// validate data before inserting and handle errors
};

// Implement update;
// Implement delete;
// soft delete? column isDeleted (boolean)
// Implement queries for reports