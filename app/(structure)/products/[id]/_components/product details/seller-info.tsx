import { Skeleton } from "@/components/ui/skeleton";
import { Seller } from "@/types";

type Props = {
  seller: Seller;
};

const SellerInfo = ({ seller }: Props) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-2">Seller Information</h2>
      <p className="text-gray-500 text-sm">Username: {seller.username}</p>
      <p className="text-gray-500 text-sm">
        Feedback: {seller.feedbackScore} ({seller.feedbackPercentage}%)
      </p>
    </>
  );
};

export default SellerInfo;

export const SellerInfoSkeleton = () => {
  return (
    <>
      <Skeleton className="w-1/2 h-6 bg-gray-300 mb-2" />
      <Skeleton className="w-1/3 h-6 bg-gray-300 mb-2" />
      <Skeleton className="w-1/3 h-6 bg-gray-300 mb-2" />
    </>
  );
};
