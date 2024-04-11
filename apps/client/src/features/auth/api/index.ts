import api from 'src/config/api';

export async function signIn({
    username,
    password,
}: {
    username: string;
    password: string;
}) {
    return await api.post(
        `/auth/login`,
        JSON.stringify({ username, password }),
    );
}

export async function getUser() {
    return await api.get(`/user`);
}
