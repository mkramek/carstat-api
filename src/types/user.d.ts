import { VehicleBodyType } from '../constants/vehicleBodyType';
import { VehicleColor } from '../constants/vehicleColor';
import { VehicleSearchDomain } from '../constants/vehicleSearchDomain';
import { VehicleStatus } from '../constants/vehicleStatus';
import { VehicleTransmission } from '../constants/vehicleTransmission';
import { VehicleType } from '../constants/vehicleType';
import { VehicleWheelDrive } from '../constants/vehicleWheelDrive';
import { ManufacturersApiRequest } from './api';
import {
  ManufacturerType,
  OdometerInterval,
  PriceInterval,
  SaleDate,
  UserArchivedAuctionsResponse,
  UserGenerationsResponse,
  UserManufacturersResponse,
  UserModelsResponse,
  UserResponseLinks,
  UserResponseMeta,
  UserStatisticsResponse,
  UserVehicleResponse,
  YearInterval,
} from './utils';

export type CarsUserRequest = Partial<{
  minutes: number;
  perPage: number;
  manufacturerId: number;
  modelId: number;
  generationId: number;
  year: number | YearInterval;
  vehicleType: VehicleType;
  buyNow: boolean;
  domainId: number;
  searchQuery: string;
  status: VehicleStatus;
  vin: string;
  name: string;
  documentTitle: string;
  cylinders: number;
  engine: string;
  bodyType?: VehicleBodyType;
  color: VehicleColor;
  transmission: VehicleTransmission;
  wheelDrive: VehicleWheelDrive;
  country: string;
  stateCode: string;
  fuelType: number;
  condition: number;
  damage: string;
  pricesHistory: boolean;
  saleDate: SaleDate;
  odometer: OdometerInterval;
  buyNowPrice: PriceInterval;
  bidPrice: PriceInterval;
  paginate: boolean;
  page: number;
}>;

export type ManufacturersUserRequest = ManufacturersApiRequest;

export type ModelsUserRequest = {
  manufacturerId: number;
  type?: ManufacturerType;
  page?: number;
};

export type GenerationsUserRequest = {
  modelId: string;
  type?: ManufacturerType;
  page?: number;
};

export type SearchVinUserRequest = {
  vin: string;
  pricesHistory?: boolean;
};

export type SearchLotUserRequest = {
  lot: string;
  domain?: VehicleSearchDomain;
  pricesHistory?: boolean;
  searchById?: boolean;
};

export type ArchivedLotsUserRequest = {
  perPage?: number;
  minutes?: number;
  number?: number;
};

export type StatisticsUserRequest = {
  manufacturerId?: number;
  modelId?: number;
  generationId?: number;
  engineId?: number;
  year?: number;
};

// --- Responses ---

type UserResponse = {
  meta?: UserResponseMeta;
  links?: UserResponseLinks;
};

export type CarsUserResponse = UserResponse & {
  data: UserVehicleResponse[];
};

export type ManufacturersUserResponse = UserResponse & {
  data: UserManufacturersResponse[];
};

export type ModelsUserResponse = UserResponse & {
  data: UserModelsResponse[];
};

export type GenerationsUserResponse = UserResponse & {
  data: UserGenerationsResponse[];
};

export type SearchVinUserResponse = UserResponse & {
  data: UserVehicleResponse;
};

export type SearchLotUserResponse = UserResponse & {
  data: UserVehicleResponse;
};

export type ArchivedLotsUserResponse = UserResponse & {
  data: UserArchivedAuctionsResponse[];
};

export type StatisticsUserResponse = UserResponse & {
  data: UserStatisticsResponse[];
};
