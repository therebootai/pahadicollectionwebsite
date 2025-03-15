"use server";
import axiosFetch from "@/config/axios.config";

export const fetchProductsData = async (
  page = 1,
  limit = 12,
  category = "",
  attributes = []
) => {
  try {
    let url = `/products?isActive=true&page=${page}&limit=${limit}& is_drafted=false`;

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

export async function searchProducts({
  search = "",
  page = 1,
  sortBy = "",
  order = "",
}) {
  const query = { page, search, is_drafted: false };
  if (sortBy !== "") {
    query.sortBy = sortBy;
  }
  if (order !== "") {
    query.order = order;
  }
  try {
    const response = await axiosFetch.get(`/products/find`, {
      params: query,
    });
    return response.data;
  } catch (error) {
    console.error("Error Search Product:", error.message);
    return { products: [], pagination: {} };
  }
}
