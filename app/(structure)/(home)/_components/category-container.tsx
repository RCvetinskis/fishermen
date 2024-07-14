import CategoryCard from "@/components/cards/category-card";
import { categories } from "@/lib/categories";

type Props = {};

const CategoryContainer = (props: Props) => {
  return (
    <main className="flex flex-wrap items-center gap-10">
      {categories.map((category) => (
        <CategoryCard key={category.query} category={category} />
      ))}
    </main>
  );
};

export default CategoryContainer;
