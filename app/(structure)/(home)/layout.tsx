import SideBar from "@/components/sidebar";
import Hero from "../_components/hero";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <header className="w-full">
        <Hero />
      </header>

      <main className="col-span-5 md:container mt-4 ">{children}</main>
    </div>
  );
};

export default Layout;
