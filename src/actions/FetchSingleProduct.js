import axiosFetch from "@/config/axios.config";

export const fetchSingleProductData = async (slug) => {
  try {
    console.log("Fetching product with slug:", slug);
    const response = await axiosFetch.get(`/products/${slug}`);
    console.log("API Response:", response.data);
    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching product data:", error.message);
    return [];
  }
};
