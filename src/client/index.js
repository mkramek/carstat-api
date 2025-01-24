'use strict';

/** @typedef {import('../types/user').CarsUserRequest} CarsUserRequest */
/** @typedef {import('../types/user').CarsUserResponse} CarsUserResponse */
/** @typedef {import('../types/user').ArchivedLotsUserRequest} ArchivedLotsUserRequest */
/** @typedef {import('../types/user').ArchivedLotsUserResponse} ArchivedLotsUserResponse */
/** @typedef {import('../types/user').GenerationsUserRequest} GenerationsUserRequest */
/** @typedef {import('../types/user').GenerationsUserResponse} GenerationsUserResponse */
/** @typedef {import('../types/user').ManufacturersUserRequest} ManufacturersUserRequest */
/** @typedef {import('../types/user').ManufacturersUserResponse} ManufacturersUserResponse */
/** @typedef {import('../types/user').ModelsUserRequest} ModelsUserRequest */
/** @typedef {import('../types/user').ModelsUserResponse} ModelsUserResponse */
/** @typedef {import('../types/user').SearchLotUserRequest} SearchLotUserRequest */
/** @typedef {import('../types/user').SearchLotUserResponse} SearchLotUserResponse */
/** @typedef {import('../types/user').SearchVinUserRequest} SearchVinUserRequest */
/** @typedef {import('../types/user').SearchVinUserResponse} SearchVinUserResponse */
/** @typedef {import('../types/user').StatisticsUserRequest} StatisticsUserRequest */
/** @typedef {import('../types/user').StatisticsUserResponse} StatisticsUserResponse */

const { ofetch } = require('ofetch');
const { mapCarsRequest, mapCarsResponse } = require('../mappers/carsMapper');
const { mapManufacturersResponse } = require('../mappers/manufacturersMapper');
const { mapModelsResponse } = require('../mappers/modelsMapper');
const { mapGenerationsResponse } = require('../mappers/generationsMapper');
const { mapSearchResponse } = require('../mappers/searchMapper');
const { ClientConfig } = require('../constants/index.js');

class CarstatClient {
  /** @type {Record<string, string>} */
  #headers = {};

  /** @type {CarstatClient | null} */
  static #instance = null;

  /** @param {string} apiKey  */
  constructor(apiKey) {
    this.#headers = {
      'x-api-key': apiKey,
    };
  }

  /** @param {string} apiKey  */
  static init = (apiKey) => {
    if (apiKey.length === 0) {
      throw new Error('API key is not set');
    }
    if (this.#instance === null) {
      this.#instance = new CarstatClient(apiKey);
    }
    return this.#instance;
  };

  /**
   * @param {CarsUserRequest} [request]
   * @returns {Promise<CarsUserResponse>}
   */
  getCars = async (request) => {
    return ofetch('/api/cars', {
      baseURL: ClientConfig.API_URL,
      method: 'GET',
      headers: this.#headers,
      query: mapCarsRequest(request),
    })
      .then((response) => mapCarsResponse(response))
      .catch((err) => {
        throw err;
      });
  };

  /**
   * @param {ManufacturersUserRequest} request
   * @returns {Promise<ManufacturersUserResponse>}
   */
  getManufacturers = async (request) => {
    return ofetch(`/api/manufacturers/${request?.type ?? ''}`, {
      baseURL: ClientConfig.API_URL,
      method: 'GET',
      headers: this.#headers,
    })
      .then((response) => mapManufacturersResponse(response))
      .catch((err) => {
        throw err;
      });
  };

  /**
   * @param {ModelsUserRequest} request
   * @returns {Promise<ModelsUserResponse>}
   */
  getModels = async (request) => {
    const url = request?.manufacturerId
      ? request.type
        ? `${request.manufacturerId}/${request.type}`
        : `${request.manufacturerId}`
      : '';
    return ofetch(`/api/models/${url}`, {
      baseURL: ClientConfig.API_URL,
      method: 'GET',
      headers: this.#headers,
    })
      .then((response) => mapModelsResponse(response))
      .catch((err) => {
        throw err;
      });
  };

  /**
   * @param {GenerationsUserRequest} request
   * @returns {Promise<GenerationsUserResponse>}
   */
  getGenerations = async (request) => {
    const url = request?.modelId
      ? request.type
        ? `${request.modelId}/${request.type}`
        : `${request.modelId}`
      : '';
    return ofetch(`/api/generations/${url}`, {
      method: 'GET',
      headers: this.#headers,
    })
      .then((response) => mapGenerationsResponse(response))
      .catch((err) => {
        throw err;
      });
  };

  /**
   * @param {SearchLotUserRequest} request
   * @returns {Promise<SearchLotUserResponse>}
   */
  lotSearch = async (request) => {
    const url = request?.lot
      ? request.domain
        ? `${request.lot}/${request.domain}`
        : `${request.lot}`
      : '';
    return ofetch(`/api/search-lot/${url}`, {
      method: 'GET',
      headers: this.#headers,
      query: {
        prices_history: request.pricesHistory ? 1 : undefined,
        search_by_id: request.searchById ? 1 : undefined,
      },
    })
      .then((response) => mapSearchResponse(response))
      .catch((err) => {
        throw err;
      });
  };

  /**
   * @param {SearchVinUserRequest} request
   * @returns {Promise<SearchVinUserResponse>}
   */
  vinSearch = async (request) => {
    return ofetch(`/api/search-vin/${request.vin}`, {
      method: 'GET',
      headers: this.#headers,
      query: {
        prices_history: request.pricesHistory ? 1 : undefined,
      },
    })
      .then((response) => mapSearchResponse(response))
      .catch((err) => {
        throw err;
      });
  };

  /**
   * @todo
   */
  getArchivedLots = async () => {};

  /**
   * @todo
   */
  getStatistics = async () => {};
}

module.exports = { CarstatClient };
