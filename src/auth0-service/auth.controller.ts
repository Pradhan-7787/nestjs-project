import { Controller, Get, UseGuards } from '@nestjs/common';
import { Auth0Service } from './auth0.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth0Service: Auth0Service) {}

  @Get('token')
  async getToken(): Promise<string> {
    return this.auth0Service.getAccessToken();
  }

  @Get('read-only-token')
  async getReadOnlyToken(): Promise<string> {
    return this.auth0Service.getReadonlyAccessToken();
  }
}