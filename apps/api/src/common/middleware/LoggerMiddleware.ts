import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: any, _res: any, next: (error?: any) => void) {
        console.log('Request...\n');
        next();
    }
}
