import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateSiteInput } from './dto/create-site.input';
import { UpdateSiteInput } from './dto/update-site.input';

@Injectable()
export class SitesService {
  constructor(private prisma: PrismaService) {
    //
  }

  create(createSiteInput: CreateSiteInput) {
    return this.prisma.site.create({
      data: {
        ...createSiteInput,
      },
    });
  }

  findAll() {
    return this.prisma.site.findMany();
  }

  findOne(id: string) {
    return this.prisma.site.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(updateSiteInput: UpdateSiteInput) {
    return this.prisma.site.update({
      where: {
        id: updateSiteInput.id,
      },
      data: {
        ...updateSiteInput,
      },
    });
  }

  remove(id: string) {
    return this.prisma.site.delete({
      where: {
        id: id,
      },
    });
  }
}
