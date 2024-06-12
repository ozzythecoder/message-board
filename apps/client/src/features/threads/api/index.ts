import { useQuery } from '@tanstack/react-query';
import api from 'src/config/api';
import { QueryKeyObject, ApiThreadResponse } from 'src/types';

const getThreadsByTopic = async (q: QueryKeyObject<string>) => {
    const [_, topicID] = q.queryKey;
    const response = await api.get<ApiThreadResponse[]>('/threads/byTopic', {
        params: { topicID },
    });
    return response.data;
};

export const useThreadsByTopic = (topicID: string) => {
    return useQuery({
        queryKey: ['threads', topicID],
        queryFn: getThreadsByTopic,
    });
};

const getOneThread = async (q: QueryKeyObject<string>) => {
    const [_, threadID] = q.queryKey;
    const { data } = await api.get<ApiThreadResponse>(`/threads/${threadID}`);
    return data;
};

export const useOneThread = (threadID: string) => {
    return useQuery({ queryKey: ['thread', threadID], queryFn: getOneThread });
};
