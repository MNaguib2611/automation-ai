import { Injectable } from '@nestjs/common';

/**
 * AppService is an injectable class in a NestJS application, responsible for providing the main application service.
 */
@Injectable()
export class AppService {
  /**
   * Returns a greeting message, "Hello World!".
   */
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * Returns a personalized message with the developer's name.
   */
  introduceMySelf(): string {
    return 'My name is Mohammed!';
  }

  /**
   * Returns a personalized message with the developer's name.
   */
  introduceYourSelf(): string {
    return 'My name is LM studio!';
  }
}
