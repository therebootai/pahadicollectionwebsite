import SubPageBanner from "@/components/global/SubPageBanner";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Link from "next/link";

export default function TermsAndConditionPage() {
  return (
    <MainPageTemplate
      metaData={{
        title: "Terms & Condition",
        description: "Terms & Condition",
      }}
    >
      <SubPageBanner subbanner={"/images/subbanner.jpg"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6 lg:gap-8">
        <h1 className="xlg:text-3xl md:text-2xl text-xl text-custom-darkgreen text-center">
          Terms &amp; Condition
        </h1>
        <p className="xlg:text-lg md:text-base text-sm text-custom-black">
          Welcome to Pahadi Collections! By accessing or using our website&nbsp;
          <Link className="text-blue-500 underline" href="/">
            www.pahadicollections.com
          </Link>
          , you agree to comply with the following Terms and Conditions. Please
          read them carefully before making any purchase or using our services.
          <br /> <br />
          <b>1. Acceptance of Terms:</b>
          <br />
          By using this website, you agree to be bound by these Terms and
          Conditions, along with any additional terms, policies, or guidelines
          posted on the website. If you do not agree with any of these terms,
          you must not use our website. <br />
          <br />
          <b>2. Account and Registration:</b>
          <br />
          To make a purchase or access certain features of our website, you may
          be required to create an account. You must provide accurate, current,
          and complete information during the registration process and keep your
          account information up to date. You are responsible for maintaining
          the confidentiality of your account login details and for all
          activities that occur under your account. <br />
          <br />
          <b>3. Product Information:</b>
          We strive to provide accurate and detailed descriptions of our
          products, including images, sizes, and pricing. However, there may be
          occasional discrepancies in product descriptions, availability, or
          pricing. Pahadi Collections reserves the right to correct any errors
          or inaccuracies and to update the website accordingly. <br />
          <br />
          <b>4. Order Process and Acceptance:</b>
          Once you place an order, we will confirm receipt by sending you an
          order confirmation email. This email will contain your order details
          and payment information. All orders are subject to verification and
          availability. Pahadi Collections reserves the right to cancel or
          refuse any order at our discretion. <br />
          <br />
          <b>5. Pricing and Payment:</b> <br />
          &bull; All prices listed on the website are in Indian Rupees
          &#40;INR&#41; unless otherwise specified. <br />
          &bull; We accept various payment methods, including credit/debit
          cards, net banking, and digital wallets.
          <br />
          &bull; In the event of any price discrepancies, we reserve the right
          to cancel the order or request the correct payment.
          <br />
          <b>6. Shipping and Delivery:</b> <br />
          We offer domestic and international shipping as detailed in our
          Shipping Policy. Shipping times and charges vary depending on the
          delivery location and the weight of your order. We are not responsible
          for any customs duties, taxes, or import restrictions that may apply
          to international orders. <br />
          <br />
          <b>7. Returns and Exchanges:</b> <br />
          Please refer to our Return Policy for details regarding returns,
          exchanges, and refunds. Returns are accepted for defective or damaged
          items only, and the request must be made within the specified time
          frame. <br />
          <br />
          <b>8. Intellectual Property:</b> <br />
          All content, images, logos, trademarks, and designs on this website
          are the intellectual property of Pahadi Collections and are protected
          by copyright laws. You may not use, reproduce, or distribute any
          content from this website without prior written consent from Pahadi
          Collections. <br />
          <br />
          <b>9. Privacy and Data Protection:</b> <br />
          Your use of the website is governed by our Privacy Policy, which
          outlines how we collect, use, and protect your personal information.
          By using our website, you consent to the collection and use of your
          data as outlined in the Privacy Policy. <br />
          <br />
          <b>10. User Conduct:</b> <br />
          You agree not to use this website for any unlawful purposes, including
          but not limited to: <br />
          &bull; Engaging in fraudulent activity or false advertising <br />
          &bull; Attempting to interfere with the website&apos;s functionality{" "}
          <br />
          &bull; Harassing, threatening, or otherwise violating the rights of
          others <br />
          <br />
          <b>11. Limitation of Liability:</b> <br />
          Pahadi Collections is not liable for any indirect, incidental,
          special, or consequential damages arising from the use of this website
          or the products purchased through it. In case of any issues with a
          product, our liability is limited to the price paid for the product in
          question.
          <br /> <br />
          <b>12. Modifications to Terms:</b> <br />
          Pahadi Collections reserves the right to modify or update these Terms
          and Conditions at any time without prior notice. Any changes will be
          posted on this page, and the revised version will be effective as soon
          as it is published.
          <br /> <br />
          <b>13. Governing Law:</b> <br />
          These Terms and Conditions are governed by and construed in accordance
          with the laws of India. Any disputes arising from these Terms and
          Conditions shall be subject to the exclusive jurisdiction of the
          courts in India.
          <br /> <br />
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
