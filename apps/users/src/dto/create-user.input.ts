import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => ID,)
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
