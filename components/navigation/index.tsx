"use client";
import useRoutes from "@/hooks/useRoutes";
import { useEffect, useState } from "react";
import NavItem, { NavItemSkeleton } from "./nav-item";
import useMediaQuery from "@/hooks/useMediaQuery";
import SearchInput, { SearchInputSkeleton } from "../search/search-input";
import { CategoryTreeResponse } from "@/types";
import CategoryContainer from "../category/category-container";
import { Button } from "../ui/button";
import CategoryPopover from "../category/category-popover";
import { ArrowDown } from "lucide-react";

type Props = {
  categories: CategoryTreeResponse;
};
const NavBar = ({ categories }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const isMdSize = useMediaQuery("(max-width: 1054px)");
  const routes = useRoutes();
  const homeRoute = routes[0];
  const otherRoutes = routes.slice(1);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <nav className="fixed top-0 w-full py-3 px-2 lg:px-6 lg:h-16 h-fit z-50 bg-white dark:bg-darkBlue shadow-2xl">
        <div className="flex items-center">
          <NavItemSkeleton />

          {!isMdSize && (
            <div className="flex-grow flex justify-center">
              <SearchInputSkeleton />
            </div>
          )}
          <div className="flex items-center  lg:space-x-6 space-x-2">
            {[...Array(3)].map((_, i) => (
              <NavItemSkeleton key={i} />
            ))}
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="fixed top-0 w-full py-3 px-2 lg:px-6  z-50 bg-white dark:bg-[#020817] shadow-2xl">
      <div className="flex  justify-between items-center w-full">
        {/* Left Section - Home Route */}
        <div className="flex items-center">
          <NavItem route={homeRoute} />
        </div>
        {/* Center Section - Search Input */}
        {!isMdSize && (
          <div className="flex-grow flex justify-center">
            <SearchInput />
          </div>
        )}

        {/* Right Section - Other Routes */}
        <div className="flex items-center  lg:space-x-6 space-x-2">
          <CategoryPopover
            open={open}
            setOpen={setOpen}
            categories={categories.rootCategoryNode.childCategoryTreeNodes}
          >
            <Button
              className="text-xs flex flex-col sm:flex-row items-center gap-1"
              variant="outline"
              size={"sm"}
            >
              <span>Category</span>
            </Button>
          </CategoryPopover>
          {otherRoutes.map((route) => (
            <NavItem key={route.label} route={route} />
          ))}
        </div>
      </div>
      {isMdSize && (
        <div className="mt-4">
          <div className="flex-grow flex justify-center">
            <SearchInput />
          </div>
        </div>
      )}
      {!isMdSize && <CategoryContainer categories={categories} />}
    </nav>
  );
};

export default NavBar;
