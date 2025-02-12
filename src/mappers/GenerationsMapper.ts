import type { GenerationsApiResponse } from '../types/api.js';
import type { GenerationsUserResponse } from '../types/user.js';
import { mapResponseMeta } from './MapperHelper.js';

function mapGenerationsResponseData(
  data: GenerationsApiResponse['data']
): GenerationsUserResponse['data'] {
  return data.map((elem) => ({
    ...elem,
    carsQty: elem.cars_qty,
    fromYear: elem.from_year,
    manufacturerId: elem.manufacturer_id,
    modelId: elem.model_id,
    toYear: elem.to_year,
  }));
}

export function mapGenerationsResponse(
  response: GenerationsApiResponse
): GenerationsUserResponse {
  return {
    data: mapGenerationsResponseData(response.data),
    links: response.links,
    meta: mapResponseMeta(response.meta),
  };
}
