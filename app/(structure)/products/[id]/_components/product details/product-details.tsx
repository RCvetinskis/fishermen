"use client";

import Price, { PriceSkeleton } from "@/components/price";
import { Button } from "@/components/ui/button";
import { FullProduct } from "@/types";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import Itemlocation from "./item-location";
import SellerInfo, { SellerInfoSkeleton } from "./seller-info";
import ModalDesription, {
  ModalDescriptionSkeleton,
} from "../product description/modal-description";
import ShippingReturns, { ShippingReturnsSkeleton } from "../shiping-returns";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  product: FullProduct;
};

const ProductDetails = ({ product }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        {product.subtitle && (
          <p className="text-lg text-gray-600 mb-4">{product.subtitle}</p>
        )}
        <Price className="text-start text-lg" price={product.price} />
        <p className="text-sm text-gray-500 mt-2">
          Condition: {product.condition}
        </p>

        {product.itemLocation && (
          <Itemlocation itemLocation={product.itemLocation} />
        )}

        <div className="mt-4 flex flex-col  gap-2">
          <Button>
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Add to Cart</span>
          </Button>
          <Button>
            <HeartIcon className="h-5 w-5" />
            <span>Wishlist</span>
          </Button>
        </div>

        {/* Product Description */}
        {product.description && (
          <div>
            <ModalDesription description={product.description} />
          </div>
        )}

        {/* Shipping & Returns */}
        {product.shippingOptions && product.returnTerms && (
          <div className="my-2">
            <ShippingReturns
              shippingOptions={product.shippingOptions}
              returnTerms={product.returnTerms}
            />
          </div>
        )}
      </div>

      {product.seller && (
        <div>
          <SellerInfo seller={product.seller} />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

export const ProductDetailsSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Skeleton className="w-1/3 h-6 bg-gray-300 mb-2" />

        <Skeleton className="w-1/2 h-6 bg-gray-300 mb-2" />

        <PriceSkeleton />

        <Skeleton className="w-1/3 h-6 bg-gray-300 mb-2" />
        <Skeleton className="w-1/3 h-6 bg-gray-300 mb-2" />

        <div className="mt-4 flex flex-col  gap-2">
          <Skeleton className="w-1/1 h-8 bg-gray-300 " />
          <Skeleton className="w-1/1 h-8 bg-gray-300 " />
        </div>

        {/* Product Description */}

        <div className="mt-2">
          <ModalDescriptionSkeleton />
        </div>

        {/* Shipping & Returns */}

        <div className="my-2">
          <ShippingReturnsSkeleton />
        </div>
      </div>

      <div>
        <SellerInfoSkeleton />
      </div>
    </div>
  );
};
