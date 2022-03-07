import { InputType, OmitType } from '@nestjs/graphql';
import { Site } from '../entities/site.entity';

@InputType()
export class CreateSiteInput extends OmitType(Site, ['id'], InputType) {
  //
}
