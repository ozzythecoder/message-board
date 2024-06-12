import { Module } from '@nestjs/common';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';

@Module({
    providers: [TopicsService],
    controllers: [TopicsController],
})
export class TopicsModule {}
