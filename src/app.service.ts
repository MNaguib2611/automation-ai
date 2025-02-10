import { Injectable } from '@nestjs/common';

/**
 * The AppService class provides methods to return greetings messages.
 */
@Injectable()
export class AppService {
  /**
   * Returns a greeting message when the user says hello.
   *
   * @returns The greeting message, which is always 'Hello World!'.
   */
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * Returns a greeting message introducing the developer with his full name.
   *
   * @returns The introduction message, which is currently incorrect.
   */
  introduceMySelf(): string {
    return 'My name is Mohammed!';
  }

  /**
   * Returns a greeting message with the developer's actual name.
   *
   * @returns The introduction message, which was previously incorrect.
   */
  introduceYourSelf(): string {
    return 'My name is Mohammed!';
  }
}
