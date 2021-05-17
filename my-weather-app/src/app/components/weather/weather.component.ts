import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { IDailyForecast, IStates, IWeather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  public buttonClicked: boolean;
  public weeklyForecast: Array<IDailyForecast>;
  public id: string

  public stateInfo: IWeather = {
    id: "",
    name: "",
    state: "",
  };

  public dailyForecast: IDailyForecast = {
    number: "",
    name: "",
    detailedForecast: ""
  };


  states: IStates[] = [
    { value: 'AL', viewValue: 'Alabama' },
    { value: 'AK', viewValue: 'Alaska' },
    { value: 'AZ', viewValue: 'Arizona' },
    { value: 'AR', viewValue: 'Arkansas' },
    { value: 'CA', viewValue: 'California' },
    { value: 'CO', viewValue: 'Colorado' },
    { value: 'CT', viewValue: 'Connecticut' },
    { value: 'DE', viewValue: 'Delaware' },
    { value: 'FL', viewValue: 'Florida' },
    { value: 'GA', viewValue: 'Georgia' },
    { value: 'HI', viewValue: 'Hawaii' },
    { value: 'ID', viewValue: 'Idaho' },
    { value: 'IL', viewValue: 'Illinois' },
    { value: 'IN', viewValue: 'Indiana' },
    { value: 'IA', viewValue: 'Iowa' },
    { value: 'KS', viewValue: 'Kansas' },
    { value: 'KY', viewValue: 'Kentucky' },
    { value: 'LA', viewValue: 'Louisiana' },
    { value: 'ME', viewValue: 'Maine' },
    { value: 'MD', viewValue: 'Maryland' },
    { value: 'MA', viewValue: 'Massachusetts' },
    { value: 'MI', viewValue: 'Michigan' },
    { value: 'MN', viewValue: 'Minnesota' },
    { value: 'MS', viewValue: 'Mississippi' },
    { value: 'MO', viewValue: 'Missouri' },
    { value: 'MT', viewValue: 'Montana' },
    { value: 'NE', viewValue: 'Nebraska' },
    { value: 'NV', viewValue: 'Nevada' },
    { value: 'NH', viewValue: 'New Hampshire' },
    { value: 'NJ', viewValue: 'New Jersey' },
    { value: 'NM', viewValue: 'New Mexico' },
    { value: 'NY', viewValue: 'New York' },
    { value: 'NC', viewValue: 'North Carolina' },
    { value: 'ND', viewValue: 'North Dakota' },
    { value: 'OH', viewValue: 'Ohio' },
    { value: 'OK', viewValue: 'Oklahoma' },
    { value: 'OR', viewValue: 'Oregon' },
    { value: 'PA', viewValue: 'Pennsylvania' },
    { value: 'RI', viewValue: 'Rhode Island' },
    { value: 'SC', viewValue: 'South Carolina' },
    { value: 'SD', viewValue: 'South Dakota' },
    { value: 'TN', viewValue: 'Tennessee' },
    { value: 'TX', viewValue: 'Texas' },
    { value: 'UT', viewValue: 'Utah' },
    { value: 'VT', viewValue: 'Vermont' },
    { value: 'VA', viewValue: 'Virginia' },
    { value: 'WA', viewValue: 'Washington' },
    { value: 'WV', viewValue: 'West Virginia' },
    { value: 'WI', viewValue: 'Wisconsin' },
    { value: 'WY', viewValue: 'Wyoming' },
  ];




  constructor(
    private fb: FormBuilder,
    private weatherService: WeatherService,
  ) { }

  public ngOnInit(): void {
    this.buttonClicked = false;
    this.weatherSearchForm = this.fb.group({
      state: ["", Validators.required],
    });

  }


  public onSubmit() {
    this.buttonClicked = true;
    this.weatherService.getLocationId(this.weatherSearchForm.value.state)
      .pipe(
        map(res => this.stateInfo = res.features[0].properties),
      ).subscribe(() => {
        this.weatherService.getWeatherReport(this.stateInfo.id)
          .pipe(
            map(res => this.dailyForecast = res.properties.periods),
          ).subscribe(() => {
            res => this.dailyForecast = res.properties.periods
          });
      }
      )

  }

}
