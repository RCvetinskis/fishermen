import { CategoryCardSkeleton } from "@/components/cards/category-card";
import { ChildCategoryTreeNode } from "@/types";
import { Button } from "@/components/ui/button";
import CategoryItem from "../category-item";
import Link from "next/link";
import { ArrowLeftFromLine } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  categories: ChildCategoryTreeNode[];
  categoryTitle?: string;
};
const CategorySideBar = ({ categories, categoryTitle }: Props) => {
  const title = categoryTitle ? categoryTitle : "Categories";
  return (
    <aside className="fixed  left-0 h-[80dvh] overflow-y-auto w-1/4 xl:w-1/5 py-2 shadow-lg rounded shadow-black">
      <header className="p-2">
        <h1 className="text-lg text-center capitalize lg:text-xl xl:text-3xl font-semibold">
          {title}
        </h1>
      </header>
      <ul className="flex flex-col items-center justify-between w-full ">
        {categories &&
          categories.map((category) => (
            <CategoryItem
              key={category.category.categoryId}
              category={category}
            >
              <Button
                className={cn(
                  !category.childCategoryTreeNodes &&
                    "underline-offset-4 underline"
                )}
                variant={category.childCategoryTreeNodes ? "ghost" : "link"}
              >
                <Link
                  href={`/search?category_ids=${category.category.categoryId}`}
                >
                  {category.category.categoryName}
                </Link>
              </Button>
            </CategoryItem>
          ))}
      </ul>
    </aside>
  );
};

export default CategorySideBar;

export const CategorySideBareSkeleton = () => {
  return (
    <main className="flex flex-wrap items-center gap-10">
      {[...Array(10)].map((_, i) => (
        <CategoryCardSkeleton key={i} />
      ))}
    </main>
  );
};
