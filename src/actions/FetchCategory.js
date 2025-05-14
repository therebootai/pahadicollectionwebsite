"use server";
import axiosFetch from "@/config/axios.config";

export const fetchCategoryData = async () => {
  try {
    const response = await axiosFetch.get(`/category/get?isActive=true`);
    return response.data.categories || [];
  } catch (error) {
    console.error("Error fetching Category data:", error.message);
    return [];
  }
};
