import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './routes/user/user.module';
import configuration from './config/configuration';
import * as schema from './drizzle/schema';
import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';
import { ThreadsModule } from './routes/threads/threads.module';
import { LoggerMiddleware } from './common/middleware/LoggerMiddleware';
import { AuthModule } from './routes/auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env.api',
            isGlobal: true,
            cache: true,
            load: [configuration],
        }),
        UserModule,
        DrizzlePostgresModule.registerAsync({
            tag: 'DB',
            useFactory: async () => ({
                postgres: {
                    url: process.env.DATABASE_URL!,
                },
                config: { schema },
            }),
        }),
        ThreadsModule,
        AuthModule,
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
