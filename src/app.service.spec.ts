/* eslint-disable @typescript-eslint/no-unused-vars */ 
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should return a greeting message', () => {
    expect(service.getHello()).toBe('Hello World!');
  });

  it('should return a greeting message for introducing yourself', () => {
    expect(service.introduceMySelf()).toBe('My name is Mohammed!');
  });

  it('should return a greeting message for introducing yourself', () => {
    expect(service.introduceYourSelf()).toBe('My name is Mohammed!');
  });

  it('should throw an error when introducing yourself', () => {
    expect(() => service.introduceYourSelf()).toThrowError('Method should return greeting message');
  });

  it('should throw an error when returning a standard greeting', () => {
    expect(() => service.getHello()).toThrowError('Method should return greeting message');
  });

  it('should return a greeting message with a custom name', () => {
    expect(service.getHello()).not.toBe('Hello World!');
  });
});