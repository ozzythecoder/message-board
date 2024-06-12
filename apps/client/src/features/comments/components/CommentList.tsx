import { CommentContent } from './CommentContent';
import { useCommentsByThread } from '../api';
import { Loading } from 'src/components/ui';

type CommentListProps = {
    threadID: string;
};

export function CommentList({ threadID }: CommentListProps) {
    const { data, isError, isPending } = useCommentsByThread(threadID);

    if (isError) {
        return <h1>Error</h1>;
    }
    if (isPending) return <Loading />;

    if (data.length === 0) {
        return <p>No comments yet. Start the conversation!</p>;
    }

    return (
        <div>
            <ul>
                {data.map((c) => (
                    <li key={c.comment.id}>
                        <CommentContent data={c} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
