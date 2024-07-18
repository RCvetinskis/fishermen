"use client";
import { z } from "zod";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { useRouter } from "next/navigation";
import { ChildCategoryTreeNode } from "@/types";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import CategoryPopover from "../category/category-popover";

type Props = {
  categories: ChildCategoryTreeNode[];
};

const formSchema = z.object({
  query: z.string().max(50),
  category: z.object({
    categoryId: z.string().max(50),
    categoryName: z.string().max(50),
  }),
});
const SearchInput = ({ categories }: Props) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
      category: {
        categoryId: "0",
        categoryName: "All Categories",
      },
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { query, category } = values;
    const params = new URLSearchParams();
    params.append("category_ids", category.categoryId);
    if (query.trim()) {
      params.append("q", query.trim());
    }

    const searchString = params.toString();
    if (searchString) {
      router.push(`/search?${searchString}`);
      form.reset();
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col sm:flex-row gap-2 md:justify-center items-center mx-6"
      >
        <div className=" relative w-full md:w-1/2">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full px-4 py-2"
                    placeholder="Search..."
                    type="text"
                    {...field}
                  />
                </FormControl>
                {field.value && (
                  <Button
                    type="button"
                    className="absolute -top-[17%] right-0 h-full px-3"
                    variant={"ghost"}
                    onClick={() => form.setValue("query", "")}
                  >
                    <X />
                  </Button>
                )}
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center gap-2">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <CategoryPopover form={form} categories={categories}>
                <FormItem>
                  <FormControl>
                    <Button
                      role="combobox"
                      type="button"
                      className="text-xs flex flex-col sm:flex-row items-center gap-1"
                      variant="outline"
                    >
                      {field.value.categoryName}
                    </Button>
                  </FormControl>
                </FormItem>
              </CategoryPopover>
            )}
          />
          <Button type="submit" variant={"outline"}>
            Search
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SearchInput;

export const SearchInputSkeleton = () => {
  return (
    <div className=" w-full flex md:justify-center  gap-1 mx-6">
      <div className="relative w-full  md:w-1/2">
        <Skeleton className="w-full h-10 px-4 py-2 bg-gray-500 " />
        <Skeleton className="absolute top-0 right-0  px-3 bg-gray-500" />
      </div>
      <Skeleton className="bg-gray-500 w-16 h-10" />
    </div>
  );
};
