import {
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserModel } from './user.model';
import { UsersService } from '../user/user-service';
import { PostModel } from './post/post.model';
import { PostRepository } from '../post/post-repository';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(
    private userService: UsersService,
    private postRepository: PostRepository,
  ) {}

  @Query(() => [UserModel], { name: 'user', nullable: true })
  async getAllUsers(): Promise<UserModel[]> {
    const res = await this.userService.getAllUsers();
    return res;
  }

  @ResolveField(() => PostModel, { nullable: true })
  async postData(@Parent() user: UserModel) {
    const { name } = user;
    console.log('postData');
    console.log(name);

    return this.postRepository.findPostByName(name);
  }

  @Mutation(() => Boolean)
  async addUser(): Promise<boolean> {
    return this.userService.addUser();
  }
}
