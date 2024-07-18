import { Suspense } from "react";

import DealsContainer, {
  DealsContainerSkeleton,
} from "./_components/deals-container";

const HomePage = () => {
  return (
    <div className="space-y-2">
      <h3 className="text-4xl text-center md:text-start font-bold mb-4 ">
        Best Deals
      </h3>
      <Suspense fallback={<DealsContainerSkeleton />}>
        <DealsContainer />
      </Suspense>
    </div>
  );
};

export default HomePage;
