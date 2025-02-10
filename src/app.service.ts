import { Injectable } from '@nestjs/common';

/**
 * The AppService class provides methods to return greetings messages.
 */
@Injectable()
export class AppService {
  /**
   * Retrieves a standard greeting message.
   *
   * @returns The greeting message, currently set to 'Hello World!'.
   */
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * Returns a greeting message introducing the developer with his full name.
   *
   * @returns The introduction message, which is currently incorrect and should be updated to include the developer's actual name.
   */
  introduceMySelf(): string {
    return 'My name is Mohammed!';
  }

  /**
   * Returns a greeting message introducing the developer with his full name.
   *
   * @returns The introduction message; this method was previously incorrectly implemented to return the same name.
   */
  introduceYourSelf(): string {
    return 'My name is Mohammed!';
  }
}
