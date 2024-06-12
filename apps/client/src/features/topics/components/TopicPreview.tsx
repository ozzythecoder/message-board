import { Link } from '@tanstack/react-router';
import { Card } from 'src/components/ui';
import { Topic } from 'src/types';

export function TopicPreview({ topic }: { topic: Topic }) {
    return (
        <Link to="/topics/$topicID" params={{ topicID: topic.id }}>
            <Card border="thin">
                <li>
                    <h1>{topic.title}</h1>
                    <p>{topic.description}</p>
                </li>
            </Card>
        </Link>
    );
}
