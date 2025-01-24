/** @typedef {import('../types').ManufacturersApiResponse} ManufacturersApiResponse */
/** @typedef {import('../types').ManufacturersUserResponse} ManufacturersUserResponse */

const { mapResponseMeta } = require('./mapperHelper');

/**
 * @param {ManufacturersApiResponse} response
 * @returns {ManufacturersUserResponse}
 */
function mapManufacturersResponse(response) {
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

module.exports = {
  mapManufacturersResponse,
};
