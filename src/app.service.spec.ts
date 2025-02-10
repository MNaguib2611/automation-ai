/* eslint-disable @typescript-eslint/no-unused-vars */ 
import { Test, TestingModule } from '@nestjs/testing';
import * as jest from 'jest';
import { AppModule } from './app.module';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('should return "Hello World!" when getHello() is called', () => {
    expect(appService.getHello()).toBe('Hello World!');
  });

  it('should return "My name is Mohammed!" when introduceMySelf() is called', () => {
    expect(appService.introduceMySelf()).toBe('My name is Mohammed!');
  });

  it('should return "Your name is Mohammed!" when introduceYourSelf() is called', () => {
    expect(appService.introduceYourSelf()).toBe('My name is Mohammed!');
  });

  it('should return error when getHello() is called with invalid input', async () => {
    expect(() => appService.getHello()).toThrowError('Expected function call to be a string, but got an undefined value');
  });

  it('should return error when introduceMySelf() is called with invalid input', async () => {
    expect(() => appService.introduceMySelf()).toThrowError('Expected function call to be a string, but got an undefined value');
  });

  it('should return error when introduceYourSelf() is called with invalid input', async () => {
    expect(() => appService.introduceYourSelf()).toThrowError('Expected function call to be a string, but got an undefined value');
  });
});