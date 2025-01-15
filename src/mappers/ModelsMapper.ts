import { ModelsApiResponse } from '../types/api';
import { ModelsUserResponse } from '../types/user';
import { mapResponseMeta } from './MapperHelper';

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
