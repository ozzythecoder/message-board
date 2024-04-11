import api from 'src/config/api';

export const getTopics = async () => {
    return await api.get('/topics');
};
