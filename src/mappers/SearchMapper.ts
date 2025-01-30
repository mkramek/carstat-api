import type {
  SearchLotApiResponse,
  SearchVinApiResponse,
  SearchLotUserResponse,
  SearchVinUserResponse,
  UserVehicleResponse,
} from '@/types';
import { mapModelResponse, mapLotsResponse } from './CarsMapper';
import { mapResponseMeta } from './MapperHelper';

function mapSearchResponseData(
  data: SearchLotApiResponse['data'] | SearchVinApiResponse['data']
): UserVehicleResponse {
  return {
    ...data,
    bodyType: data.body_type,
    vehicleType: data.vehicle_type,
    wheelDrive: data.drive_wheel,
    model: mapModelResponse(data.model),
    lots: mapLotsResponse(data.lots),
  };
}

export function mapSearchResponse<
  T extends SearchLotApiResponse | SearchVinApiResponse,
>(
  response: T
): T extends SearchLotApiResponse
  ? SearchLotUserResponse
  : SearchVinUserResponse {
  return {
    data: mapSearchResponseData(response.data),
    links: response.links,
    meta: mapResponseMeta(response.meta),
  };
}
