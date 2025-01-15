import { CarsUserRequest, CarsUserResponse } from '../@types/user';
export declare function mapModelResponse(modelResponse: ApiVehicleResponse['model']): UserVehicleResponse['model'];
export declare function mapLotsResponse(lotsResponse: ApiVehicleResponse['lots']): UserVehicleResponse['lots'];
export declare function mapCarsRequest(request?: CarsUserRequest): CarsApiRequest;
export declare function mapCarsResponse(response: CarsApiResponse): CarsUserResponse;
