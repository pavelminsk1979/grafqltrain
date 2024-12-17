import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType({ description: 'users' })
export class UserModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  lastname: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => Int)
  age: number;

  @Field()
  createdDate: string;
}
