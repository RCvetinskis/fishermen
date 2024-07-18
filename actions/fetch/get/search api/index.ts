"use server";

import { getRequest } from "@/lib/getRequest";
import { domain, eBayHeaders } from "@/lib/request-env";
import { getOAuthToken } from "../../getOAuthToken";
import { QueryParams } from "@/types";
import axios from "axios";

export const getItemsByQuery = async (
  queryParams: QueryParams = {},

  limit: string = "20"
) => {
  try {
    const token = await getOAuthToken();
    const url = new URL(`${domain}/buy/browse/v1/item_summary/search`);

    const offset = (
      (queryParams.page ? Number(queryParams.page) - 1 : 0) * Number(limit)
    ).toString();

    // by default append limit 20
    url.searchParams.set("limit", limit);
    if (queryParams.page) url.searchParams.set("offset", offset);

    // Append additional query parameters
    Object.keys(queryParams).forEach((key) => {
      if (queryParams[key as keyof QueryParams]) {
        url.searchParams.set(key, queryParams[key as keyof QueryParams]!);
      }
    });

    const headers = {
      Authorization: `Bearer ${token}`,
      ...eBayHeaders,
    };

    return getRequest(url.toString(), headers);
  } catch (error) {
    console.log("Error fetching items by query:", error);
    return null;
  }
};
