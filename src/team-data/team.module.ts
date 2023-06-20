import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamDataController } from './team-data.controller';
import { Team, TeamSchema } from './team.model';
import { Company, CompanySchema } from '../company-data/company.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
  ],
  controllers: [TeamDataController],
})
export class TeamsModule {}
