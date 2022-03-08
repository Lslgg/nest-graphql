import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Contact {
  @Field(() => String, { description: 'ID' })
  id: string;
  @Field(() => String, { description: '联系方式' })
  type: string;
  @Field(() => String, { description: '详情内容' })
  content: string;
}
