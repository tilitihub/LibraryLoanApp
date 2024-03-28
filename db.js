/*
* File: ...
* Author: Tiliczki Tibor
* Copyright: 2024, Tiliczki Tibor
* Group: Szoft II-1-E
* Date: 2024-03-...
* Github: https://github.com/tilitihub/...
* Licenc: GNU GPL @ kopirájtkriptobájt
*/
import mariadb from 'mariadb';

const pool = mariadb.createPool({
 host: process.env.DB_HOST || 'localhost',
 user: process.env.DB_USER || 'your_user',
 password: process.env.DB_PASSWORD || 'your_password',
 database: process.env.DB_NAME || 'your_database'
});

export default pool;
