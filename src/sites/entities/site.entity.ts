import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType({ description: '站点主表' })
export class Site {
  @Field(() => String, { description: '站点id' })
  id: string;

  @Field(() => String, { description: '站点名称' })
  name: string;

  @Field(() => String, { description: '域名' })
  domain: string;

  @Field(() => String, { description: '父站点id' })
  pid: string;
}
