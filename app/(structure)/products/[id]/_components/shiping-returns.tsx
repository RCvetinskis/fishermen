import { Skeleton } from "@/components/ui/skeleton";
import { ReturnTerms, ShippingOption } from "@/types";

type Props = {
  shippingOptions: ShippingOption[];
  returnTerms: ReturnTerms;
};

const ShippingReturns = ({ shippingOptions, returnTerms }: Props) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Shipping & Returns</h2>
      <div className="text-sm">
        <p className="text-gray-500">
          Shipping: {shippingOptions[0].shippingServiceCode} -{" "}
          {shippingOptions[0].type}
        </p>
        <p className="text-gray-500">
          Shipping Cost: ${shippingOptions[0].shippingCost.value}
        </p>
        <p className="text-gray-500 mt-2">
          Returns: {returnTerms.returnsAccepted ? "Accepted" : "Not Accepted"}
        </p>
        {returnTerms.returnsAccepted && (
          <p className="text-gray-500">
            Return Period: {returnTerms.returnPeriod.value} days
          </p>
        )}
      </div>
    </div>
  );
};

export default ShippingReturns;

export const ShippingReturnsSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-1/2 h-6 bg-gray-300 mb-2" />
      <div className="text-sm">
        <Skeleton className="w-1/3 h-6 bg-gray-300 mb-2" />
        <Skeleton className="w-1/2 h-6 bg-gray-300 mb-2" />
        <Skeleton className="w-1/3 h-6 bg-gray-300 mb-2" />
        <Skeleton className="w-1/2 h-6 bg-gray-300 mb-2" />
      </div>
    </div>
  );
};
