import { ThreadsList } from 'src/features/threads/components/ThreadsList';
import type { Topic } from 'src/types';

export function TopicContent({ topic }: { topic: Topic }) {
    return (
        <div>
            <ThreadsList topicID={topic.id} />
        </div>
    );
}
