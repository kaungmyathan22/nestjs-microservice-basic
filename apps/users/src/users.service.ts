import { Injectable } from '@nestjs/common';
import { } from '@nestjs/core';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];
  constructor() { }

  create (createUserInput: CreateUserInput) {
    this.users.push(createUserInput);
    return createUserInput;
  }

  findAll () {
    return this.users;
  }

  findOne (id: string) {
    return this.users.find(user => user.id === id);
  }
}
