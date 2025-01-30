import type {
  SearchLotApiResponse,
  SearchVinApiResponse,
} from '../types/api.js';
import type {
  SearchLotUserResponse,
  SearchVinUserResponse,
} from '../types/user.js';
import type { UserVehicleResponse } from '../types/utils.js';
import { mapModelResponse, mapLotsResponse } from './CarsMapper.js';
import { mapResponseMeta } from './MapperHelper.js';

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
