import pg from 'pg'

const { Pool, Client } = pg
 
const pool = new Pool({
  host: 'localhost',
  user: 'crowdfunding',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

const client = new Client()
await client.connect()
 
try {
   const res = await client.query('SELECT $1::text as message', ['Hello world!'])
   console.log(res.rows[0].message) // Hello world!
} catch (err) {
   console.error(err);
} finally {
   await client.end()
}
