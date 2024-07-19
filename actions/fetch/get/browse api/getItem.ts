"use server";
import { getRequest } from "@/lib/getRequest";
import { domain, eBayHeaders } from "@/lib/request-env";
import { getOAuthToken } from "../../getOAuthToken";

export const getItemById = async (item_id: string) => {
  try {
    const token = await getOAuthToken();
    const url = new URL(
      `${domain}/buy/browse/v1/item/${item_id}?fieldgroups=PRODUCT`
    );

    const headers = {
      Authorization: `Bearer ${token}`,
      ...eBayHeaders,
    };

    return await getRequest(url.toString(), headers);
  } catch (error) {
    console.log("Error fetching item by id:", error);
    return null;
  }
};
