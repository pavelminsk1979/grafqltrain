import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { UsersService } from '../user/user-service';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private userService: UsersService) {}

  @Query(() => [UserModel], { name: 'user', nullable: true })
  async getAllUsers(): Promise<UserModel[]> {
    const res = await this.userService.getAllUsers();
    return res;
  }

  @Mutation(() => Boolean)
  async addUser(): Promise<boolean> {
    return this.userService.addUser();
  }
}

/*@Resolver(()=>UserModel)
export class UserResolver {
  constructor(private userService:UserService) {
  }

    @Query(()=>UserModel,{name;'user',nullable:true})
  async getUser(@Args ('id') id:string):Promise<UserModel>{
    return this.userService.getUserById(id)
  }

  @Query(() => UserModel)
  async getUser() {
    return { name: 'Pavel' };
  }


  @Mutation (()=>Boolean)
  async addUser(@Args() args:AddUserAvatarArgs):Promise<boolean>{
    return this.userService.addUser(args)
  }
}*/
