"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";

import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const SearchInput = (props: Props) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div className=" w-full flex md:justify-center gap-1 mx-6">
      <div className="relative w-full md:w-1/2">
        <Input
          className="w-full px-4 py-2 "
          onChange={handleInputChange}
          placeholder="Search..."
          type="text"
          value={query}
        />
        {query && (
          <Button
            className="absolute top-0 right-0 h-full px-3"
            variant={"ghost"}
            onClick={() => setQuery("")}
          >
            <X />
          </Button>
        )}
      </div>

      <Button variant={"outline"}>Search</Button>
    </div>
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
