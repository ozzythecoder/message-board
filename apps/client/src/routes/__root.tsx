import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import styles from './root.module.scss';

export const Route = createRootRoute({
    component: () => (
        <div id={styles['container']}>
            <h1 className={styles.heading}>Message Board</h1>
            <div className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <main>
                <Outlet />
            </main>
            <TanStackRouterDevtools />
        </div>
    ),
});
