import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CorporatesService } from './corporates.service';
import { Corporate } from './entities/corporate.entity';
import { CreateCorporateInput } from './dto/create-corporate.input';
import { UpdateCorporateInput } from './dto/update-corporate.input';

@Resolver(() => Corporate)
export class CorporatesResolver {
  constructor(private readonly corporatesService: CorporatesService) {
    //
  }

  @Mutation(() => Corporate)
  createCorporate(
    @Args('createCorporateInput') createCorporateInput: CreateCorporateInput
  ) {
    return this.corporatesService.create(createCorporateInput);
  }

  @Query(() => [Corporate], { name: 'corporates' })
  findAll(siteId: string) {
    return this.corporatesService.findAll(siteId);
  }

  @Query(() => Corporate, { name: 'corporate' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.corporatesService.findOne(id);
  }

  @Mutation(() => Corporate)
  updateCorporate(
    @Args('updateCorporateInput') updateCorporateInput: UpdateCorporateInput
  ) {
    return this.corporatesService.update(updateCorporateInput);
  }

  @Mutation(() => Corporate)
  removeCorporate(@Args('id', { type: () => Int }) id: string) {
    return this.corporatesService.remove(id);
  }
}
