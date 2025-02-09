/* eslint-disable @typescript-eslint/no-unused-vars */ 
import * as Jest from 'jest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
  });

  it('should return a greeting message', async () => {
    const result = await appController.getHello();
    expect(result).toBe('Hello World!');
  });

  it('should return a brief introduction about the application author', async () => {
    const result = await appController.introduceMySelf();
    expect(result).toBe('I am John Doe and I created this application.');
  });

  it('should return null when the appService is not initialized', async () => {
    jest.spyOn(appController.appService, 'getHello').mockReturnValue(null);
    const result = await appController.getHello();
    expect(result).toBeNull();
  });

  it('should return null when the appService is not initialized for introduceMySelf', async () => {
    jest.spyOn(appController.appService, 'introduceMySelf').mockReturnValue(null);
    const result = await appController.introduceMySelf();
    expect(result).toBeNull();
  });

  it('should return a default message when the appService is not initialized', async () => {
    jest.spyOn(appController.appService, 'getHello').mockReturnValue('Default message');
    const result = await appController.getHello();
    expect(result).toBe('Default message');
  });

  it('should return a default message when the appService is not initialized for introduceMySelf', async () => {
    jest.spyOn(appController.appService, 'introduceMySelf').mockReturnValue('Default message');
    const result = await appController.introduceMySelf();
    expect(result).toBe('Default message');
  });
});