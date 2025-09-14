
import { Hono } from 'hono';
import { cors } from './middleware/cors';
import routes from './routes';
import { Env } from './types/env';


export const app = new Hono<{ Bindings: Env }>()

app.use('*', cors())
app.notFound((c) => c.json({ error: 'Not Found mew' }, 404))

app.route('/', routes)
