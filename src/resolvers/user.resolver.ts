//import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './user.model';

/*@Resolver(()=>UserModel)
export class UserResolver {
  constructor(private userService:UserService) {
  }

  @Query(()=>UserModel,{name;'user',nullable:true})
  async getUser(@Args ('id') id:string):Promise<UserModel>{
    return this.userService.getUserById(id)
  }

  @Query(()=>[UserModel],{name;'user',nullable:true})
  async getAllUsers():Promise<UserModel>{
    return this.userService.getAllUsers()
  }


  @Mutation (()=>Boolean)
  async addUser(@Args() args:AddUserAvatarArgs):Promise<boolean>{
    return this.userService.addUser(args)
  }
}*/

@Resolver(() => UserModel)
export class UserResolver {
  constructor() {}

  @Query(() => UserModel)
  async getUser() {
    return { name: 'Pavel' };
  }
}
