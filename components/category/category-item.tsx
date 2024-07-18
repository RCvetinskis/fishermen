"use client";
import { ChildCategoryTreeNode } from "@/types";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type Props = {
  category: ChildCategoryTreeNode;
  children: React.ReactNode;
};

const CategoryItem = ({ category, children }: Props) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      {category.childCategoryTreeNodes ? (
        <HoverCardContent className="max-h-[400px] max-w-[500px]  w-full flex flex-col items-center overflow-y-auto">
          {category.childCategoryTreeNodes.map((item) => (
            <Button asChild variant={"link"} key={item.category.categoryId}>
              <Link href={`/search?category_ids=${item.category.categoryId}`}>
                {item.category.categoryName}
              </Link>
            </Button>
          ))}
        </HoverCardContent>
      ) : null}
    </HoverCard>
  );
};

export default CategoryItem;
