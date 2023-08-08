import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	@Post('register')
	async register(@Body() dto: AuthDto): Promise<void> {
		return null;
	}

	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto): Promise<void> {
		return null;
	}
}
