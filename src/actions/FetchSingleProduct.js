import axiosFetch from "@/config/axios.config";

export const fetchSingleProductData = async (slug) => {
  try {
    const response = await axiosFetch.get(`/products/slug/${slug}`);

    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching product data:", error.message);
    return [];
  }
};
