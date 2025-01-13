import { CarsUserRequest, CarsUserResponse } from '../@types/user';
import { mapResponseMeta } from './MapperHelper';

function mapYearRequest(
  yearRequest: CarsUserRequest['year']
): Pick<CarsApiRequest, 'year' | 'from_year' | 'to_year'> {
  if (yearRequest) {
    if (typeof yearRequest === 'number') {
      return {
        year: yearRequest,
      };
    }

    return {
      from_year: yearRequest.from,
      to_year: yearRequest.to,
    };
  }

  return {};
}

function mapOdometerRequest(
  odometerRequest: CarsUserRequest['odometer']
): Pick<
  CarsApiRequest,
  'odometer_from_km' | 'odometer_from_mi' | 'odometer_to_km' | 'odometer_to_mi'
> {
  if (odometerRequest) {
    if (odometerRequest.unit === 'km') {
      return {
        odometer_from_km: odometerRequest.from,
        odometer_to_km: odometerRequest.to,
      };
    }

    return {
      odometer_from_mi: odometerRequest.from,
      odometer_to_mi: odometerRequest.to,
    };
  }

  return {};
}

function mapSaleDateRequest(
  saleDateRequest: CarsUserRequest['saleDate']
): Pick<CarsApiRequest, 'sale_date_from' | 'sale_date_in_days'> {
  if (saleDateRequest) {
    if ('from' in saleDateRequest) {
      return {
        sale_date_from: saleDateRequest.from.toISOString(),
      };
    }

    return {
      sale_date_in_days: saleDateRequest.days,
    };
  }

  return {};
}

export function mapModelResponse(
  modelResponse: ApiVehicleResponse['model']
): UserVehicleResponse['model'] {
  if (!modelResponse) {
    return null;
  }

  return {
    id: modelResponse.id,
    name: modelResponse.name,
    manufacturerId: modelResponse.manufacturer_id,
  };
}

function mapLotImagesResponse(
  lotImagesResponse: ApiVehicleLotData['images']
): UserVehicleLotData['images'] {
  if (!lotImagesResponse) {
    return null;
  }

  return {
    ...lotImagesResponse,
    externalPanoramaUrl: lotImagesResponse.external_panorama_url,
    videoYoutubeId: lotImagesResponse.video_youtube_id,
  };
}

function mapLotSellingBranchResponse(
  sellingBranchResponse: ApiVehicleLotData['selling_branch']
): UserVehicleLotData['sellingBranch'] {
  if (!sellingBranchResponse) {
    return null;
  }

  return {
    ...sellingBranchResponse,
    domainId: sellingBranchResponse.domain_id,
  };
}

export function mapLotsResponse(
  lotsResponse: ApiVehicleResponse['lots']
): UserVehicleResponse['lots'] {
  if (!lotsResponse) {
    return null;
  }
  return lotsResponse.map((elem) => ({
    ...elem,
    actualCashValue: elem.actual_cash_value,
    bidUpdatedAt: elem.bid_updated_at ? new Date(elem.bid_updated_at) : null,
    buyNowUpdatedAt: elem.buy_now_updated_at
      ? new Date(elem.buy_now_updated_at)
      : null,
    buyNow: elem.buy_now,
    cleanWholesalePrice: elem.clean_wholesale_price,
    createdAt: elem.created_at ? new Date(elem.created_at) : null,
    updatedAt: elem.updated_at ? new Date(elem.updated_at) : null,
    detailedTitle: elem.detailed_title,
    estimateRepairPrice: elem.estimate_repair_price,
    externalId: elem.external_id,
    finalBid: elem.final_bid,
    finalBidUpdatedAt: elem.final_bid_updated_at
      ? new Date(elem.final_bid_updated_at)
      : null,
    gradeIaai: elem.grade_iaai,
    keysAvailable: elem.keys_available,
    preAccidentPrice: elem.pre_accident_price,
    saleDate: elem.sale_date ? new Date(elem.sale_date) : null,
    saleDateUpdatedAt: elem.sale_date_updated_at
      ? new Date(elem.sale_date_updated_at)
      : null,
    sellerType: elem.seller_type,
    sellingBranch: mapLotSellingBranchResponse(elem.selling_branch),
    images: mapLotImagesResponse(elem.images),
  }));
}

export function mapCarsRequest(request?: CarsUserRequest): CarsApiRequest {
  return {
    minutes: request?.minutes,
    per_page: request?.perPage,
    manufacturer_id: request?.manufacturerId,
    model_id: request?.modelId,
    generation_id: request?.generationId,
    vehicle_type: request?.vehicleType,
    buy_now: request?.buyNow ? 1 : undefined,
    domain_id: request?.domainId,
    search_query: request?.searchQuery,
    status: request?.status,
    vin: request?.vin,
    name: request?.name,
    document_title: request?.documentTitle,
    cylinders: request?.cylinders,
    engine: request?.engine,
    body_type: request?.bodyType,
    color: request?.color,
    transmission: request?.transmission,
    drive_wheel: request?.wheelDrive,
    country: request?.country,
    state_code: request?.stateCode,
    fuel_type: request?.fuelType,
    condition: request?.condition,
    damage: request?.damage,
    prices_history: request?.pricesHistory ? 1 : undefined,
    buy_now_price_from: request?.buyNowPrice?.from,
    buy_now_price_to: request?.buyNowPrice?.to,
    bid_price_from: request?.bidPrice?.from,
    bid_price_to: request?.bidPrice?.to,
    simple_paginate: request?.paginate ? 1 : undefined,
    ...mapYearRequest(request?.year),
    ...mapOdometerRequest(request?.odometer),
    ...mapSaleDateRequest(request?.saleDate),
  };
}

function mapCarsResponseData(
  data: CarsApiResponse['data']
): CarsUserResponse['data'] {
  return data.map((elem) => ({
    ...elem,
    bodyType: elem.body_type,
    vehicleType: elem.vehicle_type,
    wheelDrive: elem.drive_wheel,
    model: mapModelResponse(elem.model),
    lots: mapLotsResponse(elem.lots),
  }));
}

export function mapCarsResponse(response: CarsApiResponse): CarsUserResponse {
  return {
    data: mapCarsResponseData(response.data),
    links: response.links,
    meta: mapResponseMeta(response.meta),
  };
}
