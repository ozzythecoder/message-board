import { createFileRoute } from '@tanstack/react-router';
import { Topics } from 'src/features/topics';

export const Route = createFileRoute('/topics/')({
    component: () => <TopicsPage />,
});

// TODO
// 1. Fetch all topics
// 2. Render and display topics

function TopicsPage() {
    return (
        <div>
            <Topics />
        </div>
    );
}
