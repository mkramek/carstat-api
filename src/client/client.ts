import { ofetch } from 'ofetch';
import type {
  ArchivedLotsApiResponse,
  CarsApiResponse,
  GenerationsApiResponse,
  ManufacturersApiResponse,
  ModelsApiResponse,
  SearchLotApiResponse,
} from '../types/api.js';
import type {
  ArchivedLotsUserRequest,
  CarsUserRequest,
  CarsUserResponse,
  GenerationsUserRequest,
  ManufacturersUserRequest,
  ManufacturersUserResponse,
  ModelsUserRequest,
  ModelsUserResponse,
  SearchLotUserRequest,
  SearchVinUserRequest,
} from '../types/user.js';
import { ClientConfig } from '../constants/ClientConfig.js';
import { mapCarsRequest, mapCarsResponse } from '../mappers/CarsMapper.js';
import { mapManufacturersResponse } from '../mappers/ManufacturersMapper.js';
import { mapModelsResponse } from '../mappers/ModelsMapper.js';
import { mapGenerationsResponse } from '../mappers/GenerationsMapper.js';
import { mapSearchResponse } from '../mappers/SearchMapper.js';
import { mapArchivedLotsResponse } from '../mappers/ArchivedLotsMapper.js';

export class CarstatClient {
  private headers: Record<string, string> = {};
  private static instance: CarstatClient | null = null;

  private constructor(apiKey: string) {
    this.headers = {
      'x-api-key': apiKey,
    };
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
    return ofetch<ManufacturersApiResponse>(
      `/api/manufacturers/${request?.type ?? ''}`,
      {
        baseURL: ClientConfig.API_URL,
        method: 'GET',
        headers: this.headers,
      }
    )
      .then((response) => mapManufacturersResponse(response))
      .catch((err) => {
        throw err;
      });
  };

  public getModels = async (
    request?: ModelsUserRequest
  ): Promise<ModelsUserResponse> => {
    const url = request?.manufacturerId
      ? request.type
        ? `${request.manufacturerId}/${request.type}`
        : `${request.manufacturerId}`
      : '';
    return ofetch<ModelsApiResponse>(`/api/models/${url}`, {
      baseURL: ClientConfig.API_URL,
      method: 'GET',
      headers: this.headers,
    })
      .then((response) => mapModelsResponse(response))
      .catch((err) => {
        throw err;
      });
  };

  public getGenerations = async (request?: GenerationsUserRequest) => {
    const url = request?.modelId
      ? request.type
        ? `${request.modelId}/${request.type}`
        : `${request.modelId}`
      : '';
    return ofetch<GenerationsApiResponse>(`/api/generations/${url}`, {
      method: 'GET',
      headers: this.headers,
    })
      .then((response) => mapGenerationsResponse(response))
      .catch((err) => {
        throw err;
      });
  };

  public lotSearch = async (request: SearchLotUserRequest) => {
    const url = request?.lot
      ? request.domain
        ? `${request.lot}/${request.domain}`
        : `${request.lot}`
      : '';
    return ofetch<SearchLotApiResponse>(`/api/search-lot/${url}`, {
      method: 'GET',
      headers: this.headers,
      query: {
        prices_history: request.pricesHistory ? 1 : undefined,
        search_by_id: request.searchById ? 1 : undefined,
      },
    })
      .then((response) => mapSearchResponse(response))
      .catch((err) => {
        throw err;
      });
  };

  public vinSearch = async (request: SearchVinUserRequest) => {
    return ofetch<SearchLotApiResponse>(`/api/search-vin/${request.vin}`, {
      method: 'GET',
      headers: this.headers,
      query: {
        prices_history: request.pricesHistory ? 1 : undefined,
      },
    })
      .then((response) => mapSearchResponse(response))
      .catch((err) => {
        throw err;
      });
  };

  public getArchivedLots = async (request: ArchivedLotsUserRequest) => {
    return ofetch<ArchivedLotsApiResponse>('/api/archived-lots', {
      method: 'GET',
      headers: this.headers,
      query: {
        per_page: request.perPage,
        minutes: request.minutes,
        page: request.page,
      },
    })
      .then((response) => mapArchivedLotsResponse(response))
      .catch((err) => {
        throw err;
      });
  };

  public getStatistics = async () => {};
}
