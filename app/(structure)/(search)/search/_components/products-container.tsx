import ProductCard from "@/components/cards/product-card";
import { SearchProduct } from "@/types";

type Props = {
  products?: SearchProduct[] | [];
};

const ProductsContainer = ({ products }: Props) => {
  if (!products || products.length === 0) {
    return <div>Items not found!</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-10 ">
      {products.map((item) => (
        <ProductCard key={item.itemId} product={item} />
      ))}
    </div>
  );
};

export default ProductsContainer;
