import { getItemById } from "@/actions/fetch/get/browse api/getItem";
import ProductDetails, {
  ProductDetailsSkeleton,
} from "./_components/product details/product-details";
import { FullProduct } from "@/types";
import ImageContainer, { ImageContainerSkeleton } from "./_components/images";
import { Suspense } from "react";

type Props = {
  params: { id: string };
};

const ProductPage = async ({ params }: Props) => {
  const product = (await getItemById(params.id)) as FullProduct;
  if (!product) {
    return <div>Product not found!</div>;
  }

  // TODO:Finish product page
  // Material
  // LocalaizedAspects selecetd
  // CategoryPath
  // ShipingLocations

  return (
    <div className="md:container px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main Image */}
        <Suspense fallback={<ImageContainerSkeleton />}>
          <ImageContainer
            image={product.image}
            title={product.title}
            additionalImages={product.additionalImages}
          />
        </Suspense>

        {/* Product Details */}
        <Suspense fallback={<ProductDetailsSkeleton />}>
          <ProductDetails product={product} />
        </Suspense>
      </div>

      {/* Short desciprition */}
      {product.shortDescription && (
        <div className="mt-6">
          <p className="text-gray-700">{product.shortDescription}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
