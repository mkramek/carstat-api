"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapManufacturersResponse = mapManufacturersResponse;
const MapperHelper_1 = require("./MapperHelper");
function mapManufacturersResponse(response) {
    return Object.assign(Object.assign({}, response), { data: response.data.map((elem) => (Object.assign(Object.assign({}, elem), { carsQty: elem.cars_qty, modelsQty: elem.models_qty }))), meta: (0, MapperHelper_1.mapResponseMeta)(response.meta) });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFudWZhY3R1cmVyc01hcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXBwZXJzL01hbnVmYWN0dXJlcnNNYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSw0REFZQztBQWRELGlEQUFpRDtBQUVqRCxTQUFnQix3QkFBd0IsQ0FDdEMsUUFBa0M7SUFFbEMsdUNBQ0ssUUFBUSxLQUNYLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsaUNBQzdCLElBQUksS0FDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLElBQzFCLENBQUMsRUFDSCxJQUFJLEVBQUUsSUFBQSw4QkFBZSxFQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFDcEM7QUFDSixDQUFDIn0=