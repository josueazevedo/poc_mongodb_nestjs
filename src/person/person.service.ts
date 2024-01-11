import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Person } from './schemas/person.schema';
import { Model } from 'mongoose';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name) private readonly personModel: Model<Person>,
  ) {}

  async create(createPersonDto: CreatePersonDto) {
    const newPerson = await this.personModel.create(createPersonDto);

    return {
      id: newPerson._id.toString(),
      name: newPerson.name,
      age: newPerson.age,
      email: newPerson.email,
      phone: newPerson.phone,
    };
  }

  async findAll() {
    const list = await this.personModel.find().lean();

    return list.map((person) => ({
      id: person._id.toString(),
      name: person.name,
      age: person.age,
      email: person.email,
      phone: person.phone,
    }));
  }

  async findOne(id: string) {
    const person = await this.personModel.findById(id);

    if (!person) {
      throw new BadRequestException('Person not found');
    }

    return {
      id: person._id.toString(),
      name: person.name,
      age: person.age,
      email: person.email,
      phone: person.phone,
    };
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    const person = await this.personModel.findByIdAndUpdate(
      id,
      updatePersonDto,
      { new: true },
    );

    if (!person) {
      throw new BadRequestException('Person not found');
    }

    return {
      id: person._id.toString(),
      name: person.name,
      age: person.age,
      email: person.email,
      phone: person.phone,
    };
  }

  async remove(id: string) {
    const person = await this.personModel.findByIdAndDelete(id);

    if (!person) {
      throw new BadRequestException('Person not found');
    }

    await person.deleteOne();

    return {
      message: 'successfully removed',
    };
  }
}
