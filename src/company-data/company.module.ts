import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyDataController } from './company-data.controller';
import { Company, CompanySchema } from './company.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
  ],
  controllers: [CompanyDataController],
})
export class CompaniesModule {}
