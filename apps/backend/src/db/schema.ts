import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable('posts', {
    id: integer('id').primaryKey({ autoIncrement: true}),
    title: text('title', { length: 256}).notNull(),
    content: text('content', { length: 266}).notNull(),
    timestamp: text('timestamp').default(sql`CURRENT_TIMESTAMP`).notNull(),
});