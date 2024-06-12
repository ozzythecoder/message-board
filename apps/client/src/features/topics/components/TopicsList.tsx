import { Loading } from 'src/components/ui';
import { useTopics } from '../api';
import { TopicPreview } from './TopicPreview';

export function TopicsList() {
    const { data: topics, isError, isPending } = useTopics();

    if (isPending) return <Loading />;
    if (isError) return <h1>Error</h1>;

    return (
        <div>
            <ul className="flex-col gap-2">
                {topics.map((t) => (
                    <TopicPreview key={t.id} topic={t} />
                ))}
            </ul>
        </div>
    );
}
