import { Injectable } from '@nestjs/common';
import { CreateUser } from './dto';
import { UserRepository } from './user-repository';

let variable = 1;

@Injectable()
export class UsersService {
  constructor(protected userRepository: UserRepository) {}

  async addUser() {
    console.log(variable);
    const newUser: CreateUser = {
      name: `Pav${(variable += 1)}`,
      lastname: 'Murater',
      age: 55 + variable,
      email: 'neruo@mail.ru',
      createdDate: new Date().toISOString(),
    };

    return this.userRepository.addNewUser(newUser);
  }

  async getAllUsers() {
    return this.userRepository.getAllUsers();
  }
}
