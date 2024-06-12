import { createFileRoute } from '@tanstack/react-router';
import SignInForm from 'src/features/auth/components/SignInForm';

export const Route = createFileRoute('/signin')({
    component: () => <SignIn />,
});

function SignIn() {
    return (
        <div>
            <SignInForm />
        </div>
    );
}
