import { SitesModule } from './sites/sites.module';
import { Module } from '@nestjs/common';
import { CorporatesModule } from './corporates/corporates.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [CorporatesModule, SitesModule, ContactsModule],
})
export class WebSiteModule {
  //
}
