import { Link } from '@tanstack/react-router';
import { Card } from 'src/components/ui';
import { ApiThreadResponse } from 'src/types';
import { formatDate } from 'src/lib/utils';
import { UserSidebar } from 'src/features/users';

export function ThreadPreview({ data }: { data: ApiThreadResponse }) {
    return (
        <Link to="/threads/$threadID" params={{ threadID: data.thread.id }}>
            <Card
                border="thin"
                renderSidebarContent={() => (
                    <UserSidebar
                        username={data.user.username}
                        datePosted={formatDate(data.thread.createdAt)}
                    />
                )}
            >
                <li key={data.thread.id}>
                    <h3>{data.thread.title}</h3>
                    <p className="no_weight text">
                        {data.thread.body.slice(0, 100)}...
                    </p>
                </li>
            </Card>
        </Link>
    );
}
