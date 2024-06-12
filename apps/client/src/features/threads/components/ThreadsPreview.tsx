import { Link } from '@tanstack/react-router';
import { ApiThreadResponse } from 'src/types';

export function ThreadPreview({ data }: { data: ApiThreadResponse }) {
    return (
        <Link to="/threads/$threadID" params={{ threadID: data.thread.id }}>
            <li key={data.thread.id}>
                <h3>{data.thread.title}</h3>
                <p>{data.thread.body.slice(0, 100)}...</p>
            </li>
        </Link>
    );
}
