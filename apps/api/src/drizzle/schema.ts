import { InferSelectModel, relations } from 'drizzle-orm';
import {
    boolean,
    index,
    pgTable,
    text,
    timestamp,
    uuid,
    varchar,
} from 'drizzle-orm/pg-core';

export const user = pgTable(
    'auth_user',
    {
        id: uuid('id').primaryKey().notNull().defaultRandom(),
        firstName: varchar('first_name', { length: 40 }),
        lastName: varchar('last_name', { length: 40 }),
        username: varchar('username', { length: 32 }).notNull().unique(),
        email: varchar('email').notNull(),
        password: text('password').notNull(),
        dateJoined: timestamp('date_joined').defaultNow().notNull(),
    },
    (user) => ({
        idIdx: index('id_idx').on(user.id),
    }),
);

export const userOptions = pgTable('user_options', {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    userId: uuid('user_id').references(() => user.id),
    profilePictureUrl: varchar('profile_picture_url', { length: 300 }),
});

export const userRelations = relations(user, ({ one, many }) => ({
    options: one(userOptions),
    posts: many(post),
    threads: many(thread),
    notifications: many(notification),
}));

export const topic = pgTable('topic', {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    title: varchar('title', { length: 48 }).notNull(),
    description: varchar('description', { length: 256 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const topicRelations = relations(topic, ({ many }) => ({
    threads: many(thread),
}));

export const thread = pgTable('thread', {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    authorID: uuid('author_id').references(() => user.id), // references user
    topicID: uuid('topic_id').references(() => topic.id), // references topic
    body: varchar('body', { length: 5000 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    lastReply: timestamp('last_reply').notNull(),
    isLocked: boolean('is_locked').default(false).notNull(),
});

export const threadRelations = relations(thread, ({ one, many }) => ({
    author: one(user),
    topic: one(topic),
    posts: many(post),
}));

export const post = pgTable('post', {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    authorID: uuid('author_id').references(() => user.id), // references user
    threadID: uuid('thread_id').references(() => thread.id), // references thread
    body: varchar('body', { length: 5000 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const postRelations = relations(post, ({ one }) => ({
    author: one(user),
    thread: one(thread),
}));

export const notification = pgTable('notification', {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    userId: uuid('user_id').references(() => user.id),
    title: varchar('title', { length: 50 }),
    datetime: timestamp('datetime').defaultNow().notNull(),
    isRead: boolean('is_read').default(false).notNull(),
});

export const notificationRelations = relations(notification, ({ one }) => ({
    user: one(user),
}));

export type User = InferSelectModel<typeof user>;
export type Topic = InferSelectModel<typeof topic>;
export type Thread = InferSelectModel<typeof thread>;
export type Post = InferSelectModel<typeof post>;
export type Notification = InferSelectModel<typeof notification>;
