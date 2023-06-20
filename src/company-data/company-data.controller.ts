import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from './company.model';

@Controller('company-data')
export class CompanyDataController {
  constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>) {}

  @Get()
  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  @Get('search')
  async findByCompanyName(@Query('company_name') companyName: string): Promise<Company[]> {
    const regex = new RegExp(companyName, 'i');
    return this.companyModel
      .find({ company_name: regex })
      .exec();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Company> {
    return this.companyModel.findById(id).exec();
  }

  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createdCompany = new this.companyModel(createCompanyDto);
    return createdCompany.save();
  }
}
