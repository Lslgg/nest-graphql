import { Contact } from './../entities/contact.entity';
import { InputType, OmitType } from '@nestjs/graphql';

@InputType()
export class CreateContactInput extends OmitType(Contact, ['id'], InputType) {
  //
}
