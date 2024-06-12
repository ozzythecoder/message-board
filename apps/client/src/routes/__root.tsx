import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import config from 'src/config';
import styles from './root.module.scss';

export const Route = createRootRoute({
    component: () => (
        <div id={styles['container']}>
            <h1 className={styles.heading}>Message Board</h1>
            <div className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/topics">Topics</Link>
                <Link to="/colors">Colors</Link>
            </div>
            <main>
                <Outlet />
            </main>
            {config.DEV ? (
                <>
                    <TanStackRouterDevtools />
                    <ReactQueryDevtools />
                </>
            ) : null}
        </div>
    ),
});
