import { fetchAllCoupons } from "@/actions/couponAction";
import { fetchProductsData } from "@/actions/FetchProducts";
import { fetchSingleProductData } from "@/actions/FetchSingleProduct";
import SubPageBanner from "@/components/global/SubPageBanner";
import ProductDetailsPage from "@/components/productpage/ProductDetailsPage";
import MainPageTemplate from "@/templates/MainPageTemplate";

export default async function ProductDetails({ params }) {
  const { slug } = await params;
  const { product, products, coupons } = await getPageProps(slug);

  return (
    <MainPageTemplate
      metaData={{ title: product.title, description: product.description }}
    >
      <SubPageBanner subbanner={"/images/subbanner.jpg"} />
      <ProductDetailsPage
        title={product.title}
        price={Math.round(product.price)}
        productId={product._id}
        productImage={
          Array.isArray(product.productImage)
            ? product.productImage.map((img) => img.secure_url)
            : []
        }
        mrp={Math.round(product.mrp)}
        discount={product.discount}
        slug={product.slug}
        description={product.description}
        specification={product.specification}
        stock={product.in_stock}
        products={products}
        category={product.category.mainCategory}
        coupons={coupons}
      />
    </MainPageTemplate>
  );
}

async function getPageProps(slug) {
  const product = await fetchSingleProductData(slug);
  const category = product.category.mainCategory;
  const [initialData, coupons] = await Promise.all([
    fetchProductsData(1, 12, category),
    fetchAllCoupons(),
  ]);
  return {
    product,
    products: initialData.products,
    coupons,
  };
}
