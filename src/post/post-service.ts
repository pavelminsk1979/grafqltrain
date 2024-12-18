import { Injectable } from '@nestjs/common';
import { CreatePost } from './dto';
import { PostRepository } from './post-repository';

let variable = 1;

@Injectable()
export class PostService {
  constructor(protected postRepository: PostRepository) {}

  async addPost() {
    const newPost: CreatePost = {
      nameUser: `Pav${(variable += 1)}`,
      content: 'lkjdslkjfoiuwer 8t86jhfakj !!!!!!',
      createdDate: new Date().toISOString(),
    };

    return this.postRepository.addNewPost(newPost);
  }

  async getAllPosts() {
    return this.postRepository.getAllPosts();
  }
}
