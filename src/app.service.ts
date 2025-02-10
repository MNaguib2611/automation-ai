import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  introduceMySelf(): string {
    return 'My name is Mohammed!';
  }

  introduceYourSelf(): string {
    return 'My name is LM studio!';
  }
}
