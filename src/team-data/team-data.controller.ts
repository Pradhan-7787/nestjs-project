import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team, TeamDocument } from './team.model';
import { Company, CompanyDocument } from '../company-data/company.model';
import { AuthGuardVerify } from 'src/auth0-service/auth.guard';

@Controller('team-data')
export class TeamDataController {
  constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>,
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>
  ) { }

  @Get()
  @UseGuards(AuthGuardVerify)
  async findAll(): Promise<any> {
    const companies = await this.companyModel.find().exec();
    const teams = await this.teamModel.find().exec();
    const teamsByCompany = companies.map(company => {
      const companyTeams = teams.filter(team => team.company_id === company.id);
      return {
        company: company,
        teams: companyTeams,
      };
    });
    return teamsByCompany;
  }

  @Post('/:companyId') // Add the companyId as a path parameter
  @UseGuards(AuthGuardVerify)
  async createTeam(
    @Body() team: Team,
    @Param('companyId') companyId: string,
  ) {
    team.company_id = companyId;
    const createdTeam = new this.teamModel(team);
    return createdTeam.save();
  }
}
