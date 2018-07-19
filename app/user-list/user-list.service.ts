import { Injectable } from '@angular/core';

import { USERS } from '../mock/mock-users';

@Injectable()
export class XyzUserListService {

  constructor() { }

  get(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

}