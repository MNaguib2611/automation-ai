import { Injectable } from '@nestjs/common';

/**
 * Service class for handling application-level logic.
 */
@Injectable()
export class AppService {
  /**
   * Returns a greeting message when called by the application.
   * @returns {string} A string containing 'Hello World!' message.
   */
  getHello(): string {
    return 'Hello World!';
  }

  /**
   * Returns a personal introduction message from the developer's perspective.
   * @returns {string} A string containing 'My name is Mohammed!' message.
   */
  introduceMySelf(): string {
    return 'My name is Mohammed!';
  }

  /**
   * Returns a personal introduction message from the caller's perspective.
   * @returns {string} A string containing 'My name is LM studio!" message.
   */
  introduceYourSelf(): string {
    return 'My name is LM studio!';
  }
}
