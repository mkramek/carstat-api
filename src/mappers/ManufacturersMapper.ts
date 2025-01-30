import type { ManufacturersApiResponse } from '../types/api.js';
import type { ManufacturersUserResponse } from '../types/user.js';
import { mapResponseMeta } from './MapperHelper.js';

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
