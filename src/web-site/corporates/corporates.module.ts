import { Module } from '@nestjs/common';
import { CorporatesService } from './corporates.service';
import { CorporatesResolver } from './corporates.resolver';

@Module({
  providers: [CorporatesResolver, CorporatesService],
  // exports: [CorporatesResolver, CorporatesService],
})
export class CorporatesModule {
  //
}
