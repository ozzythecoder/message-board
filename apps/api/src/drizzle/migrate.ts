import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema';

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client, { schema });

const migration = async () => {
    await migrate(db, { migrationsFolder: './src/drizzle/migrations/' });
    await client.end();
    process.exit(0);
};

migration();
