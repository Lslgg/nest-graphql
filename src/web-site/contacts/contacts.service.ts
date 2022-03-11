import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';
import { CreateContactInput } from './dto/create-contact.input';
import { UpdateContactInput } from './dto/update-contact.input';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {
    //
  }

  create(createContactInput: CreateContactInput) {
    return this.prisma.contact.create({
      data: {
        ...createContactInput,
      },
    });
  }

  findAll() {
    return `This action returns all contacts`;
  }

  findOne(id: string) {
    return `This action returns a #${id} contact`;
  }

  update(updateContactInput: UpdateContactInput) {
    console.log(updateContactInput);
    return `This action updates a # contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
