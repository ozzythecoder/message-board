import { createFileRoute } from '@tanstack/react-router';
import SignInForm from 'src/features/auth/components/SignInForm';

export const Route = createFileRoute('/about')({
    component: () => <About />,
});

function About() {
    return (
        <div>
            <SignInForm />
        </div>
    );
}
