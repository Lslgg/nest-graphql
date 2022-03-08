import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateCorporateInput } from './dto/create-corporate.input';
import { UpdateCorporateInput } from './dto/update-corporate.input';

@Injectable()
export class CorporatesService {
  constructor(private prisma: PrismaService) {
    //
  }
  create(createCorporateInput: CreateCorporateInput) {
    return this.prisma.corporate.create({
      data: {
        siteId: createCorporateInput.siteId,
        nameEN: createCorporateInput.nameEN,
        nameZH: createCorporateInput.nameEN,
        abbr: createCorporateInput.abbr,
        brandName: createCorporateInput.brandName,
      },
    });
  }

  findAll(siteId: string) {
    return this.prisma.corporate.findMany({
      where: {
        siteId: siteId,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.corporate.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(updateCorporateInput: UpdateCorporateInput) {
    return this.prisma.site.update({
      where: {
        id: updateCorporateInput.id,
      },
      data: {
        ...updateCorporateInput,
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
