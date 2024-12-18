import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePost } from './dto';
import { PostEntity } from './post.entity';

@Injectable()
export class PostRepository {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async addNewPost(newPost: CreatePost) {
    const post = new PostEntity();
    post.content = newPost.content;
    post.nameUser = newPost.nameUser;
    post.createdDate = newPost.createdDate;

    const result = await this.postRepository.save(post);

    if (result) return true;
    return false;
  }

  async getAllPosts() {
    const res = await this.postRepository.find();

    return res;
  }

  async findPostByName(name: string) {
    const res = await this.postRepository.find({
      where: {
        nameUser: name, // Поиск по полю nameUser
      },
    });

    return res[0];
  }
}
