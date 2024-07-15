"use client";

import React from "react";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ChildCategoryTreeNode } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  category: ChildCategoryTreeNode;
  className?: string;
};

const CategoryItem = ({ category, className }: Props) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2  gap-3  p-4 max-h-[400px] overflow-y-auto",
        className
      )}
    >
      {category.childCategoryTreeNodes &&
        category.childCategoryTreeNodes.map((item) => (
          <Button asChild variant={"link"} key={item.category.categoryId}>
            <Link href={`/category/${item.category.categoryName}`}>
              {item.category.categoryName}
            </Link>
          </Button>
        ))}
    </div>
  );
};

export default CategoryItem;
