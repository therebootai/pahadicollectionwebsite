import axiosFetch from "@/config/axios.config";

export const fetchProductsData = async (
  page = 1,
  limit = 12,
  category = "",
  attributes = []
) => {
  try {
    let url = `/products?isActive=true&page=${page}&limit=${limit}`;

    if (category) {
      url += `&category=${encodeURIComponent(category)}`;
    }
    if (attributes.length > 0) {
      url += `&attribute=${attributes
        .map((attr) => encodeURIComponent(attr))
        .join(",")}`;
    }

    const response = await axiosFetch.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching Product data:", error.message);
    return { products: [], pagination: {} };
  }
};
