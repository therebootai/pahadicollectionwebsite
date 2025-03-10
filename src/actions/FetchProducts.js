import axiosFetch from "@/config/axios.config";

export const fetchProductsData = async (
  page = 1,
  limit = 12,
  category = ""
) => {
  try {
    let url = `/products?isActive=true&page=${page}&limit=${limit}`;

    if (category) {
      url += `&category=${encodeURIComponent(category)}`;
    }

    const response = await axiosFetch.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching Product data:", error.message);
    return { products: [], pagination: {} };
  }
};
