import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Controller for the application, handling HTTP requests and responses.
 */
@Controller()
export class AppController {
  /**
   * Initializes the controller with an instance of AppService.
   * @param appService Instance of AppService, providing application functionality.
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Handles a GET request to the root URL, returning 'Hello World!'.
   * @returns The string 'Hello World!', representing a greeting.
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Handles a GET request to the root URL, introducing the controller's author.
   * @returns A message introducing the controller's creator.
   */
  @Get()
  introduceMySelf(): string {
    return this.appService.introduceMySelf();
  }
}
