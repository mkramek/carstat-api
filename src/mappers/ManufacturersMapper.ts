import type {
  ManufacturersApiResponse,
  ManufacturersUserResponse,
} from '../types';
import { mapResponseMeta } from './MapperHelper';

export function mapManufacturersResponse(
  response: ManufacturersApiResponse
): ManufacturersUserResponse {
  return {
    ...response,
    data: response.data.map((elem) => ({
      ...elem,
      carsQty: elem.cars_qty,
      modelsQty: elem.models_qty,
    })),
    meta: mapResponseMeta(response.meta),
  };
}
