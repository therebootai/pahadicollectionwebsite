import { fetchCategoryData } from "@/actions/FetchCategory";
import { fetchProductsData } from "@/actions/FetchProducts";
import { fetchSliderData } from "@/actions/HomeMainSlider";
import DisscussSection from "@/components/home/DisscussSection";
import HomeMainSlider from "@/components/home/HomeMainSlider";
import HomeProductSection from "@/components/home/HomeProductSection";
import ReviewSection from "@/components/home/ReviewSection";
import ShopByCategory from "@/components/home/ShopByCategory";
import SpecialSection from "@/components/home/SpecialSection";
import ThinkToBuySection from "@/components/home/ThinkToBuySection";
import TopCategories from "@/components/home/TopCategories";
import MainPageTemplate from "@/templates/MainPageTemplate";

export default async function Home() {
  const { sliders, categories, products } = await getPageProps();

  return (
    <MainPageTemplate metaData={{ title: "Home", description: "Home" }}>
      <HomeMainSlider sliders={sliders} />
      <SpecialSection />
      <TopCategories categories={categories} />
      <HomeProductSection products={products} />
      <ShopByCategory categories={categories} />
      <ThinkToBuySection />
      <ReviewSection />
      <DisscussSection />
    </MainPageTemplate>
  );
}

async function getPageProps() {
  try {
    const [sliders, categories, products] = await Promise.all([
      fetchSliderData(),
      fetchCategoryData(),
      fetchProductsData(1, 12),
    ]);

    return { sliders, categories, products: products.products };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
