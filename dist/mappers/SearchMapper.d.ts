import { SearchLotUserResponse, SearchVinUserResponse } from '../@types/user';
export declare function mapSearchResponse<T extends SearchLotApiResponse | SearchVinApiResponse>(response: T): T extends SearchLotApiResponse ? SearchLotUserResponse : SearchVinUserResponse;
