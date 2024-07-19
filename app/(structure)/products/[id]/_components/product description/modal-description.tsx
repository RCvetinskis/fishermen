"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  description: string;
};

const ModalDescription = ({ description }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-0 " variant={"link"} size={"lg"}>
          View Description
        </Button>
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="!max-w-[1200px] w-full h-screen overflow-y-auto bg-white text-black"
      >
        <DialogTitle className="text-xl font-semibold mb-2">
          Product Description
        </DialogTitle>

        <div
          className="!bg-inherit"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalDescription;

export const ModalDescriptionSkeleton = () => {
  return <Skeleton className="w-1/3 h-6 " />;
};
