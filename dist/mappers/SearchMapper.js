"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapSearchResponse = mapSearchResponse;
const CarsMapper_1 = require("./CarsMapper");
const MapperHelper_1 = require("./MapperHelper");
function mapSearchResponseData(data) {
    return Object.assign(Object.assign({}, data), { bodyType: data.body_type, vehicleType: data.vehicle_type, wheelDrive: data.drive_wheel, model: (0, CarsMapper_1.mapModelResponse)(data.model), lots: (0, CarsMapper_1.mapLotsResponse)(data.lots) });
}
function mapSearchResponse(response) {
    return {
        data: mapSearchResponseData(response.data),
        links: response.links,
        meta: (0, MapperHelper_1.mapResponseMeta)(response.meta),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoTWFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21hcHBlcnMvU2VhcmNoTWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBaUJBLDhDQVlDO0FBNUJELDZDQUFpRTtBQUNqRSxpREFBaUQ7QUFFakQsU0FBUyxxQkFBcUIsQ0FDNUIsSUFBaUU7SUFFakUsdUNBQ0ssSUFBSSxLQUNQLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUN4QixXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFDOUIsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQzVCLEtBQUssRUFBRSxJQUFBLDZCQUFnQixFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDbkMsSUFBSSxFQUFFLElBQUEsNEJBQWUsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQ2hDO0FBQ0osQ0FBQztBQUVELFNBQWdCLGlCQUFpQixDQUcvQixRQUFXO0lBSVgsT0FBTztRQUNMLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzFDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztRQUNyQixJQUFJLEVBQUUsSUFBQSw4QkFBZSxFQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FDckMsQ0FBQztBQUNKLENBQUMifQ==