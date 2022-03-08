import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Corporate {
  @Field(() => String, { description: 'ID' })
  id: string;

  @Field(() => String, { description: '站点id' })
  siteId: string;

  @Field(() => String, { description: '公司中文名称' })
  nameCH: string;

  @Field(() => String, { description: '公司英文全称' })
  nameEN: string;

  @Field(() => String, { description: '英文简称' })
  abbr: string;

  @Field(() => String, { description: '品牌名称' })
  brandName: string;
}
