import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostModel } from './post.model';
import { PostService } from '../../post/post-service';

@Resolver(() => PostModel)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => [PostModel], { name: 'post', nullable: true })
  async getAllPosts(): Promise<PostModel[]> {
    const res = await this.postService.getAllPosts();
    return res;
  }

  @Mutation(() => Boolean)
  async addPost(): Promise<boolean> {
    return this.postService.addPost();
  }
}
