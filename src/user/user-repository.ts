import { Injectable } from '@nestjs/common';
import { CreateUser } from './dto';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usertypRepository: Repository<UserEntity>,
  ) {}

  async addNewUser(newUser: CreateUser) {
    const user = new UserEntity();
    user.name = newUser.name;
    user.lastname = newUser.lastname;
    user.age = newUser.age;
    user.email = newUser.email;
    user.createdDate = newUser.createdDate;

    const result = await this.usertypRepository.save(user);

    if (result) return true;
    return false;
  }

  async getAllUsers() {
    const res = await this.usertypRepository.find();

    return res;
  }
}
