import { pgTable, text, timestamp, serial } from 'drizzle-orm/pg-core';

export const events = pgTable('events', {
	id: serial(),
	name: text().notNull(),
	description: text(),
	start: timestamp({ mode: 'date', withTimezone: true }).notNull(),
	end: timestamp({ mode: 'date', withTimezone: true }).notNull(),
	location: text().notNull(),
	created_at: timestamp({ mode: 'date' }).defaultNow().notNull(),
	updated_at: timestamp({ mode: 'date' })
		.defaultNow()
		.$onUpdate(() => new Date())
		.notNull()
});
