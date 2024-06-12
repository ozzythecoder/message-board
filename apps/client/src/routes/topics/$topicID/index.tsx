import { createFileRoute } from '@tanstack/react-router';
import { Loading } from 'src/components/ui';
import { useOneTopic } from 'src/features/topics';
import { TopicContent } from 'src/features/topics/components/TopicContent';

export const Route = createFileRoute('/topics/$topicID/')({
    component: () => <Topic />,
});

function Topic() {
    const { topicID } = Route.useParams();
    const { data: topic, isError, isPending } = useOneTopic(topicID);

    if (isPending) return <Loading />;
    if (isError) return <h1>Error</h1>;

    return (
        <div>
            <h1>{topic.title}</h1>
            <p>{topic.description}</p>
            <TopicContent topic={topic} />
        </div>
    );
}
