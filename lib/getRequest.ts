import axios from "axios";

export const getRequest = async <T>(
  url: string,
  headers?: { Authorization: string; "Accept-Encoding"?: string }
) => {
  const { data } = await axios.get(url, { headers });

  if (!data || data.errors) {
    throw new Error("Data not found or error occurred");
  }
  return data;
};
