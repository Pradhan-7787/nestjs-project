import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyDataController } from './company-data.controller';
import { Company, CompanySchema } from './company.model';
import {  AuthGuardVerify } from 'src/auth0-service/auth.guard';
import { Auth0Service } from 'src/auth0-service/auth0.service';
import { AuthController } from 'src/auth0-service/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: '7y7y7gf6t7gtctgu', // Replace with your desired JWT secret
  })
  ],
  controllers: [CompanyDataController, AuthController],
  providers: [Auth0Service, AuthGuardVerify],
})
export class CompaniesModule {}
