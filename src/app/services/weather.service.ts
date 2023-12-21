import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

	constructor(
		protected http: HttpClient
	) {}

  	async getWeatherByCity(params?: any): Promise<any> {
		return lastValueFrom(this.http.get<any>(`${environment.api_url}/weather/`, { params }))
	}

	async listCities(params?: any): Promise<any> {
		return lastValueFrom(this.http.get<any>(`${environment.api_url}/city/`, { params }))
	}
}