"use server";
import { getRequest } from "@/lib/getRequest";
import { authorization, domain } from "@/lib/request-env";
import { CategoryTreeIdResponse, CategoryTreeResponse } from "@/types";
export const getDefaultCategoryTreeId = async () => {
  try {
    const url = `${domain}/commerce/taxonomy/v1/get_default_category_tree_id?marketplace_id=${process.env.X_EBAY_C_MARKETPLACE}`;
    const headers = { ...authorization };
    return getRequest(url, headers);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
};

export const getCategories = async () => {
  const tree: CategoryTreeIdResponse = await getDefaultCategoryTreeId();
  const url = `${domain}/commerce/taxonomy/v1/category_tree/${tree.categoryTreeId}`;
  const headers = {
    ...authorization,
    "Accept-Encoding": "gzip",
  };
  try {
    const data: CategoryTreeResponse = await getRequest<CategoryTreeResponse>(
      url,
      headers
    );
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
};
