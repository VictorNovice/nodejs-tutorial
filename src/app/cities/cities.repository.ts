import { City } from './city';

export interface CitiesRepository {
  getAllCities(): Promise<Array<City>>;

  getCity(cityId: number): Promise<City>;

  getRandomCity(): Promise<City>;

  addOrUpdateCity(city: City): Promise<void>;

  deleteCity(cityId: number): Promise<void>;

  initializeCities(cities: Array<City>): Promise<void>;
}
