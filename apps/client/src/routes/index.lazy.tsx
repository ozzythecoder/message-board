import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
    component: () => <Index />,
});

function Index() {
    return (
        <main>
            <h2>Howdy howdy</h2>
        </main>
    );
}
