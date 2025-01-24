'use strict';

/** @typedef {import('../types').SearchLotApiResponse} SearchLotApiResponse */
/** @typedef {import('../types').SearchVinApiResponse} SearchVinApiResponse */
/** @typedef {import('../types').SearchLotUserResponse} SearchLotUserResponse */
/** @typedef {import('../types').SearchVinUserResponse} SearchVinUserResponse */
/** @typedef {import('../types').UserVehicleResponse} UserVehicleResponse */

/**
 * @template T
 * @typedef {T extends SearchLotApiResponse ? SearchLotUserResponse : SearchVinUserResponse} SearchResponseType
 */

const { mapModelResponse, mapLotsResponse } = require('./carsMapper');
const { mapResponseMeta } = require('./mapperHelper');

/**
 * @param {SearchLotApiResponse['data'] | SearchVinApiResponse['data']} data
 * @returns {UserVehicleResponse}
 */
function mapSearchResponseData(data) {
  return {
    ...data,
    bodyType: data.body_type,
    vehicleType: data.vehicle_type,
    wheelDrive: data.drive_wheel,
    model: mapModelResponse(data.model),
    lots: mapLotsResponse(data.lots),
  };
}

/**
 * @param {SearchLotApiResponse|SearchVinApiResponse} response
 * @returns {SearchLotUserResponse|SearchVinUserResponse}
 */
function mapSearchResponse(response) {
  return {
    data: mapSearchResponseData(response.data),
    links: response.links,
    meta: mapResponseMeta(response.meta),
  };
}

module.exports = {
  mapSearchResponse,
};
