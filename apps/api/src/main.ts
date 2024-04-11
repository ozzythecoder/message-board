import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

const appConfig = [cookieParser()];

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(appConfig);
    app.enableCors({
        origin: [process.env.CLIENT_URL!, 'http://localhost:3000'],
        credentials: true,
    });
    await app.listen(3000);
}
bootstrap();
