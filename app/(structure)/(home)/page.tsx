import { Suspense } from "react";

import TopPicksContainer, {
  TopPicksContainerSkeleton,
} from "./_components/top-picks-container";

const HomePage = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-4xl font-bold mb-4 ">Top Rated Picks</h3>
      <Suspense fallback={<TopPicksContainerSkeleton />}>
        <TopPicksContainer />
      </Suspense>
    </div>
  );
};

export default HomePage;
