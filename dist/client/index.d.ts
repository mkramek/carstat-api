import { CarsUserRequest, CarsUserResponse, GenerationsUserRequest, ManufacturersUserRequest, ManufacturersUserResponse, ModelsUserRequest, ModelsUserResponse, SearchLotUserRequest, SearchVinUserRequest } from '../@types/user';
export declare class CarstatClient {
    private headers;
    private static instance;
    private constructor();
    static init: (apiKey: string) => CarstatClient;
    getCars: (request?: CarsUserRequest) => Promise<CarsUserResponse>;
    getManufacturers: (request?: ManufacturersUserRequest) => Promise<ManufacturersUserResponse>;
    getModels: (request?: ModelsUserRequest) => Promise<ModelsUserResponse>;
    getGenerations: (request?: GenerationsUserRequest) => Promise<import("../@types/user").GenerationsUserResponse>;
    lotSearch: (request: SearchLotUserRequest) => Promise<import("../@types/user").SearchLotUserResponse>;
    vinSearch: (request: SearchVinUserRequest) => Promise<import("../@types/user").SearchLotUserResponse>;
    getArchivedLots: () => Promise<void>;
    getStatistics: () => Promise<void>;
}
