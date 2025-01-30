import type { ModelsApiResponse } from '../types/api.js';
import type { ModelsUserResponse } from '../types/user.js';
import { mapResponseMeta } from './MapperHelper.js';

function mapModelsResponseData(
  modelsResponseData: ModelsApiResponse['data']
): ModelsUserResponse['data'] {
  return modelsResponseData.map((elem) => ({
    ...elem,
    carsQty: elem.cars_qty,
    generationsQty: elem.generations_qty,
    manufacturerId: elem.manufacturer_id,
  }));
}

export function mapModelsResponse(modelsResponse: ModelsApiResponse) {
  return {
    data: mapModelsResponseData(modelsResponse.data),
    links: modelsResponse.links,
    meta: mapResponseMeta(modelsResponse.meta),
  };
}
