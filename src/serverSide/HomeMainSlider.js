import axios from "axios";

export const fetchSliderData = async () => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const response = await axios.get(
      `${backendUrl}/component/get?type=slider&status=true&limit=5`
    );
    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching slider data:", error.message);
    return [];
  }
};
