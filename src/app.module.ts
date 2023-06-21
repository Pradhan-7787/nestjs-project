import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { CompaniesModule } from './company-data/company.module';
import { TeamsModule } from './team-data/team.module';
import { AuthModule } from './auth0-service/auth.module';
config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI),
    CompaniesModule, TeamsModule, AuthModule
  ],
})
export class AppModule { }
