"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapModelResponse = mapModelResponse;
exports.mapLotsResponse = mapLotsResponse;
exports.mapCarsRequest = mapCarsRequest;
exports.mapCarsResponse = mapCarsResponse;
const MapperHelper_1 = require("./MapperHelper");
function mapYearRequest(yearRequest) {
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
function mapOdometerRequest(odometerRequest) {
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
function mapSaleDateRequest(saleDateRequest) {
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
function mapModelResponse(modelResponse) {
    if (!modelResponse) {
        return null;
    }
    return {
        id: modelResponse.id,
        name: modelResponse.name,
        manufacturerId: modelResponse.manufacturer_id,
    };
}
function mapLotImagesResponse(lotImagesResponse) {
    if (!lotImagesResponse) {
        return null;
    }
    return Object.assign(Object.assign({}, lotImagesResponse), { externalPanoramaUrl: lotImagesResponse.external_panorama_url, videoYoutubeId: lotImagesResponse.video_youtube_id });
}
function mapLotSellingBranchResponse(sellingBranchResponse) {
    if (!sellingBranchResponse) {
        return null;
    }
    return Object.assign(Object.assign({}, sellingBranchResponse), { domainId: sellingBranchResponse.domain_id });
}
function mapLotsResponse(lotsResponse) {
    if (!lotsResponse) {
        return null;
    }
    return lotsResponse.map((elem) => (Object.assign(Object.assign({}, elem), { actualCashValue: elem.actual_cash_value, bidUpdatedAt: elem.bid_updated_at ? new Date(elem.bid_updated_at) : null, buyNowUpdatedAt: elem.buy_now_updated_at
            ? new Date(elem.buy_now_updated_at)
            : null, buyNow: elem.buy_now, cleanWholesalePrice: elem.clean_wholesale_price, createdAt: elem.created_at ? new Date(elem.created_at) : null, updatedAt: elem.updated_at ? new Date(elem.updated_at) : null, detailedTitle: elem.detailed_title, estimateRepairPrice: elem.estimate_repair_price, externalId: elem.external_id, finalBid: elem.final_bid, finalBidUpdatedAt: elem.final_bid_updated_at
            ? new Date(elem.final_bid_updated_at)
            : null, gradeIaai: elem.grade_iaai, keysAvailable: elem.keys_available, preAccidentPrice: elem.pre_accident_price, saleDate: elem.sale_date ? new Date(elem.sale_date) : null, saleDateUpdatedAt: elem.sale_date_updated_at
            ? new Date(elem.sale_date_updated_at)
            : null, sellerType: elem.seller_type, sellingBranch: mapLotSellingBranchResponse(elem.selling_branch), images: mapLotImagesResponse(elem.images) })));
}
function mapCarsRequest(request) {
    var _a, _b, _c, _d;
    return Object.assign(Object.assign(Object.assign({ minutes: request === null || request === void 0 ? void 0 : request.minutes, per_page: request === null || request === void 0 ? void 0 : request.perPage, manufacturer_id: request === null || request === void 0 ? void 0 : request.manufacturerId, model_id: request === null || request === void 0 ? void 0 : request.modelId, generation_id: request === null || request === void 0 ? void 0 : request.generationId, vehicle_type: request === null || request === void 0 ? void 0 : request.vehicleType, buy_now: (request === null || request === void 0 ? void 0 : request.buyNow) ? 1 : undefined, domain_id: request === null || request === void 0 ? void 0 : request.domainId, search_query: request === null || request === void 0 ? void 0 : request.searchQuery, status: request === null || request === void 0 ? void 0 : request.status, vin: request === null || request === void 0 ? void 0 : request.vin, name: request === null || request === void 0 ? void 0 : request.name, document_title: request === null || request === void 0 ? void 0 : request.documentTitle, cylinders: request === null || request === void 0 ? void 0 : request.cylinders, engine: request === null || request === void 0 ? void 0 : request.engine, body_type: request === null || request === void 0 ? void 0 : request.bodyType, color: request === null || request === void 0 ? void 0 : request.color, transmission: request === null || request === void 0 ? void 0 : request.transmission, drive_wheel: request === null || request === void 0 ? void 0 : request.wheelDrive, country: request === null || request === void 0 ? void 0 : request.country, state_code: request === null || request === void 0 ? void 0 : request.stateCode, fuel_type: request === null || request === void 0 ? void 0 : request.fuelType, condition: request === null || request === void 0 ? void 0 : request.condition, damage: request === null || request === void 0 ? void 0 : request.damage, prices_history: (request === null || request === void 0 ? void 0 : request.pricesHistory) ? 1 : undefined, buy_now_price_from: (_a = request === null || request === void 0 ? void 0 : request.buyNowPrice) === null || _a === void 0 ? void 0 : _a.from, buy_now_price_to: (_b = request === null || request === void 0 ? void 0 : request.buyNowPrice) === null || _b === void 0 ? void 0 : _b.to, bid_price_from: (_c = request === null || request === void 0 ? void 0 : request.bidPrice) === null || _c === void 0 ? void 0 : _c.from, bid_price_to: (_d = request === null || request === void 0 ? void 0 : request.bidPrice) === null || _d === void 0 ? void 0 : _d.to, simple_paginate: (request === null || request === void 0 ? void 0 : request.paginate) ? 1 : undefined }, mapYearRequest(request === null || request === void 0 ? void 0 : request.year)), mapOdometerRequest(request === null || request === void 0 ? void 0 : request.odometer)), mapSaleDateRequest(request === null || request === void 0 ? void 0 : request.saleDate));
}
function mapCarsResponseData(data) {
    return data.map((elem) => (Object.assign(Object.assign({}, elem), { bodyType: elem.body_type, vehicleType: elem.vehicle_type, wheelDrive: elem.drive_wheel, model: mapModelResponse(elem.model), lots: mapLotsResponse(elem.lots) })));
}
function mapCarsResponse(response) {
    return {
        data: mapCarsResponseData(response.data),
        links: response.links,
        meta: (0, MapperHelper_1.mapResponseMeta)(response.meta),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2Fyc01hcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXBwZXJzL0NhcnNNYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUErREEsNENBWUM7QUE2QkQsMENBbUNDO0FBRUQsd0NBb0NDO0FBZUQsMENBTUM7QUFyTUQsaURBQWlEO0FBRWpELFNBQVMsY0FBYyxDQUNyQixXQUFvQztJQUVwQyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ2hCLElBQUksT0FBTyxXQUFXLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDcEMsT0FBTztnQkFDTCxJQUFJLEVBQUUsV0FBVzthQUNsQixDQUFDO1FBQ0osQ0FBQztRQUVELE9BQU87WUFDTCxTQUFTLEVBQUUsV0FBVyxDQUFDLElBQUk7WUFDM0IsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUFFO1NBQ3hCLENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FDekIsZUFBNEM7SUFLNUMsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLGVBQWUsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDbEMsT0FBTztnQkFDTCxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsSUFBSTtnQkFDdEMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxFQUFFO2FBQ25DLENBQUM7UUFDSixDQUFDO1FBRUQsT0FBTztZQUNMLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxJQUFJO1lBQ3RDLGNBQWMsRUFBRSxlQUFlLENBQUMsRUFBRTtTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQ3pCLGVBQTRDO0lBRTVDLElBQUksZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxNQUFNLElBQUksZUFBZSxFQUFFLENBQUM7WUFDOUIsT0FBTztnQkFDTCxjQUFjLEVBQUUsZUFBZSxD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