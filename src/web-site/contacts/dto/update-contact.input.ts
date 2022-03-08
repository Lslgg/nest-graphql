import { Contact } from './../entities/contact.entity';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContactInput extends PartialType(Contact) {
  //
}
