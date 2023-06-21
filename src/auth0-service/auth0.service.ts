import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class Auth0Service {
  private readonly clientId: string = 'vYVnvo8hRdeVoVYACaHUEO59u17SdXDR';
  private readonly clientSecret: string = '3fcD9fbKzdygrQdtBcx_9NP0iFYipT4Nm6MZbPd5H_KVemuufO6uqDHHfgrvq7-k';
  private readonly auth0TokenUrl: string = 'https://pradhan.uk.auth0.com/oauth/token';
  private readonly audience: string = 'https://pradhan.uk.auth0.com/api/v2/';

  private readonly clientId2: string = '1wz2q6BtpM7pNRTmi3dKSEF8gHWsT8Sq';
  private readonly clientSecret2: string = '6DvMKxx73AJzEpE9okW9GLUsS1iyhQhikHN-2Z4bjDEw5bMIEy1N3Ei6j9qMIBD9';

  async getAccessToken(): Promise<string> {
    const response = await axios.post(this.auth0TokenUrl, {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      audience: this.audience,
      grant_type: 'client_credentials',
    });

    return response.data.access_token;
  }

  async getReadonlyAccessToken(): Promise<string> {
    const response = await axios.post(this.auth0TokenUrl, {
      client_id: this.clientId2,
      client_secret: this.clientSecret2,
      audience: this.audience,
      grant_type: 'client_credentials',
    });

    return response.data.access_token;
  }
}