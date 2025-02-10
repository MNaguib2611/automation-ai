import { Injectable } from '@nestjs/common';

/**
 * The AppService class provides methods for common greetings.
 */
@Injectable()
export class AppService {
  /**
   * Returns a standard greeting message.
   *
   * @returns The greeting message.
   */
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * Returns a personalized greeting message introducing the service developer.
   *
   * @returns The personalized greeting message.
   */
  introduceMySelf(): string {
    return 'My name is Mohammed!';
  }

  /**
   * Returns a personalized greeting message introducing the user.
   *
   * @returns The personalized greeting message.
   */
  introduceYourSelf(): string {
    return 'My name is LM studio!';
  }
}
