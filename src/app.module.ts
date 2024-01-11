import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PersonModule,
    MongooseModule.forRoot('mongodb://localhost:27017/poc'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
