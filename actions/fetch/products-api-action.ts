"use server";
import { Product } from "@/types";
import axios from "axios";
export const getProducts = async (
  page: number,
  limit: number,
  query: string = ""
) => {
  const take = limit;
  const skip = (page - 1) * take;

  try {
    const url = `${process.env.FAKE_PRODUCT_API_URL}/products?limit=${take}&skip=${skip}`;
    const { data } = await axios.get(url);

    if (!data || data.error) {
      throw new Error("Data not found");
    }

    const filteredData = data.filter((product: Product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    const paginatedData = filteredData.slice(skip, skip + limit);
    return paginatedData;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
export const getTopProducts = async (page: number, limit: number) => {
  const take = limit;
  const skip = (page - 1) * take;

  try {
    const url = `${process.env.FAKE_PRODUCT_API_URL}/products?limit=${take}&skip=${skip}`;
    const { data } = await axios.get(url);

    if (!data || data.error) {
      throw new Error("Data not found");
    }
    const topProducts = data.filter(
      (product: Product) => product.rating.rate >= 4
    );
    const paginatedData = topProducts.slice(skip, skip + limit);

    return paginatedData;
  } catch (error) {
    console.error("Error fetching top products:", error);
    return [];
  }
};

export const getProductById = async (id: string) => {
  try {
    const url = `${process.env.FAKE_PRODUCT_API_URL}/products/${id}`;
    const { data } = await axios.get(url);
    if (!data || data.error) {
      throw new Error("Data not found");
    }
    return data;
  } catch (error) {
    console.error("Error fetching product by id:", error);
    return null;
  }
};
