import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesResolver } from './sites.resolver';

@Module({
  providers: [SitesResolver, SitesService],
})
export class SitesModule {
  //
}
