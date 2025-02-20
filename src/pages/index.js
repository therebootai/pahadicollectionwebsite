import HomeMainSlider from "@/components/home/HomeMainSlider";
import HomeProductSection from "@/components/home/HomeProductSection";
import ShopByCategory from "@/components/home/ShopByCategory";
import SpecialSection from "@/components/home/SpecialSection";
import TopCategories from "@/components/home/TopCategories";
import { fetchCategoryData } from "@/serverSide/FetchCategory";
import { fetchSliderData } from "@/serverSide/HomeMainSlider";
import MainPageTemplate from "@/templates/MainPageTemplate";

export default function Home({ sliders, categories }) {
  return (
    <MainPageTemplate>
      <HomeMainSlider sliders={sliders} />
      <SpecialSection />
      <TopCategories categories={categories} />
      <HomeProductSection />
      <ShopByCategory categories={categories} />
    </MainPageTemplate>
  );
}

export async function getServerSideProps() {
  const sliders = await fetchSliderData();
  const categories = await fetchCategoryData();

  return { props: { sliders, categories } };
}
