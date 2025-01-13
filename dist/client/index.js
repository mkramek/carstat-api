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
const CarsRequestMapper_1 = require("../mappers/CarsRequestMapper");
class CarstatClient {
    constructor(apiKey) {
        this.headers = {};
        this.getCars = (request) => __awaiter(this, void 0, void 0, function* () {
            return (0, ofetch_1.ofetch)('/api/cars', {
                baseURL: constants_1.ClientConfig.API_URL,
                method: 'GET',
                headers: this.headers,
                query: (0, CarsRequestMapper_1.getMappedCarsUserRequest)(request),
            })
                .then((response) => response)
                .catch((err) => {
                throw err;
            });
        });
        this.headers = {
            'x-api-key': apiKey,
        };
        console.log(this.headers);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBZ0M7QUFFaEMsNENBQTRDO0FBQzVDLG9FQUF3RTtBQUV4RSxNQUFhLGFBQWE7SUFJeEIsWUFBb0IsTUFBYztRQUgxQixZQUFPLEdBQTJCLEVBQUUsQ0FBQztRQW9CdEMsWUFBTyxHQUFHLENBQU8sT0FBeUIsRUFBRSxFQUFFO1lBQ25ELE9BQU8sSUFBQSxlQUFNLEVBQUMsV0FBVyxFQUFFO2dCQUN6QixPQUFPLEVBQUUsd0JBQVksQ0FBQyxPQUFPO2dCQUM3QixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLEtBQUssRUFBRSxJQUFBLDRDQUF3QixFQUFDLE9BQU8sQ0FBQzthQUN6QyxDQUFDO2lCQUNDLElBQUksQ0FBQyxDQUFDLFFBQXlCLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDN0MsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2IsTUFBTSxHQUFHLENBQUM7WUFDWixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQSxDQUFDO1FBM0JBLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixXQUFXLEVBQUUsTUFBTTtTQUNwQixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7QUFUSCxzQ0FpQ0M7O0FBL0JnQixzQkFBUSxHQUF5QixJQUFJLEFBQTdCLENBQThCO0FBU3ZDLGtCQUFJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRTtJQUN0QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxJQUFJLEVBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDM0IsRUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsT0FBTyxFQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3ZCLENBQUMsQUFSaUIsQ0FRaEIifQ==