import { Injectable } from '@nestjs/common';
import users from 'data/testdata.json';

@Injectable()
export class AppService {

  getUsers(): any {
    return users;
  }
}
