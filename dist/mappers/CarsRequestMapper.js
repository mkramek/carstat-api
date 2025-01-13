"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMappedCarsUserRequest = getMappedCarsUserRequest;
function getMappedYear(yearRequest) {
    if (yearRequest) {
        if (typeof yearRequest === 'number') {
            return {
                year: yearRequest,
            };
        }
        return {
            from_year: yearRequest.from,
            to_year: yearRequest.to,
        };
    }
    return {};
}
function getMappedOdometer(odometerRequest) {
    if (odometerRequest) {
        if (odometerRequest.unit === 'km') {
            return {
                odometer_from_km: odometerRequest.from,
                odometer_to_km: odometerRequest.to,
            };
        }
        return {
            odometer_from_mi: odometerRequest.from,
            odometer_to_mi: odometerRequest.to,
        };
    }
    return {};
}
function getMappedSaleDate(saleDateRequest) {
    if (saleDateRequest) {
        if ('from' in saleDateRequest) {
            return {
                sale_date_from: saleDateRequest.from.toISOString(),
            };
        }
        return {
            sale_date_in_days: saleDateRequest.days,
        };
    }
    return {};
}
function getMappedCarsUserRequest(request) {
    var _a, _b, _c, _d;
    return Object.assign(Object.assign(Object.assign({ minutes: request === null || request === void 0 ? void 0 : request.minutes, per_page: request === null || request === void 0 ? void 0 : request.perPage, manufacturer_id: request === null || request === void 0 ? void 0 : request.manufacturerId, model_id: request === null || request === void 0 ? void 0 : request.modelId, generation_id: request === null || request === void 0 ? void 0 : request.generationId, vehicle_type: request === null || request === void 0 ? void 0 : request.vehicleType, buy_now: (request === null || request === void 0 ? void 0 : request.buyNow) ? 1 : undefined, domain_id: request === null || request === void 0 ? void 0 : request.domainId, search_query: request === null || request === void 0 ? void 0 : request.searchQuery, status: request === null || request === void 0 ? void 0 : request.status, vin: request === null || request === void 0 ? void 0 : request.vin, name: request === null || request === void 0 ? void 0 : request.name, document_title: request === null || request === void 0 ? void 0 : request.documentTitle, cylinders: request === null || request === void 0 ? void 0 : request.cylinders, engine: request === null || request === void 0 ? void 0 : request.engine, body_type: request === null || request === void 0 ? void 0 : request.bodyType, color: request === null || request === void 0 ? void 0 : request.color, transmission: request === null || request === void 0 ? void 0 : request.transmission, drive_wheel: request === null || request === void 0 ? void 0 : request.wheelDrive, country: request === null || request === void 0 ? void 0 : request.country, state_code: request === null || request === void 0 ? void 0 : request.stateCode, fuel_type: request === null || request === void 0 ? void 0 : request.fuelType, condition: request === null || request === void 0 ? void 0 : request.condition, damage: request === null || request === void 0 ? void 0 : request.damage, prices_history: (request === null || request === void 0 ? void 0 : request.pricesHistory) ? 1 : undefined, buy_now_price_from: (_a = request === null || request === void 0 ? void 0 : request.buyNowPrice) === null || _a === void 0 ? void 0 : _a.from, buy_now_price_to: (_b = request === null || request === void 0 ? void 0 : request.buyNowPrice) === null || _b === void 0 ? void 0 : _b.to, bid_price_from: (_c = request === null || request === void 0 ? void 0 : request.bidPrice) === null || _c === void 0 ? void 0 : _c.from, bid_price_to: (_d = request === null || request === void 0 ? void 0 : request.bidPrice) === null || _d === void 0 ? void 0 : _d.to, simple_paginate: (request === null || request === void 0 ? void 0 : request.paginate) ? 1 : undefined }, getMappedYear(request === null || request === void 0 ? void 0 : request.year)), getMappedOdometer(request === null || request === void 0 ? void 0 : request.odometer)), getMappedSaleDate(request === null || request === void 0 ? void 0 : request.saleDate));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2Fyc1JlcXVlc3RNYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWFwcGVycy9DYXJzUmVxdWVzdE1hcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQThEQSw0REFzQ0M7QUFsR0QsU0FBUyxhQUFhLENBQ3BCLFdBQW9DO0lBRXBDLElBQUksV0FBVyxFQUFFLENBQUM7UUFDaEIsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUNwQyxPQUFPO2dCQUNMLElBQUksRUFBRSxXQUFXO2FBQ2xCLENBQUM7UUFDSixDQUFDO1FBRUQsT0FBTztZQUNMLFNBQVMsRUFBRSxXQUFXLENBQUMsSUFBSTtZQUMzQixPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUU7U0FDeEIsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUN4QixlQUE0QztJQUs1QyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksZUFBZSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxPQUFPO2dCQUNMLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxJQUFJO2dCQUN0QyxjQUFjLEVBQUUsZUFBZSxDQUFDLEVBQUU7YUFDbkMsQ0FBQztRQUNKLENBQUM7UUFFRCxPQUFPO1lBQ0wsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLElBQUk7WUFDdEMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FDeEIsZUFBNEM7SUFFNUMsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLE1BQU0sSUFBSSxlQUFlLEVBQUUsQ0FBQztZQUM5QixPQUFPO2dCQUNMLGNBQWMsRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTthQUNuRCxDQUFD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