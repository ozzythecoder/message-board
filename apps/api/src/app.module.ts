import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env.api',
            isGlobal: true,
            load: [configuration],
        }),
    ],
})
export class AppModule {}
