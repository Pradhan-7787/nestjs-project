import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { Auth0Service} from './auth0.service';
import { AuthGuardVerify } from './auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: '7y7y7gf6t7gtctgu', // Replace with your desired JWT secret
            signOptions: { expiresIn: '1h' },
        })
    ],
    controllers: [AuthController],
    providers: [Auth0Service, AuthGuardVerify],
})
export class AuthModule { }