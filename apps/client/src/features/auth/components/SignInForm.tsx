import { useRef } from 'react';
import { signIn } from '../api';
import { AxiosError } from 'axios';
import { useNavigate } from '@tanstack/react-router';
import styles from './SignInForm.module.scss';

export default function SignInForm() {
    const navigate = useNavigate();

    const userRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const username = userRef.current?.value;
        const password = passRef.current?.value;

        if (!username || !password) return;

        try {
            const response = await signIn({ username, password });
            console.log(response);
            navigate({ to: '/' });
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error.response?.status, error.message, error.code);
            } else {
                console.log(JSON.stringify(error, null, 2));
            }
        }
    };

    return (
        <main>
            <form onSubmit={handleSubmit} className={styles.signInForm}>
                <h1>Sign In</h1>
                <fieldset>
                    <label htmlFor="username">Username</label>
                    <input
                        ref={userRef}
                        name="username"
                        minLength={4}
                        required
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input
                        ref={passRef}
                        type="password"
                        name="password"
                        minLength={8}
                        required
                    />
                </fieldset>
                <button>Submit</button>
            </form>
        </main>
    );
}
