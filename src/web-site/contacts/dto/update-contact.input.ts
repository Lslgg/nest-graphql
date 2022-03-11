import { Contact } from './../entities/contact.entity';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContactInput extends PartialType(Contact) {
  @Field(() => String)
  id: string;
}
