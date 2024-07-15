"use client";
import { CategoryCardSkeleton } from "@/components/cards/category-card";
import CategoryItem from "./category-item";
import { CategoryTreeResponse } from "@/types";
import { useEffect, useRef, useState } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { Button } from "../ui/button";
import CategoryPopover from "./category-popover";

type Props = {
  categories: CategoryTreeResponse;
};

const CategoryContainer = ({ categories }: Props) => {
  const [active, setActive] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  const displayedCategories =
    categories.rootCategoryNode.childCategoryTreeNodes.slice(0, 10);
  const moreCategories =
    categories.rootCategoryNode.childCategoryTreeNodes.slice(10);

  return (
    <Menu
      className="flex p-2  flex-wrap justify-center items-center gap-5 aspect-auto "
      setActive={setActive}
    >
      {displayedCategories.map((category) => (
        <Button
          size={"xs"}
          variant={"ghost"}
          key={category.category.categoryId}
        >
          <MenuItem
            className="grid-cols-4"
            setActive={setActive}
            active={active}
            item={category.category.categoryName}
          >
            <CategoryItem category={category} />
          </MenuItem>
        </Button>
      ))}
      {categories.rootCategoryNode.childCategoryTreeNodes.length > 10 && (
        <CategoryPopover
          open={showMore}
          setOpen={setShowMore}
          categories={moreCategories}
        >
          <Button onClick={() => setShowMore(!showMore)} variant="outline">
            {showMore ? "Show Less" : "More..."}
          </Button>
        </CategoryPopover>
      )}
    </Menu>
  );
};

export default CategoryContainer;

export const CategoryContainerSkeleton = () => {
  return (
    <main className="flex flex-wrap items-center gap-10">
      {[...Array(10)].map((_, i) => (
        <CategoryCardSkeleton key={i} />
      ))}
    </main>
  );
};
