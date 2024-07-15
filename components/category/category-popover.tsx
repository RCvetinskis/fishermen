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
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CategoryPopover = ({ categories, children, open, setOpen }: Props) => {
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {categories.map((category) => (
                <Link
                  key={category.category.categoryId}
                  className="text-primary underline-offset-4 hover:underline"
                  href={`/category?${category.category.categoryName}`}
                >
                  <CommandItem
                    value={category.category.categoryName}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {category.category.categoryName}
                  </CommandItem>
                </Link>
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
