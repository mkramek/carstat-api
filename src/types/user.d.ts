import { VehicleBodyType } from '../constants/VehicleBodyType';
import { VehicleColor } from '../constants/VehicleColor';
import { VehicleSearchDomain } from '../constants/VehicleSearchDomain';
import { VehicleStatus } from '../constants/VehicleStatus';
import { VehicleTransmission } from '../constants/VehicleTransmission';
import { VehicleType } from '../constants/VehicleType';
import { VehicleWheelDrive } from '../constants/VehicleWheelDrive';

declare type CarsUserRequest = Partial<{
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

declare type ManufacturersUserRequest = ManufacturersApiRequest;

declare type ModelsUserRequest = {
  manufacturerId: number;
  type?: ManufacturerType;
  page?: number;
};

declare type GenerationsUserRequest = {
  modelId: string;
  type?: ManufacturerType;
  page?: number;
};

declare type SearchVinUserRequest = {
  vin: string;
  pricesHistory?: boolean;
};

declare type SearchLotUserRequest = {
  lot: string;
  domain?: VehicleSearchDomain;
  pricesHistory?: boolean;
  searchById?: boolean;
};

declare type ArchivedLotsUserRequest = {
  perPage?: number;
  minutes?: number;
  number?: number;
};

declare type StatisticsUserRequest = {
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

declare type CarsUserResponse = UserResponse & {
  data: UserVehicleResponse[];
};

declare type ManufacturersUserResponse = UserResponse & {
  data: UserManufacturersResponse[];
};

declare type ModelsUserResponse = UserResponse & {
  data: UserModelsResponse[];
};

declare type GenerationsUserResponse = UserResponse & {
  data: UserGenerationsResponse[];
};

declare type SearchVinUserResponse = UserResponse & {
  data: UserVehicleResponse;
};

declare type SearchLotUserResponse = UserResponse & {
  data: UserVehicleResponse;
};

declare type ArchivedLotsUserResponse = UserResponse & {
  data: UserArchivedAuctionsResponse[];
};

declare type StatisticsUserResponse = UserResponse & {
  data: UserStatisticsResponse[];
};
