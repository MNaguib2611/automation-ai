/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('should return hello world', () => {
    expect(appService.getHello()).toBe('Hello World!');
  });

  it('should return developer introduction', () => {
    expect(appService.introduceMySelf()).toBe('My name is Mohammed!');
  });

  it('should return empty string for unknown caller introduction', () => {
    expect(appService.introduceYourSelf()).toBe('');
  });

  it('should throw error for unknown caller introduction', () => {
    expect(() => appService.introduceYourSelf()).toThrowError(
      'Method not found',
    );
  });
});
