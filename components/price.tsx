import { MarketingPrice, Price as TPrice } from "@/types";

type Props = {
  price?: TPrice;
  marketingPrice?: MarketingPrice;
};

const Price = ({ price, marketingPrice }: Props) => {
  return (
    <div className="text-xs w-full">
      {marketingPrice && (
        <div className="flex justify-between items-center space-x-2">
          <span className="line-through text-gray-500">
            {marketingPrice.originalPrice.currency}{" "}
            {marketingPrice.originalPrice.value}
          </span>
          <span className="text-red-600 font-semibold">
            {price?.currency} {price?.value}
          </span>
          <span className="bg-green-200 text-green-800 text-xs font-medium px-2 py-1 rounded">
            {marketingPrice.discountPercentage}% off
          </span>
        </div>
      )}
      {!marketingPrice && price && (
        <div className="text-end font-semibold">
          {price.currency} {price.value}
        </div>
      )}
    </div>
  );
};

export default Price;
