import axiosFetch from "@/config/axios.config";

export const fetchAtributeData = async () => {
  try {
    const response = await axiosFetch.get(`/attributes?isActive=true`);
    return response.data.attributes || [];
  } catch (error) {
    console.error("Error fetching Category data:", error.message);
    return [];
  }
};
