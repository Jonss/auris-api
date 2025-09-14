import * as R2 from '@/services/r2';
import { Context } from "hono";

export async function hello(c: Context) {
  const key = c.req.param('key')
  const result = await R2.getObject(c.env.R2, key)

  console.log("key:", key);
  if (!result) return c.json({ error: 'Not Found' }, 404)

  const { body, status, headers } = result
  return new Response(body, { status, headers })
}


// auris/carlos_o_calvo_by_ia_PH.mp3