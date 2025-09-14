
import { drizzle } from 'drizzle-orm/d1';
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { posts } from './db/schema';

export type Env = {
  CORS_ORIGINS: string;
  MSG: string;
  DB: D1Database;
}

const app = new Hono<{ Bindings: Env }>()

app.use('*', async (c, next) => {
  const rawOrigins = c.env.CORS_ORIGINS || ''
  const allowedOrigins = rawOrigins.split(',').map(o => o.trim())
  console.log(allowedOrigins)

  return cors({
    origin: (origin: string | null, _c) => {
      if (!origin) return null
      return allowedOrigins.includes(origin) ? origin : null
    } 
  })(c, next)
})

// routes
app.get('/hello', (c) => {
  return c.text('HELLO, WORLD!' + c.env.MSG + " " + c.env.CORS_ORIGINS)
});

// app.get('/posts', async (c) => {
//   const db = drizzle(c.env.DB);
//   const result = await db.select().from(posts).all()
//   return c.json(result);
// }).post('/posts', async (c) => {
//   const db = drizzle(c.env.DB);
//   const { title, content } = await c.req.json();
//   const result = await db.insert(posts).values({ title, content }).returning();
//   return c.json(result);
// });

export default app
