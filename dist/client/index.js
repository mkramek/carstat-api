"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarstatClient = void 0;
const ofetch_1 = require("ofetch");
const constants_1 = require("../constants");
const CarsMapper_1 = require("../mappers/CarsMapper");
const ManufacturersMapper_1 = require("../mappers/ManufacturersMapper");
const ModelsMapper_1 = require("../mappers/ModelsMapper");
const GenerationsMapper_1 = require("../mappers/GenerationsMapper");
const SearchMapper_1 = require("../mappers/SearchMapper");
class CarstatClient {
    constructor(apiKey) {
        this.headers = {};
        this.getCars = (request) => __awaiter(this, void 0, void 0, function* () {
            return (0, ofetch_1.ofetch)('/api/cars', {
                baseURL: constants_1.ClientConfig.API_URL,
                method: 'GET',
                headers: this.headers,
                query: (0, CarsMapper_1.mapCarsRequest)(request),
            })
                .then((response) => (0, CarsMapper_1.mapCarsResponse)(response))
                .catch((err) => {
                throw err;
            });
        });
        this.getManufacturers = (request) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            return (0, ofetch_1.ofetch)(`/api/manufacturers/${(_b = request === null || request === void 0 ? void 0 : request.type) !== null && _b !== void 0 ? _b : ''}`, {
                baseURL: constants_1.ClientConfig.API_URL,
                method: 'GET',
                headers: this.headers,
            })
                .then((response) => (0, ManufacturersMapper_1.mapManufacturersResponse)(response))
                .catch((err) => {
                throw err;
            });
        });
        this.getModels = (request) => __awaiter(this, void 0, void 0, function* () {
            const url = (request === null || request === void 0 ? void 0 : request.manufacturerId)
                ? request.type
                    ? `${request.manufacturerId}/${request.type}`
                    : `${request.manufacturerId}`
                : '';
            return (0, ofetch_1.ofetch)(`/api/models/${url}`, {
                baseURL: constants_1.ClientConfig.API_URL,
                method: 'GET',
                headers: this.headers,
            })
                .then((response) => (0, ModelsMapper_1.mapModelsResponse)(response))
                .catch((err) => {
                throw err;
            });
        });
        this.getGenerations = (request) => __awaiter(this, void 0, void 0, function* () {
            const url = (request === null || request === void 0 ? void 0 : request.modelId)
                ? request.type
                    ? `${request.modelId}/${request.type}`
                    : `${request.modelId}`
                : '';
            return (0, ofetch_1.ofetch)(`/api/generations/${url}`, {
                method: 'GET',
                headers: this.headers,
            })
                .then((response) => (0, GenerationsMapper_1.mapGenerationsResponse)(response))
                .catch((err) => {
                throw err;
            });
        });
        this.lotSearch = (request) => __awaiter(this, void 0, void 0, function* () {
            const url = (request === null || request === void 0 ? void 0 : request.lot)
                ? request.domain
                    ? `${request.lot}/${request.domain}`
                    : `${request.lot}`
                : '';
            return (0, ofetch_1.ofetch)(`/api/search-lot/${url}`, {
                method: 'GET',
                headers: this.headers,
                query: {
                    prices_history: request.pricesHistory ? 1 : undefined,
                    search_by_id: request.searchById ? 1 : undefined,
                },
            })
                .then((response) => (0, SearchMapper_1.mapSearchResponse)(response))
                .catch((err) => {
                throw err;
            });
        });
        this.vinSearch = (request) => __awaiter(this, void 0, void 0, function* () {
            return (0, ofetch_1.ofetch)(`/api/search-vin/${request.vin}`, {
                method: 'GET',
                headers: this.headers,
                query: {
                    prices_history: request.pricesHistory ? 1 : undefined,
                },
            })
                .then((response) => (0, SearchMapper_1.mapSearchResponse)(response))
                .catch((err) => {
                throw err;
            });
        });
        this.getArchivedLots = () => __awaiter(this, void 0, void 0, function* () { });
        this.getStatistics = () => __awaiter(this, void 0, void 0, function* () { });
        this.headers = {
            'x-api-key': apiKey,
        };
    }
}
exports.CarstatClient = CarstatClient;
_a = CarstatClient;
CarstatClient.instance = null;
CarstatClient.init = (apiKey) => {
    if (apiKey.length === 0) {
        throw new Error('API key is not set');
    }
    if (_a.instance === null) {
        _a.instance = new _a(apiKey);
    }
    return _a.instance;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBZ0M7QUFZaEMsNENBQTRDO0FBQzVDLHNEQUF3RTtBQUN4RSx3RUFBMEU7QUFDMUUsMERBQTREO0FBQzVELG9FQUFzRTtBQUN0RSwwREFBNEQ7QUFFNUQsTUFBYSxhQUFhO0lBSXhCLFlBQW9CLE1BQWM7UUFIMUIsWUFBTyxHQUEyQixFQUFFLENBQUM7UUFtQnRDLFlBQU8sR0FBRyxDQUNmLE9BQXlCLEVBQ0UsRUFBRTtZQUM3QixPQUFPLElBQUEsZUFBTSxFQUFrQixXQUFXLEVBQUU7Z0JBQzFDLE9BQU8sRUFBRSx3QkFBWSxDQUFDLE9BQU87Z0JBQzdCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDckIsS0FBSyxFQUFFLElBQUEsMkJBQWMsRUFBQyxPQUFPLENBQUM7YUFDL0IsQ0FBQztpQkFDQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUEsNEJBQWUsRUFBQyxRQUFRLENBQUMsQ0FBQztpQkFDN0MsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2IsTUFBTSxHQUFHLENBQUM7WUFDWixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQSxDQUFDO1FBRUsscUJBQWdCLEdBQUcsQ0FDeEIsT0FBa0MsRUFDRSxFQUFFOztZQUN0QyxPQUFPLElBQUEsZUFBTSxFQUNYLHNCQUFzQixNQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxJQUFJLG1DQUFJLEVBQUUsRUFBRSxFQUMzQztnQkFDRSxPQUFPLEVBQUUsd0JBQVksQ0FBQyxPQUFPO2dCQUM3QixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEIsQ0FDRjtpQkFDRSxJQUFJ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