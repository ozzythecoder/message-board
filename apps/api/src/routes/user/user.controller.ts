import {
    Body,
    Controller,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
    UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, createUserSchema } from './dto/create-user.dto';
import { ZodValidationPipe } from 'src/common/utils/ZodValidationPipe';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get(':id')
    find(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.find(id);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Post()
    @UsePipes(new ZodValidationPipe(createUserSchema))
    create(@Body() createUserDTO: CreateUserDTO) {
        return this.userService.create(createUserDTO);
    }
}
