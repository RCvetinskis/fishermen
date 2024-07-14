import { getProductById } from "@/actions/fetch/products-api-action";
import { Product } from "@/types";
import Image from "next/image";

type Props = {
  params: { id: string };
};

const ProductPage = async ({ params }: Props) => {
  const product = (await getProductById(params.id)) as Product;
  console.log(product);
  return (
    <div className="grid grid-cols-2">
      <div className="relative h-96">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-center p-4">
        <div>
          <h1 className="font-bold text-xl">{product.title}</h1>
          <p className="text-sm">{product.description}</p>
          <p className="text-lg font-semibold">{product.price} $</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
