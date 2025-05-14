"use server";
import axiosFetch from "@/config/axios.config";

export const fetchSliderData = async () => {
  try {
    const response = await axiosFetch.get(
      `/component/get?type=slider&status=true&limit=5`
    );
    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching slider data:", error.message);
    return [];
  }
};
