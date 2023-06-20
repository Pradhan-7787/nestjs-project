import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop({ required: true })
  company_name: string;

  @Prop({ required: true })
  company_ceo: string;

  @Prop({ required: true })
  company_address: string;

  @Prop({ required: true })
  inception_date: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);