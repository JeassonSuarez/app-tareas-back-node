import mysql from 'mysql';
import {promisify} from 'util';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'tareasJass'
})

pool.getConnection((err, connection)=>{
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Data base connection was closed');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('DATABASE HAS TO MAY CONNECTIONS');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('DATABASE CONNECTIION WAS REFUSED');
    }
  }

  if(connection) connection.release();
  console.log('DB is Connected');
  return;
})

pool.query = promisify(pool.query)

export default pool;
