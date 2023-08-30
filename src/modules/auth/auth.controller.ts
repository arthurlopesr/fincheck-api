import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SinginDto } from './dto/singin.dto';
import { SignupDto } from './dto/singup.dto';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  singin(@Body() singinDto: SinginDto) {
    return this.authService.singin(singinDto);
  }

  @Post('signup')
  singup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
