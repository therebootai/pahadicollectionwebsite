import axios from "axios";

export const fetchCategoryData = async () => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const response = await axios.get(
      `${backendUrl}/category/get?isActive=true`
    );
    return response.data.categories || [];
  } catch (error) {
    console.error("Error fetching Category data:", error.message);
    return [];
  }
};
