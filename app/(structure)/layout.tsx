import { getCategories } from "@/actions/fetch/get/taxonomy api/fetch-categories-action";
import NavBar from "@/components/navigation/index";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const categories = await getCategories();
  if (!categories) {
    return (
      <div>
        <h1>Categories not found!</h1>
      </div>
    );
  }
  return (
    <div>
      <NavBar categories={categories} />
      <main className="mt-[140px] md:mt-[90px]">{children}</main>
    </div>
  );
};

export default Layout;
