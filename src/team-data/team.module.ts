import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamDataController } from './team-data.controller';
import { Team, TeamSchema } from './team.model';
import { Company, CompanySchema } from '../company-data/company.model';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/auth0-service/auth.controller';
import { Auth0Service } from 'src/auth0-service/auth0.service';
import { AuthGuardVerify } from 'src/auth0-service/auth.guard';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: '7y7y7gf6t7gtctgu', // Replace with your desired JWT secret
  })
  ],
  controllers: [TeamDataController, AuthController],
  providers: [Auth0Service, AuthGuardVerify],
})
export class TeamsModule {}
