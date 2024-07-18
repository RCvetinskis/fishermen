"use server";
import { getRequest } from "@/lib/getRequest";
import { domain, eBayHeaders } from "@/lib/request-env";
import { CategoryTreeResponse } from "@/types";
import { getOAuthToken } from "../../getOAuthToken";

export const getDefaultCategoryTreeId = async () => {
  try {
    const token = await getOAuthToken();
    const url = `${domain}/commerce/taxonomy/v1/get_default_category_tree_id?marketplace_id=${process.env.X_EBAY_C_MARKETPLACE}`;
    const headers = {
      Authorization: `Bearer ${token}`,
      ...eBayHeaders,
    };
    return getRequest(url, headers);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
};

export const getCategories = async () => {
  try {
    const tree = await getDefaultCategoryTreeId();
    if (!tree || !tree.categoryTreeId) {
      throw new Error("Invalid category tree ID response");
    }
    const token = await getOAuthToken();
    const url = `${domain}/commerce/taxonomy/v1/category_tree/${tree.categoryTreeId}`;
    const headers = {
      Authorization: `Bearer ${token}`,
      ...eBayHeaders,
      "Accept-Encoding": "gzip",
    };
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

export const getCategorySubtree = async (categoryId: string) => {
  try {
    const tree = await getDefaultCategoryTreeId();
    if (!tree || !tree.categoryTreeId) {
      throw new Error("Invalid category tree ID response");
    }
    const token = await getOAuthToken();
    const url = `${domain}/commerce/taxonomy/v1/category_tree/${tree.categoryTreeId}/get_category_subtree?category_id=${categoryId}`;
    const headers = {
      Authorization: `Bearer ${token}`,
      ...eBayHeaders,
      "Accept-Encoding": "gzip",
    };
    const data = await getRequest(url, headers);
    return data;
  } catch (error) {
    console.error("Error fetching categorySubtree:", error);
    return null;
  }
};
