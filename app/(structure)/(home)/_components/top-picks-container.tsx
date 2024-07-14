import { getTopProducts } from "@/actions/fetch/products-api-action";
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/cards/product-card";
import { Product } from "@/types";

const TopPicksContainer = async () => {
  const products = (await getTopProducts(1, 20)) as Product[];

  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default TopPicksContainer;

export const TopPicksContainerSkeleton = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {[...Array(10)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};
