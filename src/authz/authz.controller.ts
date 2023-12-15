import {
  Controller,
  Post,
  Headers,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwksClient } from 'jwks-rsa';

@Controller('login')
export class AuthzController {
  private readonly jwksClient = new JwksClient({
    jwksUri: `${process.env.AUTH0_ISSUER_URL}.well-known/jwks.json`,
  });

  private async getPublicKey(kid: string): Promise<string | null> {
    try {
      const keySet = await this.jwksClient.getSigningKeys();
      const selectedKey = keySet.find((key) => key.kid === kid);

      if (!selectedKey) {
        console.error('Clave no encontrada para el "kid" proporcionado.');
        return null;
      }

      return selectedKey.getPublicKey();
    } catch (error) {
      console.error('Error obteniendo la clave pública:', error);
      return null;
    }
  }

  @Post()
  async login(@Headers() headers: any) {
    const [, token] = headers.authorization.split(' ');
    const decodedToken: any = jwt.decode(token, { complete: true });

    if (!decodedToken || !decodedToken.header || !decodedToken.header.kid) {
      console.error('No se pudo obtener el "kid" del token.');
      throw new HttpException('Token no válido', HttpStatus.UNAUTHORIZED);
    }

    const kid = decodedToken.header.kid;
    const algorithm = decodedToken.header.alg;
    const publicKey = await this.getPublicKey(kid);

    if (!publicKey) {
      console.error('No se pudo obtener la clave pública.');
      throw new HttpException('Token no válido', HttpStatus.UNAUTHORIZED);
    }

    try {
      const payload: any = jwt.verify(token, publicKey, {
        algorithms: [algorithm],
      });
      console.log('payload: ', payload);
      const newPayload = {
        email: payload.custom_email_claim,
        nombre: 'Fulanito',
      };
      const claveSecreta = 'miClaveSecreta123';
      const newToken = jwt.sign(newPayload, claveSecreta, { expiresIn: '1h' });

      console.log('Token JWT:', newToken);
      return { message: 'Autenticación exitosa', token: token };
    } catch (error) {
      console.error('Error verificando el token:', error);
      throw new HttpException('Token no válido', HttpStatus.UNAUTHORIZED);
    }
  }
}
