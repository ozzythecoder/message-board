import { formatDate } from 'src/lib/utils';
import { ApiCommentResponse } from 'src/types';
import style from './commentContent.module.scss';
import { Card } from 'src/components/ui';

export function CommentContent({ data }: { data: ApiCommentResponse }) {
    const createdAt = formatDate(data.comment.createdAt);

    return (
        <Card
            sidebar={true}
            renderSidebarContent={() => (
                <div className={style.user_info}>
                    <p>{data.user.username}</p>
                    <p className={style.date_posted}>{createdAt}</p>
                </div>
            )}
            className={style.post_content}
        >
            <div className={style.post_body}>
                <p>{data.comment.body}</p>
            </div>
        </Card>
    );
}
