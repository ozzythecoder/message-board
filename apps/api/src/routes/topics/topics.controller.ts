import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
    Req,
    UsePipes,
} from '@nestjs/common';
import { TopicsService } from './topics.service';
import { ZodValidationPipe } from 'src/common/utils/ZodValidationPipe';
import { CreateTopicDTO, createTopicSchema } from './dto/create-topic.dto';

@Controller('topics')
export class TopicsController {
    constructor(private topicsService: TopicsService) {}

    @Get()
    findAll() {
        return this.topicsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.topicsService.find(id);
    }

    @Post()
    @UsePipes(new ZodValidationPipe(createTopicSchema))
    create(@Req() request: Request, @Body() createTopicDTO: CreateTopicDTO) {
        return this.topicsService.create(createTopicDTO);
    }
}
