import { ApiThreadResponse } from 'src/types';
import style from './threadContent.module.scss';
import { UserSidebar } from 'src/features/users';
import { Card } from 'src/components/ui';

export function ThreadContent({ data }: { data: ApiThreadResponse }) {
    return (
        <Card
            sidebar={() => (
                <UserSidebar
                    username={data.user.username}
                    datePosted={data.thread.createdAt}
                />
            )}
            title={data.thread.title}
            border="thin"
            className={style.thread_content}
        >
            <div>
                <p>{data.thread.body}</p>
            </div>
        </Card>
    );
}
