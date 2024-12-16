import { Args, Query, Resolver } from "@nestjs/graphql";

@Resolver(()=>UserModel)
export class UserResolver {
  constructor(private userService:UserService) {
  }

  @Query(()=>UserModel,{name;'user',nullable:true})
  async getUser(@Args ('id') id:string){
    return this.userService.getUserById(id)
  }
}