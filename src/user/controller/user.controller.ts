import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('/api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create/user')
  @HttpCode(HttpStatus.OK)
  async crerate(@Body() userDto: CreateUserDto) {
    await this.userService.createUser(userDto);
  }
}
