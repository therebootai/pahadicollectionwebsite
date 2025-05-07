import SubPageBanner from "@/components/global/SubPageBanner";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <MainPageTemplate
      metaData={{
        title: "Refund Policy",
        description: "Refund Policy",
      }}
    >
      <SubPageBanner subbanner={"/images/subbanner.jpg"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6 lg:gap-8">
        <h1 className="xlg:text-3xl md:text-2xl text-xl text-custom-darkgreen text-center">
          Refund Policy
        </h1>
        <p className="xlg:text-lg md:text-base text-sm text-custom-black">
          At Pahadi Collections, we strive to ensure that our customers are
          completely satisfied with their purchases. However, we understand that
          there may be occasions where you need to request a refund. Please read
          our refund policy carefully to understand the process and conditions
          for requesting a refund. <br /> <br />
          <b>1. Refund Eligibility:</b>
          <br />
          We offer refunds in the following situations: <br />
          &bull; If the product you receive is damaged, defective, or incorrect.{" "}
          <br />
          &bull; If the product is not as described or does not meet the
          specifications mentioned on our website. <br />
          <br />
          <br />
          <b>2. Non-Refundable Items:</b>
          <br />
          &bull;Customized or personalized products. <br />
          &bull; Products that have been used or are no longer in their original
          condition. <br />
          &bull; Any items purchased during sales or promotional periods
          &#40;unless otherwise stated&#41;. <br />
          <br />
          <br />
          <b>3. Requesting a Refund:</b>
          <br />
          To request a refund, please contact our customer service team at&nbsp;
          <Link
            href="mailTo:info@pahadicollections.com"
            className="text-custom-darkgold underline"
            target="_blank"
          >
            info@pahadicollections.com
          </Link>{" "}
          within 7 days of receiving your order. Include the following
          information in your refund request:
          <br />
          &bull; Customized or personalized products. <br />
          &bull; Products that have been used or are no longer in their original
          condition. <br />
          &bull; Any items purchased during sales or promotional periods
          &#40;unless otherwise stated&#41;. <br />
          Once we receive your request, we will review it and confirm whether
          you are eligible for a refund. If eligible, we will guide you through
          the process of returning the product.
          <br />
          <br />
          <b>4. Refund Process:</b>
          <br />
          &bull; After your refund request is approved, you will need to return
          the product to us in its original, unused condition, including all
          packaging.
          <br />
          &bull; The return shipping cost is the responsibility of the customer,
          unless the product was damaged or incorrect.
          <br />
          &bull; Once we receive the returned product, we will process the
          refund to the original payment method within 7-10 business days.
          <br />
          &bull; Please note that shipping fees are non-refundable, and the
          refund amount will exclude any shipping costs incurred during the
          original purchase.
          <br />
          <br />
          <b>5. Partial Refunds:</b>
          <br />
          In some cases, a partial refund may be issued if the returned product
          is used or damaged but still eligible for a refund. The amount will be
          based on the condition of the returned product. <br />
          <br />
          <b>6. Refund Disputes:</b>
          <br />
          If you are not satisfied with the resolution of your refund request,
          please contact our customer service team for further assistance. We
          are committed to resolving any issues and ensuring customer
          satisfaction.
          <br />
          <br />
          <b>7. Modifications to Refund Policy:</b>
          <br />
          Pahadi Collections reserves the right to modify or update this refund
          policy at any time. Any changes will be posted on this page, and the
          revised version will be effective immediately upon publication.
          <br />
          <br />
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
