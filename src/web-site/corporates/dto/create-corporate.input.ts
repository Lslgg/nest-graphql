import { Corporate } from '../entities/corporate.entity';
import { InputType, OmitType } from '@nestjs/graphql';

@InputType()
export class CreateCorporateInput extends OmitType(
  Corporate,
  ['id'],
  InputType
) {
  //
}
