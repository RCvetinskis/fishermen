"use server";
import { domain, eBayHeaders } from "@/lib/request-env";
import { getOAuthToken } from "../../getOAuthToken";
import { getRequest } from "@/lib/getRequest";

export const getDeals = async () => {
  try {
    const token = await getOAuthToken();
    const url = `${domain}/buy/deal/v1/deal_item?category_ids=9355`;
    const headers = {
      Authorization: `Bearer ${token}`,
      ...eBayHeaders,
    };

    return await getRequest(url, headers);
  } catch (error) {
    console.log("Error fetching deals:", error);
    return null;
  }
};
