import { getDeals } from "@/actions/fetch/get/deals api/fetch-deals";
import DealCard, { DealCardSkeleton } from "@/components/cards/deal-card";

import { DealProduct } from "@/types";

const DealsContainer = async () => {
  const deals = await getDeals();
  const products = deals.dealItems as DealProduct[];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
      {products.map((product, index) => (
        <DealCard key={index} product={product} />
      ))}
    </div>
  );
};

export default DealsContainer;

export const DealsContainerSkeleton = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {[...Array(10)].map((_, i) => (
        <DealCardSkeleton key={i} />
      ))}
    </div>
  );
};
