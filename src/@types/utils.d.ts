declare type YearInterval = {
  from?: number;
  to?: number;
};

declare type SaleDateFrom = {
  from: Date;
};

declare type SaleDateDaysAgo = {
  days: number;
};

declare type SaleDate = SaleDateFrom | SaleDateDaysAgo;

declare type OdometerInterval = {
  unit: 'km' | 'mi';
  from?: number;
  to?: number;
};

declare type PriceInterval = {
  from?: number;
  to?: number;
};

declare type ManufacturerType = 'cars' | 'motorcycles';

declare type VehicleDataObject = {
  id: number;
  name: string;
};

declare type ApiVehicleResponseModel = VehicleDataObject & {
  manufacturer_id: number | null;
};

declare type VehicleLotOdometerData = {
  km: number | null;
  mi: number | null;
  status: VehicleDataObject | null;
};

declare type VehicleLotDamageData = {
  main: VehicleDataObject | null;
  second: VehicleDataObject | null;
};

declare type ApiVehicleLotImagesData = {
  id: number | null;
  small: string[] | null;
  normal: string[] | null;
  big: string[] | null;
  exterior: string[] | null;
  interior: string[] | null;
  video: string | null;
  video_youtube_id: string | null;
  external_panorama_url: string | null;
  downloaded: string[] | null;
};

declare type ApiVehicleLotLocationData = {
  country: {
    iso: string;
    name: string;
  } | null;
  state:
    | (VehicleDataObject & {
        code: string | null;
      })
    | null;
  city: VehicleDataObject | null;
  location: VehicleDataObject | null;
  latitude: number | null;
  longitude: number | null;
  postal_code: string | null;
  is_offsite: boolean | null;
  raw: string | null;
};

declare type ApiVehicleLotSellingBranchData = VehicleDataObject & {
  link: string | null;
  number: number | null;
  domain_id: number | null;
};

declare type ApiVehicleLotData = {
  id: number | null;
  lot: string | null;
  domain: VehicleDataObject | null;
  external_id: string | null;
  odometer: VehicleLotOdometerData | null;
  estimate_repair_price: number | null;
  pre_accident_price: number | null;
  clean_wholesale_price: number | null;
  actual_cash_value: number | null;
  sale_date: string | null;
  sale_date_updated_at: string | null;
  bid: number | null;
  bid_updated_at: string | null;
  buy_now: number | null;
  buy_now_updated_at: string | null;
  final_bid: number | null;
  final_bid_updated_at: string | null;
  status: VehicleDataObject;
  seller: string | null;
  seller_type: VehicleDataObject;
  title: string | null;
  detailed_title: string | null;
  damage: VehicleLotDamageData | null;
  keys_available: boolean | null;
  airbags: VehicleDataObject | null;
  condition: VehicleDataObject | null;
  grade_iaai: string | null;
  images: ApiVehicleLotImagesData | null;
  location: ApiVehicleLotLocationData | null;
  selling_branch: ApiVehicleLotSellingBranchData | null;
  created_at: string | null;
  updated_at: string | null;
  details: Record<string, unknown>;
};

declare type ApiVehicleResponse = {
  id: number | null;
  year: number | null;
  title: string | null;
  vin: string | null;
  manufacturer: VehicleDataObject | null;
  model: ApiVehicleResponseModel | null;
  generation: string | number | null;
  body_type: VehicleDataObject | null;
  color: VehicleDataObject | null;
  engine: VehicleDataObject | null;
  transmission: VehicleDataObject | null;
  drive_wheel: VehicleDataObject | null;
  vehicle_type: VehicleDataObject | null;
  fuel: VehicleDataObject | null;
  cylinders: number | null;
  lots: ApiVehicleLotData[] | null;
};

declare type ApiResponseLinks = {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
};

declare type ApiResponseMetaLink = {
  url: string | null;
  label: string | null;
  active: boolean | null;
};

declare type ApiResponseMeta = {
  current_page: number | null;
  from: number | null;
  to: number | null;
  links: ApiResponseMetaLink[] | null;
  path: string | null;
  per_page: number | null;
  last_page: number | null;
  total: number | null;
};

declare type ApiManufacturersResponse = {
  id: number;
  name: string | null;
  cars_qty: number | null;
  image: string | null;
  models_qty: number | null;
};

declare type ApiModelsResponse = {
  id: number;
  name: string | null;
  cars_qty: number | null;
  manufacturer_id: number | null;
  generations_qty: number | null;
};

declare type ApiGenerationsResponse = {
  id: number;
  name: string | null;
  cars_qty: number | null;
  from_year: number | null;
  to_year: number | null;
  manufacturer_id: number | null;
  model_id: number | null;
};

declare type ApiArchivedAuctionResponse = {
  lot_id: number | null;
  car_id: number | null;
  vin: string | null;
  lot: string | null;
  domain: VehicleDataObject | null;
  status: VehicleDataObject | null;
  bid: number | null;
  final_bid_updated_at: string | null;
};

declare type ApiStatisticsResponse = {
  id: number;
  year: number | null;
  vehicle_type: VehicleDataObject | null;
  avg_final_bid: number | null;
  max_final_bid: number | null;
  min_final_bid: number | null;
  lot_count: number | null;
  calculated_at: string | null;
  year_calc_at: number | null;
  month_calc_at: number | null;
  day_calc_at: number | null;
  manufacturer: VehicleDataObject | null;
  car_model: VehicleDataObject | null;
  generation: VehicleDataObject | null;
  engine: VehicleDataObject | null;
  domain: VehicleDataObject | null;
};

declare type UserResponseLinks = ApiResponseLinks;

declare type UserResponseMetaLink = ApiResponseMetaLink;

declare type UserResponseMeta = Pick<
  ApiResponseMeta,
  'from' | 'to' | 'path' | 'total'
> & {
  currentPage: number | null;
  links: UserResponseMetaLink[] | null;
  perPage: number | null;
  lastPage: number | null;
};

declare type UserManufacturersResponse = Pick<
  ApiManufacturersResponse,
  'id' | 'name' | 'image'
> & {
  carsQty: number | null;
  modelsQty: number | null;
};

declare type UserModelsResponse = Pick<ApiModelsResponse, 'id' | 'name'> & {
  id: number;
  name: string | null;
  carsQty: number | null;
  manufacturerId: number | null;
  generationsQty: number | null;
};

declare type UserGenerationsResponse = Pick<
  ApiGenerationsResponse,
  'id' | 'name'
> & {
  carsQty: number | null;
  fromYear: number | null;
  toYear: number | null;
  manufacturerId: number | null;
  modelId: number | null;
};

declare type UserArchivedAuctionsResponse = Pick<
  ApiArchivedAuctionResponse,
  'domain' | 'bid' | 'status' | 'vin' | 'lot'
> & {
  lotId: number | null;
  carId: number | null;
  finalBidUpdatedAt: Date | null;
};

declare type UserStatisticsResponse = Pick<
  ApiStatisticsResponse,
  'id' | 'year' | 'manufacturer' | 'generation' | 'domain' | 'engine'
> & {
  vehicleType: VehicleDataObject | null;
  avgFinalBid: number | null;
  maxFinalBid: number | null;
  minFinalBid: number | null;
  lotCount: number | null;
  calculatedAt: Date | null;
  yearCalcAt: Date | null;
  monthCalcAt: Date | null;
  dayCalcAt: Date | null;
  carModel: VehicleDataObject | null;
};

declare type UserVehicleResponseModel = VehicleDataObject & {
  manufacturerId: number | null;
};

declare type UserVehicleLotImagesData = Omit<
  ApiVehicleLotImagesData,
  'video_youtube_id' | 'external_panorama_url'
> & {
  videoYoutubeId: string | null;
  externalPanoramaUrl: string | null;
};

declare type ApiVehicleLotLocationData = Omit<
  ApiVehicleLotLocationData,
  'postal_code' | 'is_offsite'
> & {
  postalCode: string | null;
  isOffsite: boolean | null;
};

declare type UserVehicleLotSellingBranchData = Omit<
  ApiVehicleLotSellingBranchData,
  'domain_id'
> & {
  domainId: number | null;
};

declare type UserVehicleLotData = Pick<
  ApiVehicleLotData,
  | 'id'
  | 'lot'
  | 'domain'
  | 'odometer'
  | 'bid'
  | 'status'
  | 'seller'
  | 'damage'
  | 'title'
  | 'airbags'
  | 'condition'
  | 'details'
> & {
  externalId: string | null;
  estimateRepairPrice: number | null;
  preAccidentPrice: number | null;
  cleanWholesalePrice: number | null;
  actualCashValue: number | null;
  saleDate: Date | null;
  saleDateUpdatedAt: Date | null;
  bidUpdatedAt: Date | null;
  buyNow: number | null;
  buyNowUpdatedAt: Date | null;
  finalBid: number | null;
  finalBidUpdatedAt: Date | null;
  sellerType: VehicleDataObject;
  detailedTitle: string | null;
  keysAvailable: boolean | null;
  gradeIaai: string | null;
  images: UserVehicleLotImagesData | null;
  location: UserVehicleLotLocationData | null;
  sellingBranch: UserVehicleLotSellingBranchData | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};

declare type UserVehicleResponse = Omit<
  ApiVehicleResponse,
  'body_type' | 'drive_wheel' | 'vehicle_type' | 'model' | 'lots'
> & {
  model: UserVehicleResponseModel | null;
  bodyType: VehicleDataObject | null;
  wheelDrive: VehicleDataObject | null;
  vehicleType: VehicleDataObject | null;
  lots: UserVehicleLotData[] | null;
};
