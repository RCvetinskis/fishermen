"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import PaginationNumbers from "./pagination-numbers";
import { Button } from "../ui/button";

type Props = {
  totalPages: number;
  currentPage: number;
};

const PaginationContainer = ({ totalPages, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      router.push(`?${params.toString()}`);
    }
  };
  return (
    <Pagination className="flex items-center justify-center md:justify-end ">
      <PaginationContent>
        <PaginationItem className="hover:cursor-pointer">
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>

        <PaginationNumbers
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <PaginationItem className="hover:cursor-pointer">
          <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationContainer;
