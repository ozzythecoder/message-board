import { useQuery } from '@tanstack/react-query';
import api from 'src/config/api';
import type { QueryKeyObject, Topic } from 'src/types';

const getTopics = async () => {
    const result = await api.get<Topic[]>('/topics');
    return result.data;
};

export const useTopics = () => {
    return useQuery({ queryKey: ['topics'], queryFn: getTopics });
};

const getOneTopic = async (q: QueryKeyObject<string>) => {
    const [_, topicID] = q.queryKey;
    const result = await api.get<Topic>(`/topics/${topicID}`);
    return result.data;
};

export const useOneTopic = (topicID: string) => {
    return useQuery({ queryKey: ['topic', topicID], queryFn: getOneTopic });
};
