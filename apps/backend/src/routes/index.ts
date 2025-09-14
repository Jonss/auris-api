// src/routes/index.ts
import { hello } from '@/controllers/hello'
import { Hono } from 'hono'
import type { Env } from '../types/env'


const router = new Hono<{ Bindings: Env }>()
router.get('/health', (c) => c.json({ ok: true }))
router.get('hello', hello)
export default router
