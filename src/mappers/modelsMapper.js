/** @typedef {import('../types').ModelsApiResponse} ModelsApiResponse */
/** @typedef {import('../types').ModelsUserResponse} ModelsUserResponse */

const { mapResponseMeta } = require('./mapperHelper');

/**
 * @param {ModelsApiResponse['data']} modelsResponseData
 * @returns {ModelsUserResponse['data']}
 */
function mapModelsResponseData(modelsResponseData) {
  return modelsResponseData.map((elem) => ({
    ...elem,
    carsQty: elem.cars_qty,
    generationsQty: elem.generations_qty,
    manufacturerId: elem.manufacturer_id,
  }));
}

/**
 * @param {ModelsApiResponse} modelsResponse
 * @returns {ModelsUserResponse}
 */
function mapModelsResponse(modelsResponse) {
  return {
    data: mapModelsResponseData(modelsResponse.data),
    links: modelsResponse.links,
    meta: mapResponseMeta(modelsResponse.meta),
  };
}

module.exports = {
  mapModelsResponse,
};
