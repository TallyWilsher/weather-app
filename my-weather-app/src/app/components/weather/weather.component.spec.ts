import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent, WeatherService, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create weather component', () => {
    expect(component).toBeTruthy();
  });

  //todo
  describe('ngOnInit', () => {
    it('should intitialize the weather search form', () => {
      //Arrange
      //Act
      //Assert
      expect(component).toBeTruthy();
    });
  });

  //todo
  describe('onSubmit', () => {
    it('should call submit the weather search form', () => {
      //Arrange
      //Act
      //Assert
      expect(component).toBeTruthy();
    });
  });
});
