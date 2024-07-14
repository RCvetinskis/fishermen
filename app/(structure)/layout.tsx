import NavBar from "@/components/navigation/index";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      <main className="mt-[140px] md:mt-[90px]">{children}</main>
    </div>
  );
};

export default Layout;
