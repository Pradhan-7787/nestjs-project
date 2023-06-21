import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Auth0Service } from './auth0.service';

@Injectable()
export class AuthGuardVerify implements CanActivate {
  constructor(private readonly jwtService: JwtService) { }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization // Extract the token from the Authorization header

    if (!token) {
      throw new UnauthorizedException(); // Token not provided, throw an UnauthorizedException
    }

    try {
      const decodedToken = this.jwtService.decode(token);
      request.user = decodedToken; // Attach the decoded token payload to the request object
      return true;
    } catch {
      return false; // Token is invalid or expired, return false to deny access
    }
  }
}