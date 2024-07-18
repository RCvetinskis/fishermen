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
      <main className="col-span-5  p-10 md:p-2 md:container mt-2 ">
        {children}
      </main>
    </div>
  );
};

export default Layout;
