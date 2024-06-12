import { InferSelectModel } from 'drizzle-orm';
import {
    pgTable,
    index,
    unique,
    uuid,
    varchar,
    text,
    timestamp,
    boolean,
} from 'drizzle-orm/pg-core';

export const user = pgTable(
    'auth_user',
    {
        id: uuid('id').defaultRandom().primaryKey().notNull(),
        firstName: varchar('first_name', { length: 40 }),
        lastName: varchar('last_name', { length: 40 }),
        username: varchar('username', { length: 32 }).notNull(),
        email: varchar('email').notNull(),
        password: text('password').notNull(),
        dateJoined: timestamp('date_joined', { mode: 'string' })
            .defaultNow()
            .notNull(),
    },
    (table) => {
        return {
            id_idx: index('id_idx').using('btree', table.id),
            auth_user_username_unique: unique('auth_user_username_unique').on(
                table.username,
            ),
        };
    },
);

export const notification = pgTable('notification', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    userID: uuid('user_id').references(() => user.id),
    title: varchar('title', { length: 50 }),
    datetime: timestamp('datetime', { mode: 'string' }).defaultNow().notNull(),
    isRead: boolean('is_read').default(false).notNull(),
});

export const topic = pgTable('topic', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    title: varchar('title', { length: 48 }).notNull(),
    description: varchar('description', { length: 256 }).notNull(),
    createdAt: timestamp('created_at', { mode: 'string' })
        .defaultNow()
        .notNull(),
});

export const userOptions = pgTable('user_options', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    userID: uuid('user_id').references(() => user.id),
    profilePictureUrl: varchar('profile_picture_url', { length: 300 }),
});

export const thread = pgTable('thread', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    authorID: uuid('author_id')
        .references(() => user.id)
        .notNull(),
    topicID: uuid('topic_id')
        .references(() => topic.id)
        .notNull(),
    body: varchar('body', { length: 5000 }).notNull(),
    createdAt: timestamp('created_at', { mode: 'string' })
        .defaultNow()
        .notNull(),
    lastReply: timestamp('last_reply', { mode: 'string' })
        .defaultNow()
        .notNull(),
    isLocked: boolean('is_locked').default(false).notNull(),
    title: varchar('title', { length: 300 }).notNull(),
});

export const comment = pgTable('comment', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    authorID: uuid('author_id').references(() => user.id),
    threadID: uuid('thread_id').references(() => thread.id),
    body: varchar('body', { length: 5000 }).notNull(),
    createdAt: timestamp('created_at', { mode: 'string' })
        .defaultNow()
        .notNull(),
});

export type User = InferSelectModel<typeof user>;
export type Notification = InferSelectModel<typeof notification>;
export type Thread = InferSelectModel<typeof thread>;
export type Topic = InferSelectModel<typeof topic>;
export type Comment = InferSelectModel<typeof comment>;
