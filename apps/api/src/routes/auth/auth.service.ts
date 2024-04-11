import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async signIn(
        username: string,
        pass: string,
    ): Promise<{ access_token: string }> {
        const user = await this.userService.findByName(username);
        const passwordsMatch = await compare(pass, user.password);
        if (!passwordsMatch) throw new UnauthorizedException();

        const payload = { sub: user.id, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
