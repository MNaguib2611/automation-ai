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

  it('should return the greeting message', () => {
    expect(service.getHello()).toBe('Hello World!');
  });

  it('should return the introduction message with correct developer name', () => {
    expect(service.introduceMySelf()).toBe('My name is Mohammed!');
  });

  it('should return the introduction message with correct developer name', () => {
    expect(service.introduceYourSelf()).toBe('My name is Mohammed!');
  });

  it('should return null when getHello() is not called', () => {
    service.getHello();
    expect(service.getHello()).toBeUndefined();
  });

  it('should return null when introduceMySelf() is not called', () => {
    expect(service.introduceMySelf()).toBeUndefined();
  });

  it('should return null when introduceYourSelf() is not called', () => {
    expect(service.introduceYourSelf()).toBeUndefined();
  });

  it('should throw an error when a nonexistent method is called', () => {
    expect(() => service.getInvalidMethod()).toThrowError('No function with the name "getInvalidMethod" was found.');
  });
});