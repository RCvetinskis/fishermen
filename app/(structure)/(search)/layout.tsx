import CategorySideBar from "@/components/category/sidebar/category-sidebar";

type Props = {
  children: React.ReactNode;
};

const SearchLayout = ({ children }: Props) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default SearchLayout;
// import CategorySideBar from "@/components/category/sidebar/category-sidebar";

// type Props = {
//   children: React.ReactNode;
// };

// const SearchLayout = ({ children }: Props) => {
//   return (
//     <div className="grid grid-cols-4 mx-auto gap-0 md:gap-10 mt-[140px] lg:mt-0 h-full">
//       <div className="hidden md:col-span-1  md:block">
//         <CategorySideBar />
//       </div>
//       <main className="col-span-4 md:col-span-3  container">{children}</main>
//     </div>
//   );
// };

// export default SearchLayout;
