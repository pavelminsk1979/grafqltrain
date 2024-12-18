import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'post' })
export class PostModel {
  @Field()
  id: string;

  @Field()
  content: string;

  @Field()
  nameUser: string;

  @Field()
  createdDate: string;
}
