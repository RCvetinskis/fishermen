export interface Route {
  href?: string;
  label?: string;
  active?: boolean;
  Component: React.ComponentType<any>;
}

// Image Object
export type Image = {
  imageUrl: string;
  height?: number;
  width?: number;
};

// Price Object
export type Price = {
  value: number;
  currency: string;
};

// Seller Object
export type Seller = {
  username: string;
  feedbackPercentage: number;
  feedbackScore: number;
};

// Shipping Option Object
export type ShippingOption = {
  shippingCost: Price;
  shippingCostType: string;
  minEstimatedDeliveryDate: string;
  maxEstimatedDeliveryDate: string;
  shippingCarrierCode: string;
};

// Item Location Object
export type ItemLocation = {
  city: string;
  stateOrProvince: string;
  postalCode: string;
  country: string;
};

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
