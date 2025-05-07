import SubPageBanner from "@/components/global/SubPageBanner";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Link from "next/link";

export default function ShippingPolicyPage() {
  return (
    <MainPageTemplate
      metaData={{ title: "Shipping Policy", description: "Shipping Policy" }}
    >
      <SubPageBanner subbanner={"/images/subbanner.jpg"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6 lg:gap-8">
        <h1 className="xlg:text-3xl md:text-2xl text-xl text-custom-darkgreen text-center">
          Shipping Policy
        </h1>
        <p className="xlg:text-lg md:text-base text-sm text-custom-black">
          At Pahadi Collections, we are committed to providing you with a
          seamless shopping experience and ensuring that your orders arrive
          promptly and safely. Below is our shipping policy to guide you through
          our shipping process: <br /> <br />
          <b>Shipping Location:</b> <br />
          We proudly serve customers across India and globally. <br /> <br />
          <b>Shipping Time:</b> <br />
          &bull; Domestic Orders &#40;within India&#41;: All orders are
          processed within 1-2 business days. Delivery usually takes 5-7
          business days, depending on the destination. <br />
          &bull; International Orders: Delivery times for international orders
          may vary. It typically takes 7-15 business days, depending on the
          destination country. <br /> <br />
          <b>Shipping Charges:</b> <br />
          &bull;Shipping fees are calculated at checkout based on the delivery
          location and the weight of your order. <br />
          &bull;Free shipping is available for all orders over ₹2,000 within
          India. <br /> <br />
          <b>Order Processing:</b> <br />
          &bull;Orders are processed from Monday to Saturday &#40;excluding
          holidays&#41;. Once your order is shipped, you will receive an email
          notification with tracking details. <br /> <br />
          <b>Packaging:</b> <br />
          All our products are carefully packaged to ensure that they reach you
          in perfect condition. As we specialize in handmade Nepali jewelry,
          extra care is taken to protect each piece during transit. <br />
          <br />
          <b>Shipping Address:</b> <br />
          Please ensure that you provide an accurate shipping address when
          placing your order. We are not responsible for lost or delayed orders
          due to incorrect or incomplete addresses. <br /> <br />
          <b>Contact Information:</b> <br />
          For any inquiries or concerns about shipping, please contact us at:{" "}
          <br />
          &bull;Email:{" "}
          <Link
            href="mailTo:pahadicollections124@gmail.com"
            className="underline text-custom-darkgold"
          >
            pahadicollections124@gmail.com
          </Link>
          <br /> <br />
          <b>Our Address:</b> <br />
          Pahadi Collections,
          <br />
          Taranjubari, New Chamta, Khaprail,
          <br />
          Matigara, WB 734009,
          <br />
          India
        </p>
      </div>
    </MainPageTemplate>
  );
}
