"use server";
import { domainSVC } from "@/lib/request-env";
import { getOAuthToken } from "../../getOAuthToken";

import axios from "axios";

export const getItemsByCategory = async (categoryId: string) => {
  try {
    const token = await getOAuthToken();
    const url = `${domainSVC}/services/search/FindingService/v1`;

    const headers = {
      Authorization: `Bearer ${token}`,
      "X-EBAY-SOA-OPERATION-NAME": "findItemsByCategory",
      "X-EBAY-SOA-SECURITY-APPNAME": process.env.EBAY_CLIENT_ID,
      "X-EBAY-SOA-RESPONSE-DATA-FORMAT": "JSON",
    };

    const requestBody = `<?xml version="1.0" encoding="UTF-8"?>
<findItemsByCategoryRequest xmlns="http://www.ebay.com/marketplace/search/v1/services">
  <categoryId>${categoryId}</categoryId>
  <paginationInput>
    <entriesPerPage>1</entriesPerPage>
  </paginationInput>
</findItemsByCategoryRequest>`;

    const { data } = await axios.post(url, requestBody, { headers });
    if (!data || data.errros) {
      throw new Error("Items not found.");
    }
    return data.findItemsByCategoryResponse[0];
  } catch (error) {
    console.log("Error fetching deals:", error);
    return null;
  }
};
