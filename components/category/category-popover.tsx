"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ChildCategoryTreeNode } from "@/types";
import { useState } from "react";
import Link from "next/link";

type Props = {
  categories: ChildCategoryTreeNode[];
  children: React.ReactNode;
  form: any;
};

const CategoryPopover = ({ categories, children, form }: Props) => {
  const [open, setOpen] = useState(false);

  const defaultCategory = {
    categoryId: "0",
    categoryName: "All Categories",
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <Command>
          <CommandInput placeholder="Search category..." />

          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value={defaultCategory.categoryName}
                onSelect={() => {
                  form.setValue("category", defaultCategory);
                  setOpen(false);
                }}
              >
                {defaultCategory.categoryName}
              </CommandItem>
              {categories.map((category) => (
                <CommandItem
                  key={category.category.categoryId}
                  value={category.category.categoryName}
                  onSelect={() => {
                    form.setValue("category", category.category);
                    setOpen(false);
                  }}
                >
                  {category.category.categoryName}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CategoryPopover;
{
  /* {categories.map((category) => (
          <CategoryItem
            className="grid-cols-4 "
            key={category.category.categoryId}
            category={category}
          />
        ))} */
}
