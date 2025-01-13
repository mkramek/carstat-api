import { ofetch } from 'ofetch';
import {
  CarsUserRequest,
  CarsUserResponse,
  ManufacturersUserRequest,
  ManufacturersUserResponse,
} from '../@types/user';
import { ClientConfig } from '../constants';
import { mapCarsRequest, mapCarsResponse } from '../mappers/CarsMapper';
import { mapManufacturersResponse } from '../mappers/ManufacturersMapper';

export class CarstatClient {
  private headers: Record<string, string> = {};
  private static instance: CarstatClient | null = null;

  private constructor(apiKey: string) {
    this.headers = {
      'x-api-key': apiKey,
    };
    console.log(this.headers);
  }

  public static init = (apiKey: string) => {
    if (apiKey.length === 0) {
      throw new Error('API key is not set');
    }
    if (this.instance === null) {
      this.instance = new CarstatClient(apiKey);
    }
    return this.instance;
  };

  public getCars = async (
    request?: CarsUserRequest
  ): Promise<CarsUserResponse> => {
    return ofetch<CarsApiResponse>('/api/cars', {
      baseURL: ClientConfig.API_URL,
      method: 'GET',
      headers: this.headers,
      query: mapCarsRequest(request),
    })
      .then((response) => mapCarsResponse(response))
      .catch((err) => {
        throw err;
      });
  };

  public getManufacturers = async (
    request?: ManufacturersUserRequest
  ): Promise<ManufacturersUserResponse> => {
    return ofetch<ManufacturersApiResponse>('/api/cars', {
      baseURL: ClientConfig.API_URL,
      method: 'GET',
      headers: this.headers,
      query: request,
    })
      .then((response) => mapManufacturersResponse(response))
      .catch((err) => {
        throw err;
      });
  };
}
