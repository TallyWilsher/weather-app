import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    //Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    //Act

    //Assert
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-weather-app'`, () => {
    //Arrange
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    //Act

    //Assert
    expect(app.title).toEqual('my-weather-app');
  });
});
