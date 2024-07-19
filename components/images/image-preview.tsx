"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { Button } from "../ui/button";

type Props = {
  children: React.ReactNode;
  image: string;
  title: string;
};
export const ImagePreview = ({ image, children, title }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        aria-describedby={undefined}
        className="max-w-screen h-screen border-none  flex items-center justify-center"
      >
        <DialogTitle className="hidden">{title}</DialogTitle>
        <div key={image} className="relative cursor-zoom-in">
          <TransformWrapper initialScale={1} panning={{ disabled: true }}>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className=" absolute right-[5%] bottom-[5%] z-[45]">
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    onClick={() => zoomIn()}
                  >
                    +
                  </Button>
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    onClick={() => zoomOut()}
                  >
                    -
                  </Button>
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    onClick={() => resetTransform()}
                  >
                    x
                  </Button>
                </div>
                <TransformComponent>
                  <Image
                    src={image}
                    alt="post image"
                    width={1000}
                    height={1000}
                    className="aspect-square object-contain rounded-xl transition-opacity opacity-0  duration-[2s]"
                    onLoad={(e) =>
                      e.currentTarget.classList.remove("opacity-0")
                    }
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </DialogContent>
    </Dialog>
  );
};
