import { createFileRoute } from '@tanstack/react-router';
import { Loading } from 'src/components/ui';
import { CommentList } from 'src/features/comments';
import { CreateComment } from 'src/features/comments/components/CreateComment';
import { useOneThread, ThreadContent } from 'src/features/threads';

export const Route = createFileRoute('/threads/$threadID/')({
    component: () => <Thread />,
});

function Thread() {
    const { threadID } = Route.useParams();
    const { data, isPending, isError } = useOneThread(threadID);

    if (isPending) return <Loading />;
    if (isError) return <h1>Error</h1>;
    if (!data) return <h1>Not Found</h1>;

    return (
        <div>
            <ThreadContent data={data} />
            <CreateComment />
            <CommentList threadID={threadID} />
        </div>
    );
}
