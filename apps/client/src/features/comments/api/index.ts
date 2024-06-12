import { useQuery } from '@tanstack/react-query';
import api from 'src/config/api';
import { QueryKeyObject, ApiCommentResponse } from 'src/types';

const getCommentsByThread = async (q: QueryKeyObject<string>) => {
    const [_, threadID] = q.queryKey;
    const { data } = await api.get<ApiCommentResponse[]>('/comments/byThread', {
        params: { threadID },
    });
    return data;
};

export const useCommentsByThread = (threadID: string) => {
    return useQuery({
        queryKey: ['comments', threadID],
        queryFn: getCommentsByThread,
    });
};

const getOneComment = async (q: QueryKeyObject<string>) => {
    const [_, commentID] = q.queryKey;
    const { data } = await api.get<ApiCommentResponse>(
        `/comments/${commentID}`,
    );
    return data;
};

export const useOneComment = (commentID: string) => {
    return useQuery({
        queryKey: ['comment', commentID],
        queryFn: getOneComment,
    });
};
