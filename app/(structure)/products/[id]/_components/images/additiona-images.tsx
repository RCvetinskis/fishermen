"use client";
import { AdditionalImage } from "@/types";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  images: AdditionalImage[];
  current: number;
  handlePosition: (position: number) => void;
};

const AdditionalImages = ({ images, current, handlePosition }: Props) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full px-10"
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem
            key={index}
            className={cn(
              "carousel-item basis-1/4 md:basis-1/5 lg:basis-1/6 ",
              current === index && "scale-125"
            )}
          >
            <Image
              onClick={() => handlePosition(index)}
              src={img.imageUrl}
              alt={`product image ${index + 1}`}
              width={300}
              height={300}
              onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
              className="aspect-square rounded-lg object-contain transition-opacity duration-[2s]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default AdditionalImages;

export const AddiotionalImagesSkeleton = () => {
  return (
    <div className="w-full px-10 flex items-center justify-center gap-3">
      {[...Array(4)].map((_, i) => (
        <Skeleton
          key={i}
          className="w-[70px] h-[70px] rounded-lg bg-gray-300"
        />
      ))}
    </div>
  );
};
