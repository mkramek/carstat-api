import { CarsUserRequest } from '../@types/user';
export declare class CarstatClient {
    private headers;
    private static instance;
    private constructor();
    static init: (apiKey: string) => CarstatClient;
    getCars: (request?: CarsUserRequest) => Promise<CarsApiResponse>;
}
