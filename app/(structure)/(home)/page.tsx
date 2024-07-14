import CategoryContainer from "./_components/category-container";
import TopPicksContainer from "./_components/top-picks-container";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold mb-4 ">Shop by category</h2>
      <CategoryContainer />
      <h3 className="text-4xl font-bold mb-4 ">Top picks</h3>
      <TopPicksContainer />
    </div>
  );
};

export default Page;
