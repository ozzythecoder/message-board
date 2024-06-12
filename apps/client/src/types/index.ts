export type User = {
    id: string;
    firstName?: string;
    lastName?: string;
    username: string;
    email: string;
    password: never;
    dateJoined: Date;
};

export type Thread = {
    id: string;
    authorID: string;
    topicID: string;
    title: string;
    body: string;
    createdAt: string;
    lastReply: string;
    isLocked: boolean;
};

export type Topic = {
    id: string;
    createdAt: Date;
    title: string;
    description: string;
};

export type Comment = {
    id: string;
    authorID: string;
    threadID: string;
    createdAt: string;
    body: string;
};

export type Notification = {
    id: string;
    userID: string;
    title: string;
    datetime: Date;
    isRead: boolean;
};

export type QueryKeyObject<T> = {
    queryKey: [string, T];
};

export type ApiThreadResponse = {
    user: ApiUserResponse;
    thread: Thread;
};

export type ApiCommentResponse = {
    user: ApiUserResponse;
    comment: Comment;
};

export type ApiUserResponse = Pick<User, 'id' | 'username'>;
