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
import { ThreadsService } from './threads.service';
import { ZodValidationPipe } from 'src/common/utils/ZodValidationPipe';
import { CreateThreadDTO, createThreadSchema } from './dto/create-thread.dto';

@Controller('threads')
export class ThreadsController {
    constructor(private threadsService: ThreadsService) {}

    @Get()
    findAll() {
        return this.threadsService.findAll();
    }

    @Get(':id')
    find(@Param('id', ParseUUIDPipe) id: string) {
        return this.threadsService.find(id);
    }

    @Post('create')
    @UsePipes(new ZodValidationPipe(createThreadSchema))
    create(@Req() request: Request, @Body() createThreadDTO: CreateThreadDTO) {
        return this.threadsService.create({
            ...createThreadDTO,
            // authorID: request
        });
    }
}
