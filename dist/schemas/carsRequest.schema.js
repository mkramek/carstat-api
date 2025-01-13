"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRequest = void 0;
const zod_1 = __importDefault(require("zod"));
exports.carsRequest = zod_1.default.object({
    minutes: zod_1.default.onumber(),
    per_page: zod_1.default.onumber(),
    manufacturer_id: zod_1.default.onumber(),
    model_id: zod_1.default.onumber(),
    generation_id: zod_1.default.onumber(),
    from_year: zod_1.default.onumber(),
    to_year: zod_1.default.onumber(),
    year: zod_1.default.onumber(),
    vehicle_type: zod_1.default.onumber(),
    buy_now: zod_1.default.onumber(),
    domain_id: zod_1.default.onumber(),
    search_query: zod_1.default.ostring(),
    status: zod_1.default.onumber(),
    vin: zod_1.default.ostring(),
    name: zod_1.default.ostring(),
    document_title: zod_1.default.ostring(),
    cylinders: zod_1.default.onumber(),
    engine: zod_1.default.ostring(),
    body_type: zod_1.default.onumber(),
    color: zod_1.default.onumber(),
    transmission: zod_1.default.onumber(),
    drive_wheel: zod_1.default.onumber(),
    country: zod_1.default.ostring(),
    state_code: zod_1.default.ostring(),
    fuel_type: zod_1.default.onumber(),
    condition: zod_1.default.onumber(),
    damage: zod_1.default.ostring(),
    prices_history: zod_1.default.onumber(),
    sale_date_in_days: zod_1.default.onumber(),
    sale_date_from: zod_1.default.ostring(),
    odometer_from_km: zod_1.default.onumber(),
    odometer_to_km: zod_1.default.onumber(),
    odometer_from_mi: zod_1.default.onumber(),
    odometer_to_mi: zod_1.default.onumber(),
    buy_now_price_from: zod_1.default.onumber(),
    buy_now_price_to: zod_1.default.onumber(),
    bid_price_from: zod_1.default.onumber(),
    bid_price_to: zod_1.default.onumber(),
    simple_paginate: zod_1.default.onumber(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyc1JlcXVlc3Quc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjaGVtYXMvY2Fyc1JlcXVlc3Quc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhDQUFvQjtBQUVQLFFBQUEsV0FBVyxHQUFHLGFBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbEMsT0FBTyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDcEIsUUFBUSxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDckIsZUFBZSxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDNUIsUUFBUSxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDckIsYUFBYSxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDMUIsU0FBUyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDdEIsT0FBTyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDcEIsSUFBSSxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDakIsWUFBWSxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDekIsT0FBTyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDcEIsU0FBUyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDdEIsWUFBWSxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDekIsTUFBTSxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDbkIsR0FBRyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDaEIsSUFBSSxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDakIsY0FBYyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDM0IsU0FBUyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDdEIsTUFBTSxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDbkIsU0FBUyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDdEIsS0FBSyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDbEIsWUFBWSxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDekIsV0FBVyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDeEIsT0FBTyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDcEIsVUFBVSxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDdkIsU0FBUyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDdEIsU0FBUyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDdEIsTUFBTSxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDbkIsY0FBYyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDM0IsaUJBQWlCLEVBQUUsYUFBQyxDQUFDLE9BQU8sRUFBRTtJQUM5QixjQUFjLEVBQUUsYUFBQyxDQUFDLE9BQU8sRUFBRTtJQUMzQixnQkFBZ0IsRUFBRSxhQUFDLENBQUMsT0FBTyxFQUFFO0lBQzdCLGNBQWMsRUFBRSxhQUFDLENBQUMsT0FBTyxFQUFFO0lBQzNCLGdCQUFnQixFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDN0IsY0FBYyxFQUFFLGFBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDM0Isa0JBQWtCLEVBQUUsYUFBQyxDQUFDLE9BQU8sRUFBRTtJQUMvQixnQkFBZ0IsRUFBRSxhQUFDLENBQUMsT0FBTyxFQUFFO0lBQzdCLGNBQWMsRUFBRSxhQUFDLENBQUMsT0FBTyxFQUFFO0lBQzNCLFlBQVksRUFBRSxhQUFDLENBQUMsT0FBTyxFQUFFO0lBQ3pCLGVBQWUsRUFBRSxhQUFDLENBQUMsT0FBTyxFQUFFO0NBQzdCLENBQUMsQ0FBQyJ9