import DisscussSection from "@/components/home/DisscussSection";
import HomeMainSlider from "@/components/home/HomeMainSlider";
import HomeProductSection from "@/components/home/HomeProductSection";
import ReviewSection from "@/components/home/ReviewSection";
import ShopByCategory from "@/components/home/ShopByCategory";
import SpecialSection from "@/components/home/SpecialSection";
import ThinkToBuySection from "@/components/home/ThinkToBuySection";
import TopCategories from "@/components/home/TopCategories";
import { fetchCategoryData } from "@/actions/FetchCategory";
import { fetchSliderData } from "@/actions/HomeMainSlider";
import MainPageTemplate from "@/templates/MainPageTemplate";

export default function Home({ sliders, categories }) {
  return (
    <MainPageTemplate metaData={{ title: "Home", description: "Home" }}>
      <HomeMainSlider sliders={sliders} />
      <SpecialSection />
      <TopCategories categories={categories} />
      <HomeProductSection />
      <ShopByCategory categories={categories} />
      <ThinkToBuySection />
      <ReviewSection />
      <DisscussSection />
    </MainPageTemplate>
  );
}

export async function getServerSideProps() {
  const sliders = await fetchSliderData();
  const categories = await fetchCategoryData();

  return { props: { sliders, categories } };
}
