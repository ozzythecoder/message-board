import { Loading } from 'src/components/ui';
import { useThreadsByTopic } from '../api';
import { ThreadPreview } from './ThreadsPreview';

export function ThreadsList({ topicID }: { topicID: string }) {
    const { data, error, isError, isPending } = useThreadsByTopic(topicID);

    if (isError) return <pre>{JSON.stringify(error)}</pre>;
    if (isPending) return <Loading />;

    return (
        <div>
            <ul className="flex-col gap-2">
                {data.map((t) => (
                    <ThreadPreview key={t.thread.id} data={t} />
                ))}
            </ul>
        </div>
    );
}
