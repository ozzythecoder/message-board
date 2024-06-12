import { formatDate } from 'src/lib/utils';
import style from './userSidebar.module.scss';

interface UserSidebarProps {
    username: string;
    datePosted: string;
    children?: React.ReactNode;
}

export function UserSidebar(props: UserSidebarProps) {
    return (
        <>
            <p className={style.user_info}>{props.username}</p>
            {props.children && <p>{props.children}</p>}
            <p className={style.date_posted}>{formatDate(props.datePosted)}</p>
        </>
    );
}
