import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDTO from './DTOs/create-user.dto';
import UpdateUserDTO from './DTOs/update-user.dto';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Post()
  createUser(@Body() user: CreateUserDTO) {
    this.usersService.addUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    this.usersService.removeUser(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDTO) {
    this.usersService.updateUser(id, user);
  }
}
