import { Injectable } from '@nestjs/common';
import users from 'data/testdata.json';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): any {
    return users;
  }
}
