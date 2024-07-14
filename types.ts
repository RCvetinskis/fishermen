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
