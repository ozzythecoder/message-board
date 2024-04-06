import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
    UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO, signInSchema } from './dto/sign-in.dto';
import { ZodValidationPipe } from 'src/common/utils/ZodValidationPipe';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @UsePipes(new ZodValidationPipe(signInSchema))
    @Post('login')
    signIn(@Body() signInDTO: SignInDTO) {
        return this.authService.signIn(signInDTO.username, signInDTO.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() request: Record<string, string>) {
        return request.user;
    }
}
