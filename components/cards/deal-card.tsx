"use client";
import { Skeleton } from "../ui/skeleton";
import { DealProduct, SearchProduct } from "@/types";
import Link from "next/link";

import Price from "../price";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {
  product: DealProduct;
};

const DealCard = ({ product }: Props) => {
  return (
    <Link
      href={`/products/${
        product.itemId ? product.itemId : product.legacyItemId
      }`}
      className="group/card h-full"
    >
      <Card className="relative card shadow-lg shadow-black h-full">
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black/50 opacity-60"></div>
        <CardContent className="p-0">
          <Image
            src={
              product.image
                ? product.image.imageUrl
                : "/assets/images/no_image.jpg"
            }
            alt={product.title}
            width={400}
            height={400}
            className="object-cover aspect-square"
          />
        </CardContent>
        <CardHeader>
          <CardTitle className=" line-clamp-2 text-lg">
            {product.title}
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <Price
            price={product.price}
            marketingPrice={product.marketingPrice}
          />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default DealCard;

export const DealCardSkeleton = () => {
  return (
    <div className="w-full group/card">
      <Skeleton className=" cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"></Skeleton>
    </div>
  );
};
