/** @typedef {import('../types').GenerationsApiResponse} GenerationsApiResponse */
/** @typedef {import('../types').GenerationsUserResponse} GenerationsUserResponse */

const { mapResponseMeta } = require('./mapperHelper');

/**
 * @param {GenerationsApiResponse['data']} data
 * @returns {GenerationsUserResponse['data']}
 */
function mapGenerationsResponseData(data) {
  return data.map((elem) => ({
    ...elem,
    carsQty: elem.cars_qty,
    fromYear: elem.from_year,
    manufacturerId: elem.manufacturer_id,
    modelId: elem.model_id,
    toYear: elem.to_year,
  }));
}

/**
 * @param {GenerationsApiResponse} response
 * @returns {GenerationsUserResponse}
 */
function mapGenerationsResponse(response) {
  return {
    data: mapGenerationsResponseData(response.data),
    links: response.links,
    meta: mapResponseMeta(response.meta),
  };
}

module.exports = {
  mapGenerationsResponse,
};
