import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
    Query,
    Req,
    UsePipes,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { ZodValidationPipe } from 'src/common/utils/ZodValidationPipe';
import {
    CreateCommentDTO,
    createCommentSchema,
} from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
    constructor(private commentsService: CommentsService) {}

    @Get('byThread')
    findByThread(@Query('threadID', ParseUUIDPipe) threadID: string) {
        return this.commentsService.findByThread(threadID);
    }

    @Get(':id')
    find(@Param('id', ParseUUIDPipe) id: string) {
        return this.commentsService.find(id);
    }

    @Post('create')
    @UsePipes(new ZodValidationPipe(createCommentSchema))
    create(
        @Req() request: Request,
        @Body() createCommentDTO: CreateCommentDTO,
    ) {
        return this.commentsService.create(createCommentDTO);
    }
}
