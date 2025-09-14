export type Env = {
  CORS_ORIGINS: string;
  MSG: string;
  DB: D1Database;
}

declare module 'hono' {
  interface ContextVariableMap {
    user?: { id: string; role?: 'user' | 'admin' }
  }
}