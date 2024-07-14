"use client";

import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { Product } from "@/types";
import Link from "next/link";
import Rating from "@mui/material/Rating";
type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product.id}`} className="w-full group/card">
      <div
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 text-gray-50"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black  group-hover/card:bg-black/70 opacity-60"></div>
        <div>
          <h1 className="font-bold capitalize text-xl md:text-2xl  relative z-10">
            {product.title}
          </h1>
        </div>
        <div className="text content text-gray-5  z-10">
          <p className="text-sm 0 relative my-4 overflow-y-auto max-h-[120px]">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <Rating
              precision={0.5}
              name="read-only"
              value={product.rating.rate}
              readOnly
            />
            <p className="text-end text-sm font-bold">{product.price} $</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

export const ProductCardSkeleton = () => {
  return (
    <div className="w-full group/card">
      <Skeleton className=" cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"></Skeleton>
    </div>
  );
};
