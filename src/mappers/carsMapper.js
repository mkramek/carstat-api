const { mapResponseMeta } = require('./mapperHelper');

/** @typedef {import('../types').CarsUserRequest} CarsUserRequest */
/** @typedef {import('../types').CarsUserResponse} CarsUserResponse */
/** @typedef {import('../types').ArchivedLotsUserRequest} ArchivedLotsUserRequest */
/** @typedef {import('../types').ArchivedLotsUserResponse} ArchivedLotsUserResponse */
/** @typedef {import('../types').GenerationsUserRequest} GenerationsUserRequest */
/** @typedef {import('../types').GenerationsUserResponse} GenerationsUserResponse */
/** @typedef {import('../types').ManufacturersUserRequest} ManufacturersUserRequest */
/** @typedef {import('../types').ManufacturersUserResponse} ManufacturersUserResponse */
/** @typedef {import('../types').ModelsUserRequest} ModelsUserRequest */
/** @typedef {import('../types').ModelsUserResponse} ModelsUserResponse */
/** @typedef {import('../types').SearchLotUserRequest} SearchLotUserRequest */
/** @typedef {import('../types').SearchLotUserResponse} SearchLotUserResponse */
/** @typedef {import('../types').SearchVinUserRequest} SearchVinUserRequest */
/** @typedef {import('../types').SearchVinUserResponse} SearchVinUserResponse */
/** @typedef {import('../types').StatisticsUserRequest} StatisticsUserRequest */
/** @typedef {import('../types').StatisticsUserResponse} StatisticsUserResponse */
/** @typedef {import('../types').CarsApiRequest} CarsApiRequest */
/** @typedef {import('../types').CarsApiResponse} CarsApiResponse */
/** @typedef {import('../types').ApiVehicleResponse} ApiVehicleResponse */
/** @typedef {import('../types').UserVehicleResponse} UserVehicleResponse */
/** @typedef {import('../types').ApiVehicleLotData} ApiVehicleLotData */
/** @typedef {import('../types').UserVehicleLotData} UserVehicleLotData */

/**
 * @param {CarsUserRequest['year']} [yearRequest]
 * @returns {Pick<CarsApiRequest, 'year' | 'from_year' | 'to_year'>}
 */
function mapYearRequest(yearRequest) {
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

/**
 * @param {CarsUserRequest['odometer']} odometerRequest
 * @returns {Pick<CarsApiRequest, 'odometer_from_km' | 'odometer_from_mi' | 'odometer_to_km' | 'odometer_to_mi'>}
 */
function mapOdometerRequest(odometerRequest) {
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

/**
 * @param {CarsUserRequest['saleDate']} saleDateRequest
 * @returns {Pick<CarsApiRequest, 'sale_date_from' | 'sale_date_in_days'>}
 */
function mapSaleDateRequest(saleDateRequest) {
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

/**
 * @param {ApiVehicleResponse['model']} modelResponse
 * @returns {UserVehicleResponse['model']}
 */
function mapModelResponse(modelResponse) {
  if (!modelResponse) {
    return null;
  }

  return {
    id: modelResponse.id,
    name: modelResponse.name,
    manufacturerId: modelResponse.manufacturer_id,
  };
}

/**
 * @param {ApiVehicleLotData['images']} lotImagesResponse
 * @returns {UserVehicleLotData['images']}
 */
function mapLotImagesResponse(lotImagesResponse) {
  if (!lotImagesResponse) {
    return null;
  }

  return {
    ...lotImagesResponse,
    externalPanoramaUrl: lotImagesResponse.external_panorama_url,
    videoYoutubeId: lotImagesResponse.video_youtube_id,
  };
}

/**
 * @param {ApiVehicleLotData['location']} locationResponse
 * @returns {UserVehicleLotData['location']}
 */
function mapLotLocationResponse(locationResponse) {
  if (!locationResponse) {
    return null;
  }

  return {
    ...locationResponse,
    isOffsite: locationResponse.is_offsite,
    postalCode: locationResponse.postal_code,
  };
}

/**
 * @param {ApiVehicleLotData['selling_branch']} sellingBranchResponse
 * @returns {UserVehicleLotData['sellingBranch']}
 */
function mapLotSellingBranchResponse(sellingBranchResponse) {
  if (!sellingBranchResponse) {
    return null;
  }

  return {
    ...sellingBranchResponse,
    domainId: sellingBranchResponse.domain_id,
  };
}

/**
 * @param {ApiVehicleResponse['lots']} lotsResponse
 * @returns {UserVehicleResponse['lots']}
 */
function mapLotsResponse(lotsResponse) {
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
    location: mapLotLocationResponse(elem.location),
  }));
}

/**
 * @param {CarsUserRequest} [request]
 * @returns {CarsApiRequest}
 */
function mapCarsRequest(request) {
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

/**
 * @param {CarsApiResponse['data']} data
 * @returns {CarsUserResponse['data']}
 */
function mapCarsResponseData(data) {
  return data.map((elem) => ({
    ...elem,
    bodyType: elem.body_type,
    vehicleType: elem.vehicle_type,
    wheelDrive: elem.drive_wheel,
    model: mapModelResponse(elem.model),
    lots: mapLotsResponse(elem.lots),
  }));
}

/**
 * @param {CarsApiResponse} response
 * @returns {CarsUserResponse}
 */
function mapCarsResponse(response) {
  return {
    data: mapCarsResponseData(response.data),
    links: response.links,
    meta: mapResponseMeta(response.meta),
  };
}

module.exports = {
  mapCarsResponse,
  mapCarsRequest,
  mapLotsResponse,
  mapModelResponse,
};
