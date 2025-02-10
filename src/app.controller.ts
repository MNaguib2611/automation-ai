import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * AppController is responsible for handling HTTP requests to the root URL.
 */
@Controller()
export class AppController {
  /**
   * Initializes a new instance of the AppController class.
   *
   * @param appService An instance of the AppService class, used to interact with the application.
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Retrieves and returns a greeting message.
   *
   * @returns A string containing the greeting message.
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Retrieves and returns a brief introduction about the application author.
   *
   * @returns A string containing the introduction message.
   */
  @Get()
  introduceMySelf(): string {
    return this.appService.introduceMySelf();
  }
}
