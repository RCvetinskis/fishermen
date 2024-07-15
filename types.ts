export interface Route {
  href?: string;
  label?: string;
  active?: boolean;
  Component: React.ComponentType<any>;
}
// export type Category = {
//   label: string;
//   query: string;
//   image?: string;
// };

export type Product = {
  id: string | number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

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
