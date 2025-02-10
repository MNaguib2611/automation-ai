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

  describe('getHello', () => {
    it('should return Hello World!', () => {
      expect(appService.getHello()).toBe('Hello World!');
    });

    it('should return an error for empty input', () => {
      expect(appService.getHello()).toBeError();
    });
  });

  describe('introduceMySelf', () => {
    it('should return My name is Mohammed!', () => {
      expect(appService.introduceMySelf()).toBe('My name is Mohammed!');
    });

    it('should return an error for empty input', () => {
      expect(appService.introduceMySelf()).toBeError();
    });
  });

  describe('introduceYourSelf', () => {
    it('should return My name is LM studio!', () => {
      expect(appService.introduceYourSelf()).toBe('My name is LM studio!');
    });

    it('should return an error for empty input', () => {
      expect(appService.introduceYourSelf()).toBeError();
    });
  });
});