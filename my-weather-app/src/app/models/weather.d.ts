export interface IWeather {
  readonly id: '';
  readonly name: '';
  readonly state: '';
}

export interface IDailyForecast {
  readonly number: '';
  readonly name: '';
  readonly detailedForecast: '';
}

export interface IStates {
  readonly value: string;
  readonly viewValue: string;
}
