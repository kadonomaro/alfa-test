import { Injectable } from '@nestjs/common';
import users from 'data/testdata.json';

@Injectable()
export class AppService {
  getHomePage(): string {
    return 'Hello World!';
  }

  getUsers(): any {
    return users;
  }
}
