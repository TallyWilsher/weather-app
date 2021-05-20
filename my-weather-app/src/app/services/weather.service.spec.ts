import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let weatherService: WeatherService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [WeatherService] });
    weatherService = TestBed.inject(WeatherService);

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    weatherService = new WeatherService(httpClientSpy as any);
  });

  it('should create the weatherService', () => {
    //Arrange
    //Act
    //Assert
    expect(weatherService).toBeTruthy();
  });

  //todo
  describe('getLocationId', () => {
    it('should get the location id', () => {
      //Arrange
      let fakeId = 'UTZ001';
      //Act
      weatherService.getLocationId(fakeId);
      //Assert
      expect(weatherService.getLocationId).toHaveBeenCalledWith('UTZ001');
    });
    it('should get the location id', () => {
      //Arrange
      let fakeId = 'UTZ001';
      //Act
      weatherService.getLocationId(fakeId);
      //Assert
      expect(weatherService.getLocationId).toHaveBeenCalled();
    });
  });

  //todo
  describe('getWeatherReport', () => {
    it('should get the weather report', () => {
      //Arrange
      //Act
      //Assert
      expect(weatherService).toBeTruthy();
    });
  });
});
