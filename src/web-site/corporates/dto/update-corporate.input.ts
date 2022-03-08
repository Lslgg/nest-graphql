import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateCorporateInput } from './create-corporate.input';

@InputType()
export class UpdateCorporateInput extends PartialType(CreateCorporateInput) {
  @Field(() => String, { description: 'ID' })
  id: string;
}
