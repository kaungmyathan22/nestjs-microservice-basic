import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [];
  create (createPostInput: CreatePostInput) {
    this.posts.push(createPostInput);
    return createPostInput;
  }

  findAll (user: User) {
    return this.posts.filter(post => post.authorId === user.id);
  }

  findOne (id: string) {
    return this.posts.find(post => post.id === id);
  }

  forAuthor (authorId: string) {
    return this.posts.filter(post => post.authorId === authorId);
  }

}
