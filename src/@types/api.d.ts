// --- Requests ---

declare type CarsApiRequest = {
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

declare type ManufacturersApiRequest = {
  type: ManufacturerType;
};

declare type ModelsApiRequest = {
  manufacturer_id: number;
  type?: ManufacturerType;
};

declare type GenerationsApiRequest = {
  model_id: string;
  type?: ManufacturerType;
};

declare type SearchVinApiRequest = {
  vin: string;
  prices_history?: number;
};

declare type SearchLotApiRequest = {
  lot: string;
  domain?: VehicleSearchDomain;
  prices_history?: number;
  search_by_id?: number;
};

declare type ArchivedLotsApiRequest = {
  per_page?: number;
  minutes?: number;
};

declare type StatisticsApiRequest = {
  manufacturer_id?: number;
  model_id?: number;
  generation_id?: number;
  engine_id?: number;
  year?: number;
};

// --- Responses ---

declare type ApiResponse = {
  links?: ApiResponseLinks;
  meta?: ApiResponseMeta;
};

declare type CarsApiResponse = ApiResponse & {
  data: ApiVehicleResponse[];
};

declare type ManufacturersApiResponse = ApiResponse & {
  data: ApiManufacturersResponse[];
};

declare type ModelsApiResponse = ApiResponse & {
  data: ApiModelsResponse[];
};

declare type GenerationsApiResponse = ApiResponse & {
  data: ApiGenerationsResponse[];
};

declare type SearchVinApiResponse = ApiResponse & {
  data: ApiVehicleResponse;
};

declare type SearchLotApiResponse = ApiResponse & {
  data: ApiVehicleResponse;
};

declare type ArchivedAuctionApiResponse = ApiResponse & {
  data: ApiArchivedAuctionResponse[];
};

declare type StatisticsApiResponse = ApiResponse & {
  data: ApiStatisticsResponse[];
};
