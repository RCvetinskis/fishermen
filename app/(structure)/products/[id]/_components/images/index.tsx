"use client";
import { AdditionalImage, Image as TImage } from "@/types";
import Image from "next/image";
import AdditionalImages, {
  AddiotionalImagesSkeleton,
} from "./additiona-images";
import { useState } from "react";
import { ImagePreview } from "@/components/images/image-preview";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  image: TImage;
  title: string;
  additionalImages?: AdditionalImage[];
};

const ImageContainer = ({ image, title, additionalImages }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  if (!current && !image) {
    return <ImageContainerSkeleton />;
  }

  const handlePosition = (position: number) => {
    setCurrent((prev) => {
      if (prev === position) return prev;
      return position;
    });
  };

  const images = additionalImages ? [...additionalImages, image] : [image];
  const selectedImage = images[current];
  const currentImage = selectedImage?.imageUrl ?? "/assets/images/no_image.jpg";
  const width = selectedImage?.width ? Number(selectedImage.width) : 800;
  const height = selectedImage?.height ? Number(selectedImage.height) : 800;

  return (
    <div className="w-full flex flex-col items-center ">
      <ImagePreview image={currentImage} title={title}>
        <Image
          src={currentImage}
          alt={title}
          width={width}
          height={height}
          className="object-contain aspect-square  rounded-lg transition-opacity duration-[2s] cursor-pointer"
          onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
        />
      </ImagePreview>

      {/* Additional Images */}
      {additionalImages && (
        <div className="mt-6">
          <AdditionalImages
            images={images}
            current={current}
            handlePosition={handlePosition}
          />
        </div>
      )}
    </div>
  );
};

export default ImageContainer;

export const ImageContainerSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <Skeleton className="w-full h-full bg-gray-300 object-contain aspect-square  rounded-lg" />
      <div className="mt-6">
        <AddiotionalImagesSkeleton />
      </div>
    </div>
  );
};
