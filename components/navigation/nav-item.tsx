import Link from "next/link";
import { Route } from "@/types";
import { HoverLabel } from "../hover-label";

type Props = {
  route: Route;
};

const NavItem = ({ route }: Props) => {
  const Component = route.Component;
  return (
    <HoverLabel asChild label={route.label}>
      {route.href ? (
        <Link href={route.href}>
          <Component />
        </Link>
      ) : (
        <>
          <Component className="w-6 h-6" />
        </>
      )}
    </HoverLabel>
  );
};

export default NavItem;
