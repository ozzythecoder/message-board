import { relations } from 'drizzle-orm/relations';
import {
    user,
    notification,
    userOptions,
    thread,
    topic,
    comment,
} from './schema';

export const notificationRelations = relations(notification, ({ one }) => ({
    auth_user: one(user, {
        fields: [notification.userID],
        references: [user.id],
    }),
}));

export const auth_userRelations = relations(user, ({ many }) => ({
    notifications: many(notification),
    user_options: many(userOptions),
    threads: many(thread),
    comments: many(comment),
}));

export const user_optionsRelations = relations(userOptions, ({ one }) => ({
    auth_user: one(user, {
        fields: [userOptions.userID],
        references: [user.id],
    }),
}));

export const threadRelations = relations(thread, ({ one, many }) => ({
    auth_user: one(user, {
        fields: [thread.authorID],
        references: [user.id],
    }),
    topic: one(topic, {
        fields: [thread.topicID],
        references: [topic.id],
    }),
    comments: many(comment),
}));

export const topicRelations = relations(topic, ({ many }) => ({
    threads: many(thread),
}));

export const commentRelations = relations(comment, ({ one }) => ({
    auth_user: one(user, {
        fields: [comment.authorID],
        references: [user.id],
    }),
    thread: one(thread, {
        fields: [comment.threadID],
        references: [thread.id],
    }),
}));
