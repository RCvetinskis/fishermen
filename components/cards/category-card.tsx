"use client";

import Link from "next/link";
import { WobbleCard } from "../ui/wobble-card";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

type Props = {
  category: Category;
};

const CategoryCard = ({ category }: Props) => {
  const { label, query, image } = category;
  const path = `/search/fishing&${query}`;

  return (
    <Link className="flex-1" href={path}>
      <WobbleCard
        backgroundImage={image}
        className="p-4 min-w-[100px] max-w-[150px]  min-h-[75px] h-[100px] md:min-w-[150px] md:max-w-[200px]  md:min-h-[100px] md:h-[150px] flex justify-center items-center  "
      >
        <p className=" text-center text-balance truncate text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
          {label}
        </p>
      </WobbleCard>
    </Link>
  );
};

export default CategoryCard;
