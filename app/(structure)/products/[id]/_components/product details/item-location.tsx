import { Skeleton } from "@/components/ui/skeleton";
import { ItemLocation } from "@/types";

type Props = {
  itemLocation: ItemLocation;
};

const Itemlocation = ({ itemLocation }: Props) => {
  return (
    <p className="text-sm text-gray-500">
      Location: {itemLocation.city}, {itemLocation.stateOrProvince},{" "}
      {itemLocation.country}
    </p>
  );
};

export default Itemlocation;
