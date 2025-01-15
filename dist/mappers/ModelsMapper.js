"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapModelsResponse = mapModelsResponse;
const MapperHelper_1 = require("./MapperHelper");
function mapModelsResponseData(modelsResponseData) {
    return modelsResponseData.map((elem) => (Object.assign(Object.assign({}, elem), { carsQty: elem.cars_qty, generationsQty: elem.generations_qty, manufacturerId: elem.manufacturer_id })));
}
function mapModelsResponse(modelsResponse) {
    return {
        data: mapModelsResponseData(modelsResponse.data),
        links: modelsResponse.links,
        meta: (0, MapperHelper_1.mapResponseMeta)(modelsResponse.meta),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxzTWFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21hcHBlcnMvTW9kZWxzTWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBY0EsOENBTUM7QUFuQkQsaURBQWlEO0FBRWpELFNBQVMscUJBQXFCLENBQzVCLGtCQUE2QztJQUU3QyxPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsaUNBQ25DLElBQUksS0FDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFDdEIsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQ3BDLGNBQWMsRUFBRSxJQUFJLENBQUMsZUFBZSxJQUNwQyxDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQUMsY0FBaUM7SUFDakUsT0FBTztRQUNMLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1FBQ2hELEtBQUssRUFBRSxjQUFjLENBQUMsS0FBSztRQUMzQixJQUFJLEVBQUUsSUFBQSw4QkFBZSxFQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7S0FDM0MsQ0FBQztBQUNKLENBQUMifQ==