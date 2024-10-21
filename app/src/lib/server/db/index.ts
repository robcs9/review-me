/* import Database from 'better-sqlite3';

const db = new Database('db.sqlite', { verbose: console.log });

// Improves concurrent read and write speeds
// db.pragma('journal_mode = WAL');

// const init = () => {
//     db.exec(
//         "IF NOT EXISTS CREATE db"
//     );
// }

const res = db.prepare('SELECT RANDOM() % 100 AS result');
console.log(res.get())
console.log('\'sup')

 */
import Database from 'better-sqlite3';

import { DB_PATH } from '$env/static/private';

import type { Track } from './types';

/* import path from 'path';
console.log(path.dirname('./data/chinook.db')) */
// const db = new Database('./data/chinook.db', { verbose: console.log });
// const db = new Database('./data', { verbose: console.log });

/* import * as env from '$env/static/private'
console.log(env.DB_PATH) */

import path from 'path';
// console.log(path.resolve('./src/lib/server/db/data/chinooki.db'))
// Resolver inconsistências dos caminhos relativos (./ => app/)
// Talvez seja porque a raiz do app não está na raiz do projeto/repositório (?)
const db = new Database('./src/lib/server/db/data/chinook.db', { verbose: console.log })
export function getInitialTracks(limit = 10): Track[] {
	/* const db = new Database('./data/chinook', { verbose: console.log }); */
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

	const stmnt = db.prepare(sql);

	const rows = stmnt.all({ limit });

	return rows as Track[];
}