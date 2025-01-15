"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapGenerationsResponse = mapGenerationsResponse;
const MapperHelper_1 = require("./MapperHelper");
function mapGenerationsResponseData(data) {
    return data.map((elem) => (Object.assign(Object.assign({}, elem), { carsQty: elem.cars_qty, fromYear: elem.from_year, manufacturerId: elem.manufacturer_id, modelId: elem.model_id, toYear: elem.to_year })));
}
function mapGenerationsResponse(response) {
    return {
        data: mapGenerationsResponseData(response.data),
        links: response.links,
        meta: (0, MapperHelper_1.mapResponseMeta)(response.meta),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJhdGlvbnNNYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWFwcGVycy9HZW5lcmF0aW9uc01hcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdCQSx3REFRQztBQXZCRCxpREFBaUQ7QUFFakQsU0FBUywwQkFBMEIsQ0FDakMsSUFBb0M7SUFFcEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxpQ0FDckIsSUFBSSxLQUNQLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFDeEIsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQ3BDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUN0QixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFDcEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELFNBQWdCLHNCQUFzQixDQUNwQyxRQUFnQztJQUVoQyxPQUFPO1FBQ0wsSUFBSSxFQUFFLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDL0MsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO1FBQ3JCLElBQUksRUFBRSxJQUFBLDhCQUFlLEVBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztLQUNyQyxDQUFDO0FBQ0osQ0FBQyJ9