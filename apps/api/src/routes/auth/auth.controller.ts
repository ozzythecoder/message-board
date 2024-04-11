import {
    Body,
    Controller,
    Get,
    InternalServerErrorException,
    Post,
    Res,
    Req,
    UseGuards,
    UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO, signInSchema } from './dto/sign-in.dto';
import { ZodValidationPipe } from 'src/common/utils/ZodValidationPipe';
import { AuthGuard } from './auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UsePipes(new ZodValidationPipe(signInSchema))
    @Post('login')
    async signIn(
        @Res({ passthrough: true }) response: Response,
        @Body() signInDTO: SignInDTO,
    ) {
        const res = await this.authService.signIn(
            signInDTO.username,
            signInDTO.password,
        );
        if (!res.access_token)
            throw new InternalServerErrorException(
                "Couldn't create access token",
            );
        response.cookie('_msg_jwt', res.access_token);
        return res;
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Req() request: Record<string, string>) {
        return request.user;
    }
}
