import { CreateSiteInput } from './create-site.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSiteInput extends PartialType(CreateSiteInput) {
  @Field(() => String)
  id: string;
}
