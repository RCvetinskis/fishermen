"use server";

import { domain } from "@/lib/request-env";
import axios from "axios";

export const getOAuthToken = async () => {
  try {
    const clientId = process.env.EBAY_CLIENT_ID;
    const clientSecret = process.env.EBAY_CLIENT_SECRET;
    const base64Credentials = Buffer.from(
      `${clientId}:${clientSecret}`
    ).toString("base64");

    const response = await axios.post(
      `${domain}/identity/v1/oauth2/token`,
      "grant_type=client_credentials&scope=https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fbuy.item.bulk%20https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope%2Fbuy.deal",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${base64Credentials}`,
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.log("Error getOAuthToken:", error);
    return null;
  }
};
