// --- Requests ---

import { VehicleSearchDomain } from '../constants/VehicleSearchDomain.js';
import {
  ApiArchivedAuctionResponse,
  ApiGenerationsResponse,
  ApiManufacturersResponse,
  ApiModelsResponse,
  ApiResponseLinks,
  ApiResponseMeta,
  ApiStatisticsResponse,
  ApiVehicleResponse,
  ManufacturerType,
} from './utils.js';

export type CarsApiRequest = {
  page?: number;
  minutes?: number;
  per_page?: number;
  manufacturer_id?: number;
  model_id?: number;
  generation_id?: number;
  from_year?: number;
  to_year?: number;
  year?: number;
  vehicle_type?: number;
  buy_now?: number;
  domain_id?: number;
  search_query?: string;
  status?: number;
  vin?: string;
  name?: string;
  document_title?: string;
  cylinders?: number;
  engine?: string;
  body_type?: number;
  color?: number;
  transmission?: number;
  drive_wheel?: number;
  country?: string;
  state_code?: string;
  fuel_type?: number;
  condition?: number;
  damage?: string;
  prices_history?: number;
  sale_date_in_days?: number;
  sale_date_from?: string;
  odometer_from_km?: number;
  odometer_to_km?: number;
  odometer_from_mi?: number;
  odometer_to_mi?: number;
  buy_now_price_from?: number;
  buy_now_price_to?: number;
  bid_price_from?: number;
  bid_price_to?: number;
  simple_paginate?: number;
};

export type ManufacturersApiRequest = {
  type: ManufacturerType;
};

export type ModelsApiRequest = {
  manufacturer_id: number;
  type?: ManufacturerType;
};

export type GenerationsApiRequest = {
  model_id: string;
  type?: ManufacturerType;
};

export type SearchVinApiRequest = {
  vin: string;
  prices_history?: number;
};

export type SearchLotApiRequest = {
  lot: string;
  domain?: VehicleSearchDomain;
  prices_history?: number;
  search_by_id?: number;
};

export type ArchivedLotsApiRequest = {
  per_page?: number;
  minutes?: number;
};

export type StatisticsApiRequest = {
  manufacturer_id?: number;
  model_id?: number;
  generation_id?: number;
  engine_id?: number;
  year?: number;
};

// --- Responses ---

export type ApiResponse = {
  links?: ApiResponseLinks;
  meta?: ApiResponseMeta;
};

export type CarsApiResponse = ApiResponse & {
  data: ApiVehicleResponse[];
};

export type ManufacturersApiResponse = ApiResponse & {
  data: ApiManufacturersResponse[];
};

export type ModelsApiResponse = ApiResponse & {
  data: ApiModelsResponse[];
};

export type GenerationsApiResponse = ApiResponse & {
  data: ApiGenerationsResponse[];
};

export type SearchVinApiResponse = ApiResponse & {
  data: ApiVehicleResponse;
};

export type SearchLotApiResponse = ApiResponse & {
  data: ApiVehicleResponse;
};

export type ArchivedAuctionApiResponse = ApiResponse & {
  data: ApiArchivedAuctionResponse[];
};

export type StatisticsApiResponse = ApiResponse & {
  data: ApiStatisticsResponse[];
};
