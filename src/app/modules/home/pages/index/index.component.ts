import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  form: FormControl
  data: any
  cities: any[] = []
  loading: { [key: string]: any } = {}
  constructor(
    private weatherService: WeatherService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.fb.control(null, Validators.required);

    this.loadCities()
    this.loadWeather()
  }

  
  async loadWeather() {
    try {
      this.data = await this.weatherService.getWeatherByCity({ city: 'Campinas' })
      console.log(this.data)
    } catch (error) {
      console.log(error)
    }
  }

  async loadCities() {
    try {
      this.cities = await this.weatherService.listCities()
      console.log(this.data)
    } catch (error) {
      console.log(error)
    }
  }
}
