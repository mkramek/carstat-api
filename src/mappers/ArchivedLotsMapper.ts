import type { ArchivedLotsApiResponse } from '../types/api.js';
import { mapResponseMeta } from './MapperHelper.js';
import type { ArchivedLotsUserResponse } from '../types/user.js';

export function mapArchivedLotsResponse(
  response: ArchivedLotsApiResponse
): ArchivedLotsUserResponse {
  return {
    meta: mapResponseMeta(response.meta),
    links: response.links,
    data: response.data.map((elem) => ({
      ...elem,
      lotId: elem.lot_id,
      carId: elem.car_id,
      finalBidUpdatedAt: elem.final_bid_updated_at
        ? new Date(elem.final_bid_updated_at)
        : null,
    })),
  };
}
