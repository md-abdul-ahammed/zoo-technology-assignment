export interface IFlightType {
  id: number;
  pricingSource: string;
  legs: Leg[];
  pricingInformation: PricingInformation[];
  diversitySwapper: DiversitySwapper;
  nonRefundable: boolean;
  validatingCarrierCode: string;
  priceBreakDownWithMarkup: PriceBreakDownWithMarkup;
  priceBreakDown: PriceBreakDown[];
  totalPrice: TotalPrice;
  baggageInfo: BaggageInfo[];
}

export interface Leg {
  ref: number;
  segment: Segment;
  segmentDetails: SegmentDetail[];
}

export interface Segment {
  departureDate: string;
  departureLocation: string;
  arrivalLocation: string;
}

export interface SegmentDetail {
  id: number;
  frequency: string;
  stopCount: number;
  eTicketable: boolean;
  totalMilesFlown: number;
  elapsedTime: number;
  departureDateAdjustment: number;
  origin: Origin;
  destination: Destination;
  fleet: Fleet;
}

export interface Origin {
  airport: string;
  city: string;
  country: string;
  terminal: string;
  dateTime: string;
  timeZone: string;
}

export interface Destination {
  airport: string;
  city: string;
  country: string;
  terminal: string;
  dateTime: string;
  timeZone: string;
}

export interface Fleet {
  marketing: string;
  marketingFlightNumber: number;
  operating: string;
  operatingFlightNumber: number;
  equipment: Equipment;
}

export interface Equipment {
  code: string;
  typeForFirstLeg: string;
  typeForLastLeg: string;
}

export interface PricingInformation {
  pricingSubsource: string;
  fare: Fare;
}

export interface Fare {
  validatingCarrierCode: string;
  vita: boolean;
  eTicketable: boolean;
  lastTicketDate: string;
  lastTicketTime: string;
  governingCarriers: string;
  passengerInfoList: PassengerInfoList[];
  totalFare: TotalFare;
}

export interface PassengerInfoList {
  passengerInfo: PassengerInfo;
}

export interface PassengerInfo {
  passengerType: string;
  passengerNumber: number;
  nonRefundable: boolean;
  fareComponents: FareComponent[];
  taxes: Tax[];
  taxSummaries: TaxSummary[];
  currencyConversion: CurrencyConversion;
  passengerTotalFare: PassengerTotalFare;
  baggageInformation: BaggageInformation[];
}

export interface FareComponent {
  ref: number;
  beginAirport: string;
  endAirport: string;
  segments: Segment2[];
  details: Details;
}

export interface Segment2 {
  segment: Segment3;
}

export interface Segment3 {
  bookingCode: string;
  cabinCode: string;
  mealCode: string;
  seatsAvailable: number;
  availabilityBreak?: boolean;
}

export interface Details {
  id: number;
  governingCarrier: string;
  fareAmount: number;
  fareCurrency: string;
  fareBasisCode: string;
  farePassengerType: string;
  publishedFareAmount: number;
  publishedFareCurrency: string;
  directionality: string;
  applicablePricingCategories: string;
  vendorCode: string;
  fareTypeBitmap: string;
  fareType: string;
  fareTariff: string;
  fareRule: string;
  cabinCode: string;
  segments: Segment4[];
}

export interface Segment4 {
  segment: Segment5;
}

export interface Segment5 {
  stopover?: boolean;
  surcharges?: Surcharge[];
}

export interface Surcharge {
  amount: number;
  currency: string;
  description: string;
  type: string;
}

export interface Tax {
  ref: number;
}

export interface TaxSummary {
  ref: number;
}

export interface CurrencyConversion {
  from: string;
  to: string;
  exchangeRateUsed: number;
}

export interface PassengerTotalFare {
  totalFare: number;
  totalTaxAmount: number;
  currency: string;
  baseFareAmount: number;
  baseFareCurrency: string;
  equivalentAmount: number;
  equivalentCurrency: string;
  constructionAmount: number;
  constructionCurrency: string;
  exchangeRateOne: number;
  discountPercentage: string;
  discountAmount: number;
  netBaseFareAmount: number;
  netTotalFareAmount: number;
}

export interface BaggageInformation {
  provisionType: string;
  airlineCode: string;
  segments: Segment6[];
  allowance: Allowance;
}

export interface Segment6 {
  id: number;
}

export interface Allowance {
  ref: number;
}

export interface TotalFare {
  totalPrice: number;
  totalTaxAmount: number;
  currency: string;
  baseFareAmount: number;
  baseFareCurrency: string;
  constructionAmount: number;
  constructionCurrency: string;
  equivalentAmount: number;
  equivalentCurrency: string;
}

export interface DiversitySwapper {
  weighedPrice: number;
}

export interface PriceBreakDownWithMarkup {
  userType: number;
  airlineId: string;
  airlineCode: string;
  commission_percentage: string;
  commission_type: string;
  service_charge: string;
  totalFare: TotalFare2;
  fareDetails: FareDetail[];
}

export interface TotalFare2 {
  netTotalFareAmount: number;
  netTotalBaseFareAmount: number;
  netTotalDiscountAmount: number;
  netTotalGrossFareAmount: number;
  netTotalFareTaxAmount: number;
}

export interface FareDetail {
  passengerInfo: PassengerInfo2;
}

export interface PassengerInfo2 {
  passengerType: string;
  passengerNumber: number;
  nonRefundable: boolean;
  fareComponents: FareComponent2[];
  taxes: Tax2[];
  taxSummaries: TaxSummary2[];
  currencyConversion: CurrencyConversion2;
  passengerTotalFare: PassengerTotalFare2;
  baggageInformation: BaggageInformation2[];
}

export interface FareComponent2 {
  ref: number;
  beginAirport: string;
  endAirport: string;
  segments: Segment7[];
  details: Details2;
}

export interface Segment7 {
  segment: Segment8;
}

export interface Segment8 {
  bookingCode: string;
  cabinCode: string;
  mealCode: string;
  seatsAvailable: number;
  availabilityBreak?: boolean;
}

export interface Details2 {
  id: number;
  governingCarrier: string;
  fareAmount: number;
  fareCurrency: string;
  fareBasisCode: string;
  farePassengerType: string;
  publishedFareAmount: number;
  publishedFareCurrency: string;
  directionality: string;
  applicablePricingCategories: string;
  vendorCode: string;
  fareTypeBitmap: string;
  fareType: string;
  fareTariff: string;
  fareRule: string;
  cabinCode: string;
  segments: Segment9[];
}

export interface Segment9 {
  segment: Segment10;
}

export interface Segment10 {
  stopover?: boolean;
  surcharges?: Surcharge2[];
}

export interface Surcharge2 {
  amount: number;
  currency: string;
  description: string;
  type: string;
}

export interface Tax2 {
  ref: number;
}

export interface TaxSummary2 {
  ref: number;
}

export interface CurrencyConversion2 {
  from: string;
  to: string;
  exchangeRateUsed: number;
}

export interface PassengerTotalFare2 {
  totalFare: number;
  totalTaxAmount: number;
  currency: string;
  baseFareAmount: number;
  baseFareCurrency: string;
  equivalentAmount: number;
  equivalentCurrency: string;
  constructionAmount: number;
  constructionCurrency: string;
  exchangeRateOne: number;
  discountPercentage: string;
  discountAmount: number;
  netBaseFareAmount: number;
  netTotalFareAmount: number;
}

export interface BaggageInformation2 {
  provisionType: string;
  airlineCode: string;
  segments: Segment11[];
  allowance: Allowance2;
}

export interface Segment11 {
  id: number;
}

export interface Allowance2 {
  ref: number;
}

export interface PriceBreakDown {
  passengerInfo: PassengerInfo3;
}

export interface PassengerInfo3 {
  passengerType: string;
  passengerNumber: number;
  nonRefundable: boolean;
  fareComponents: FareComponent3[];
  taxes: Tax3[];
  taxSummaries: TaxSummary3[];
  currencyConversion: CurrencyConversion3;
  passengerTotalFare: PassengerTotalFare3;
  baggageInformation: BaggageInformation3[];
}

export interface FareComponent3 {
  ref: number;
  beginAirport: string;
  endAirport: string;
  segments: Segment12[];
  details: Details3;
}

export interface Segment12 {
  segment: Segment13;
}

export interface Segment13 {
  bookingCode: string;
  cabinCode: string;
  mealCode: string;
  seatsAvailable: number;
  availabilityBreak?: boolean;
}

export interface Details3 {
  id: number;
  governingCarrier: string;
  fareAmount: number;
  fareCurrency: string;
  fareBasisCode: string;
  farePassengerType: string;
  publishedFareAmount: number;
  publishedFareCurrency: string;
  directionality: string;
  applicablePricingCategories: string;
  vendorCode: string;
  fareTypeBitmap: string;
  fareType: string;
  fareTariff: string;
  fareRule: string;
  cabinCode: string;
  segments: Segment14[];
}

export interface Segment14 {
  segment: Segment15;
}

export interface Segment15 {
  stopover?: boolean;
  surcharges?: Surcharge3[];
}

export interface Surcharge3 {
  amount: number;
  currency: string;
  description: string;
  type: string;
}

export interface Tax3 {
  ref: number;
}

export interface TaxSummary3 {
  ref: number;
}

export interface CurrencyConversion3 {
  from: string;
  to: string;
  exchangeRateUsed: number;
}

export interface PassengerTotalFare3 {
  totalFare: number;
  totalTaxAmount: number;
  currency: string;
  baseFareAmount: number;
  baseFareCurrency: string;
  equivalentAmount: number;
  equivalentCurrency: string;
  constructionAmount: number;
  constructionCurrency: string;
  exchangeRateOne: number;
  discountPercentage: string;
  discountAmount: number;
  netBaseFareAmount: number;
  netTotalFareAmount: number;
}

export interface BaggageInformation3 {
  provisionType: string;
  airlineCode: string;
  segments: Segment16[];
  allowance: Allowance3;
}

export interface Segment16 {
  id: number;
}

export interface Allowance3 {
  ref: number;
}

export interface TotalPrice {
  totalPrice: number;
  totalTaxAmount: number;
  currency: string;
  baseFareAmount: number;
  baseFareCurrency: string;
  constructionAmount: number;
  constructionCurrency: string;
  equivalentAmount: number;
  equivalentCurrency: string;
}

export interface BaggageInfo {
  paxType: string;
  details: Detail[];
}

export interface Detail {
  id: number;
  weight: number;
  unit: string;
  airlineCode: string;
  pieceCount: number;
}
