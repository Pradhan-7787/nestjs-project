import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeamDocument = Team & Document;

@Schema()
export class Team {
  @Prop({ required: true })
  company_id: string;

  @Prop({ required: true })
  team_lead_name: string;
}

export const TeamSchema = SchemaFactory.createForClass(Team);