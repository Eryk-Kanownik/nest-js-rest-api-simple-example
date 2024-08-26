import { Injectable } from '@nestjs/common';
import User from './interfaces/user.interface';
import { v4 } from 'uuid';
import CreateUserDTO from './DTOs/create-user.dto';
import UpdateUserDTO from './DTOs/update-user.dto';
import LoginUserDTO from './DTOs/login-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: v4(),
      username: 'User123',
      password: '12345678',
    },
    { id: v4(), username: 'user1234', password: '12345678' },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: string): User {
    let index = this.users.map((u) => u.id).indexOf(id);
    let user = this.users[index];
    return user;
  }

  addUser(user: CreateUserDTO) {
    let data = { id: v4(), ...user };
    this.users.push(data);
  }

  removeUser(id: string) {
    let filtered = this.users.filter((user) => user.id !== id);
    this.users = filtered;
  }

  updateUser(id: string, user: UpdateUserDTO) {
    let index = this.users.map((u) => u.id).indexOf(id);
    this.users[index] = { ...this.users[index], ...user };
  }
}
