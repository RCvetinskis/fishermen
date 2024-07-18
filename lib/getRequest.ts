import axios from "axios";

export const getRequest = async <T>(
  url: string,
  headers?: { Authorization: string; "Accept-Encoding"?: string }
) => {
  try {
    const { data } = await axios.get(url, { headers });

    if (!data || data.errors) {
      throw new Error("Data not found or error occurred");
    }
    return data;
  } catch (error) {
    console.log("Error getRequest:", error);
    return null;
  }
};
