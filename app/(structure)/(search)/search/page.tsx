import {
  getCategories,
  getCategorySubtree,
} from "@/actions/fetch/get/taxonomy api/fetch-categories-action";
import CategorySideBar from "@/components/category/sidebar/category-sidebar";
import { QueryParams, SearchProduct } from "@/types";
import ProductsContainer from "./_components/products-container";
import PaginationContainer from "@/components/pagination/pagination-contianer";
import { getItemsByQuery } from "@/actions/fetch/get/browse api/search";

type Props = {
  searchParams: QueryParams;
};

const SearchPage = async ({ searchParams }: Props) => {
  const queryResult = await getItemsByQuery(searchParams);

  let categories;
  let categoryTitle;
  if (searchParams.category_ids && searchParams.category_ids !== "0") {
    const categorySubtree = await getCategorySubtree(searchParams.category_ids);
    if (categorySubtree) {
      categories = categorySubtree.categorySubtreeNode.childCategoryTreeNodes;
      categoryTitle = categorySubtree.categorySubtreeNode.category.categoryName;
    } else {
      const categoryTree = await getCategories();
      categories = categoryTree?.rootCategoryNode.childCategoryTreeNodes;
    }
  } else {
    const categoryTree = await getCategories();
    categories = categoryTree?.rootCategoryNode.childCategoryTreeNodes;
  }

  const items: SearchProduct[] = queryResult ? queryResult.itemSummaries : [];
  const currentPage = searchParams.page ? Number(searchParams.page) : 1;
  const totalPages = queryResult
    ? Math.round(queryResult.total / queryResult.limit)
    : 0;

  return (
    <div className="flex flex-col min-h-[90dvh]">
      <main className="flex-grow py-6">
        <div className="grid grid-cols-4 mx-auto gap-0 md:gap-10 mt-6 lg:mt-0">
          <div className="hidden md:col-span-1 md:block">
            <CategorySideBar
              categories={categories}
              categoryTitle={categoryTitle}
            />
          </div>
          <div className="col-span-4 md:col-span-3 container ">
            <ProductsContainer products={items} />
          </div>
        </div>
      </main>

      {totalPages > 1 ? (
        <footer className="w-full mt-8 py-4 px-8 shadow-lg shadow-black">
          <PaginationContainer
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </footer>
      ) : null}
    </div>
  );
};

export default SearchPage;
