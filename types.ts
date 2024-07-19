export interface Route {
  href?: string;
  label?: string;
  active?: boolean;
  Component: React.ComponentType<any>;
}

// Item Summary Object
export type ItemSummary = {
  itemId: string;
  title: string;
  leafCategoryIds: number[];
  categories: string[];
  image: Image;
  price: Price;
  itemHref: string;
  seller: Seller;
  condition: string;
  conditionId: string;
  thumbnailImages: Image[];
  shippingOptions: ShippingOption[];
  buyingOptions: string[];
  itemWebUrl: string;
  itemLocation: ItemLocation;
  additionalImages: Image[];
  adultOnly: boolean;
  legacyItemId: string;
  availableCoupons: boolean;
  itemCreationDate: string;
  topRatedBuyingExperience: boolean;
  priorityListing: boolean;
  listingMarketplaceId: string;
};

// API Response Object
export type ApiResponse = {
  href: string;
  total: number;
  limit: number;
  offset: number;
  itemSummaries: ItemSummary[];
};

export interface RootCategory {
  category: Category;
  parentCategoryTreeNodeHref: string;
  childCategoryTreeNodes: ChildCategoryTreeNode[];
  categoryTreeNodeLevel: number;
}

export interface Category {
  categoryId: string;
  categoryName: string;
}

export interface ChildCategoryTreeNode {
  category: Category;
  parentCategoryTreeNodeHref: string;
  categoryTreeNodeLevel: number;
  leafCategoryTreeNode?: boolean;
  childCategoryTreeNodes?: ChildCategoryTreeNode[];
}

export type CategoryTreeResponse = {
  categoryTreeId: string;
  categoryTreeVersion: string;
  rootCategoryNode: {
    childCategoryTreeNodes: RootCategory[];
  };
};

export type CategoryTreeIdResponse = {
  categoryTreeId: string;
  categoryTreeVersion: string;
};
export interface CategorySubtree {
  categorySubtreeNode: ChildCategoryTreeNode;
  categoryTreeId: string;
  categoryTreeVersion: string;
}

export interface DealProduct {
  itemId: string;
  legacyItemId: string;
  title: string;
  image?: Image;
  marketingPrice?: MarketingPrice;
  price?: Price;
  shippingOptions: ShippingOption[];
  itemWebUrl: string;
  categoryId: string;
  categoryAncestorIds: string[];
  commissionable: boolean;
  dealWebUrl: string;
  dealStartDate: string;
  dealEndDate: string;
}

export interface MarketingPrice {
  originalPrice: Price;
  discountPercentage: string;
  discountAmount: Price;
  priceTreatment: string;
}

export interface ShippingCost {
  value: string;
  currency: string;
}

export interface QueryParams {
  q?: string;
  gtin?: string;
  charity_ids?: string;
  fieldgroups?: string;
  compatibility_filter?: string;
  auto_correct?: string;
  category_ids?: string;
  filter?: string;
  sort?: string;
  aspect_filter?: string;
  epid?: string;
  offset?: string;
  limit?: string;
  page?: string;
}

export interface SearchProduct extends DealProduct {
  itemId: string;
  title: string;
  leafCategoryIds: string[];
  categories: Category[];
  price?: Price;
  marketingPrice?: MarketingPrice;
  image?: Image;
  itemHref: string;
  seller: Seller;
  condition: string;
  conditionId: string;
  shippingOptions: ShippingOption[];
  buyingOptions: string[];
  itemWebUrl: string;
  itemLocation: ItemLocation;
  adultOnly: boolean;
  legacyItemId: string;
  availableCoupons: boolean;
  itemCreationDate: string;
  topRatedBuyingExperience: boolean;
  priorityListing: boolean;
  listingMarketplaceId: string;
}

export interface RangeValue {
  end: string;
  exclusiveEnd: boolean;
  exclusiveStart: boolean;
  range: boolean;
  start: string;
}
export interface FilterField {
  field: string;
  negated: boolean;
  range: RangeValue;
  set: string[];
  value: string;
}

export interface SortField {
  // Example properties
  sortBy: string;
  ascending: boolean;
}

export interface SearchParams {
  q?: string;
  fieldgroups?: string[];
  category_ids?: string[];
  filter?: FilterField[];
  sort?: SortField[];
  limit?: string;
  offset?: string;
  category?: string;
}

export interface FullProduct {
  additionalImages?: AdditionalImage[];
  addonServices?: AddonService[];
  adultOnly: string;
  ageGroup?: string;
  authenticityGuarantee?: AuthenticityGuarantee;
  authenticityVerification?: AuthenticityVerification;
  availableCoupons?: AvailableCoupon[];
  bidCount?: string | number;
  brand?: string;
  buyingOptions?: string[];
  categoryId: string;
  categoryIdPath: string;
  categoryPath: string;
  color?: string;
  condition?: string;
  conditionDescription?: string;
  conditionDescriptors?: ConditionDescriptor[];
  conditionId?: string;
  currentBidPrice?: CurrentBidPrice;
  description?: string;
  ecoParticipationFee?: EcoParticipationFee;
  eligibleForInlineCheckout: boolean;
  enabledForGuestCheckout: boolean;
  energyEfficiencyClass?: string;
  epid?: string;
  estimatedAvailabilities?: EstimatedAvailability[];
  gender?: string;
  gtin?: string;
  hazardousMaterialsLabels?: HazardousMaterialsLabels;
  image: Image;
  inferredEpid?: string;
  itemAffiliateWebUrl?: string;
  itemCreationDate?: string;
  itemEndDate?: string;
  itemId: string;
  itemLocation?: ItemLocation;
  itemWebUrl?: string;
  legacyItemId: string;
  listingMarketplaceId: string;
  localizedAspects?: LocalizedAspect[];
  lotSize?: string;
  marketingPrice?: MarketingPrice;
  material?: string;
  minimumPriceToBid?: MinimumPriceToBid;
  mpn?: string;
  pattern?: string;
  paymentMethods?: PaymentMethod[];
  price: Price;
  priceDisplayCondition?: string;
  primaryItemGroup?: PrimaryItemGroup;
  primaryProductReviewRating?: PrimaryProductReviewRating;
  priorityListing: string;
  product?: Product;
  productFicheWebUrl?: string;
  qualifiedPrograms?: string[];
  quantityLimitPerBuyer?: string;
  repairScore?: string;
  reservePriceMet?: string;
  returnTerms?: ReturnTerms;
  seller: Seller;
  sellerCustomPolicies?: SellerCustomPolicy[];
  sellerItemRevision?: string;
  shippingOptions: ShippingOption[];
  shipToLocations?: ShipToLocations;
  shortDescription?: string;
  size?: string;
  sizeSystem?: string;
  sizeType?: string;
  subtitle?: string;
  taxes?: Tax[];
  title: string;
  topRatedBuyingExperience?: string;
  tyreLabelImageUrl?: string;
  uniqueBidderCount?: string;
  unitPrice?: UnitPrice;
  unitPricingMeasure?: string;
  warnings?: Warning[];
  watchCount?: string;
}

export interface AdditionalImage {
  height: string;
  imageUrl: string;
  width: string;
}

export interface AddonService {
  selection: string;
  serviceFee: ServiceFee;
  serviceId: string;
  serviceType: string;
}

export interface ServiceFee {
  convertedFromCurrency: string;
  convertedFromValue: string;
  currency: string;
  value: string;
}

export interface AuthenticityGuarantee {
  description: string;
  termsWebUrl: string;
}

export interface AuthenticityVerification {
  description: string;
  termsWebUrl: string;
}

export interface AvailableCoupon {
  constraint: Constraint;
  discountAmount: DiscountAmount;
  discountType: string;
  message: string;
  redemptionCode: string;
  termsWebUrl: string;
}

export interface Constraint {
  expirationDate: string;
}

export interface DiscountAmount {
  currency: string;
  value: string;
}

export interface ConditionDescriptor {
  name: string;
  values: Value[];
}

export interface Value {
  additionalInfo: string[];
  content: string;
}

export interface CurrentBidPrice {
  convertedFromCurrency: string;
  convertedFromValue: string;
  currency: string;
  value: string;
}

export interface EcoParticipationFee {
  convertedFromCurrency: string;
  convertedFromValue: string;
  currency: string;
  value: string;
}

export interface EstimatedAvailability {
  availabilityThreshold: string;
  availabilityThresholdType: string;
  deliveryOptions: string[];
  estimatedAvailabilityStatus: string;
  estimatedAvailableQuantity: string;
  estimatedSoldQuantity: string;
}

export interface HazardousMaterialsLabels {
  additionalInformation: string;
  pictograms: Pictogram[];
  signalWord: string;
  signalWordId: string;
  statements: Statement[];
}

export interface Pictogram {
  pictogramDescription: string;
  pictogramId: string;
  pictogramUrl: string;
}

export interface Statement {
  statementDescription: string;
  statementId: string;
}

export interface Image {
  height: string;
  imageUrl: string;
  width: string;
}

export interface ItemLocation {
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  county: string;
  postalCode: string;
  stateOrProvince: string;
}

export interface LocalizedAspect {
  name: string;
  type: string;
  value: string;
}

export interface MarketingPrice {
  discountAmount: DiscountAmount2;
  discountPercentage: string;
  originalPrice: OriginalPrice;
  priceTreatment: string;
}

export interface DiscountAmount2 {
  convertedFromCurrency: string;
  convertedFromValue: string;
  currency: string;
  value: string;
}

export interface OriginalPrice {
  convertedFromCurrency: string;
  convertedFromValue: string;
  currency: string;
  value: string;
}

export interface MinimumPriceToBid {
  convertedFromCurrency: string;
  convertedFromValue: string;
  currency: string;
  value: string;
}

export interface PaymentMethod {
  paymentMethodType: string;
  paymentMethodBrands: PaymentMethodBrand[];
  paymentInstructions: string[];
  sellerInstructions: string[];
}

export interface PaymentMethodBrand {
  paymentMethodBrandType: string;
  logoImage: LogoImage;
}

export interface LogoImage {
  height: string;
  imageUrl: string;
  width: string;
}

export interface Price {
  convertedFromCurrency: string;
  convertedFromValue: string;
  currency: string;
  value: string;
}

export interface PrimaryItemGroup {
  itemGroupAdditionalImages: ItemGroupAdditionalImage[];
  itemGroupHref: string;
  itemGroupId: string;
  itemGroupImage: ItemGroupImage;
  itemGroupTitle: string;
  itemGroupType: string;
}

export interface ItemGroupAdditionalImage {
  height: string;
  imageUrl: string;
  width: string;
}

export interface ItemGroupImage {
  height: string;
  imageUrl: string;
  width: string;
}

export interface PrimaryProductReviewRating {
  averageRating: string;
  ratingHistograms: RatingHistogram[];
  reviewCount: string;
}

export interface RatingHistogram {
  count: string;
  rating: string;
}

export interface Product {
  additionalImages: AdditionalImage[];
  additionalProductIdentities: AdditionalProductIdentity[];
  aspectGroups: AspectGroup[];
  brand: string;
  description: string;
  gtins: string[];
  image: Image;
  mpns: string[];
  title: string;
}

export interface AdditionalProductIdentity {
  productIdentity: ProductIdentity[];
}

export interface ProductIdentity {
  identifierType: string;
  identifierValue: string;
}

export interface AspectGroup {
  aspects: Aspect[];
  localizedGroupName: string;
}

export interface Aspect {
  localizedName: string;
  localizedValues: string[];
}

export interface ReturnTerms {
  extendedHolidayReturnsOffered: string;
  refundMethod: string;
  restockingFeePercentage: string;
  returnInstructions: string;
  returnMethod: string;
  returnPeriod: ReturnPeriod;
  returnsAccepted: string;
  returnShippingCostPayer: string;
}

export interface ReturnPeriod {
  unit: string;
  value: string;
}

export interface Seller {
  feedbackPercentage: string;
  feedbackScore: string;
  sellerAccountType: string;
  sellerLegalInfo: SellerLegalInfo;
  userId: string;
  username: string;
}

export interface SellerLegalInfo {
  email: string;
  fax: string;
  imprint: string;
  legalContactFirstName: string;
  legalContactLastName: string;
  name: string;
  phone: string;
  registrationNumber: string;
  sellerProvidedLegalAddress: SellerProvidedLegalAddress;
  termsOfService: string;
  vatDetails: VatDetail[];
  economicOperator: EconomicOperator;
  weeeNumber: string;
}

export interface SellerProvidedLegalAddress {
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  countryName: string;
  county: string;
  postalCode: string;
  stateOrProvince: string;
}

export interface VatDetail {
  issuingCountry: string;
  vatId: string;
}

export interface EconomicOperator {
  companyName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  stateOrProvince: string;
  postalCode: string;
  country: string;
  phone: string;
  email: string;
}

export interface SellerCustomPolicy {
  description: string;
  label: string;
  type: string;
}

export interface ShippingOption {
  additionalShippingCostPerUnit: AdditionalShippingCostPerUnit;
  cutOffDateUsedForEstimate: string;
  fulfilledThrough: string;
  guaranteedDelivery: string;
  importCharges: ImportCharges;
  maxEstimatedDeliveryDate: string;
  minEstimatedDeliveryDate: string;
  quantityUsedForEstimate: string;
  shippingCarrierCode: string;
  shippingCost: ShippingCost;
  shippingCostType: string;
  shippingServiceCode: string;
  shipToLocationUsedForEstimate: ShipToLocationUsedForEstimate;
  trademarkSymbol: string;
  type: string;
}

export interface AdditionalShippingCostPerUnit {
  convertedFromCurrency: string;
  convertedFromValue: string;
  currency: string;
  value: string;
}

export interface ImportCharges {
  convertedFromCurrency: string;
  convertedFromValue: string;
  currency: string;
  value: string;
}

export interface ShippingCost {
  convertedFromCurrency: string;
  convertedFromValue: string;
  currency: string;
  value: string;
}

export interface ShipToLocationUsedForEstimate {
  country: string;
  postalCode: string;
}

export interface ShipToLocations {
  regionExcluded: RegionExcluded[];
  regionIncluded: RegionIncluded[];
}

export interface RegionExcluded {
  regionId: string;
  regionName: string;
  regionType: string;
}

export interface RegionIncluded {
  regionId: string;
  regionName: string;
  regionType: string;
}

export interface Tax {
  ebayCollectAndRemitTax: string;
  includedInPrice: string;
  shippingAndHandlingTaxed: string;
  taxJurisdiction: TaxJurisdiction;
  taxPercentage: string;
  taxType: string;
}

export interface TaxJurisdiction {
  region: Region;
  taxJurisdictionId: string;
}

export interface Region {
  regionName: string;
  regionType: string;
}

export interface UnitPrice {
  convertedFromCurrency: string;
  convertedFromValue: string;
  currency: string;
  value: string;
}

export interface Warning {
  category: string;
  domain: string;
  errorId: string;
  inputRefIds: string[];
  longMessage: string;
  message: string;
  outputRefIds: string[];
  parameters: Parameter[];
  subdomain: string;
}

export interface Parameter {
  name: string;
  value: string;
}
