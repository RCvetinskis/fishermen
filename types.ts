export interface Route {
  href?: string;
  label?: string;
  active?: boolean;
  Component: React.ComponentType<any>;
}
export type Category = {
  label: string;
  query: string;
  image?: string;
};

export type Product = {
  id: string | number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
