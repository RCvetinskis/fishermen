"use client";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Route } from "@/types";
import { Heart, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Logo = () => {
  return (
    <Image src={"/assets/logosvg.svg"} alt="logo" width={100} height={100} />
  );
};
const useRoutes = () => {
  const pathname = usePathname();
  const routes: Route[] = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
      Component: Logo,
    },
    {
      href: "/cart",
      label: "Cart",
      active: pathname === "/cart",
      Component: () => (
        <Button size={"icon"} variant={"outline"}>
          <ShoppingBasket />
        </Button>
      ),
    },
    {
      href: "/favorites",
      label: "Favorites",
      active: pathname === "/favorites",
      Component: () => (
        <Button size={"icon"} variant={"outline"}>
          <Heart />
        </Button>
      ),
    },
    {
      href: undefined,
      label: "Theme",
      active: undefined,
      Component: ThemeToggle,
    },
  ];
  return routes;
};

export default useRoutes;
