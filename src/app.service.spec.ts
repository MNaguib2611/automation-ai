/* eslint-disable @typescript-eslint/no-unused-vars */ 
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should return the standard greeting message', () => {
    expect(service.getHello()).toBe('Hello World!');
  });

  it('should return the personalized greeting message introducing the service developer', () => {
    expect(service.introduceMySelf()).toBe('My name is Mohammed!');
  });

  it('should return the personalized greeting message introducing the user', () => {
    expect(service.introduceYourSelf()).toBe('My name is LM studio!');
  });

  it('should return an error when getHello() is called', () => {
    service.getHello = jest.fn(() => null);
    expect(service.getHello()).toBeNull();
  });

  it('should return an error when introduceMySelf() is called', () => {
    service.introduceMySelf = jest.fn(() => null);
    expect(service.introduceMySelf()).toBeNull();
  });

  it('should return an error when introduceYourSelf() is called', () => {
    service.introduceYourSelf = jest.fn(() => null);
    expect(service.introduceYourSelf()).toBeNull();
  });
});