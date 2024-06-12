import { ApiThreadResponse } from 'src/types';
import style from './threadContent.module.scss';
import { formatDate } from 'src/lib/utils';

export function ThreadContent({ data }: { data: ApiThreadResponse }) {
    const formattedDate = formatDate(data.thread.createdAt);

    return (
        <div className={style.thread_content}>
            <h2>{data.thread.title}</h2>
            <div className={style.post_content}>
                <div className={style.user_info}>
                    <p>{data.user.username}</p>
                    <p className={style.date_posted}>{formattedDate}</p>
                </div>
                <div className={style.post_body}>
                    <p>{data.thread.body}</p>
                </div>
            </div>
        </div>
    );
}
