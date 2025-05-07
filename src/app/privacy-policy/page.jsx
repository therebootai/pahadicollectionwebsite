import SubPageBanner from "@/components/global/SubPageBanner";
import MainPageTemplate from "@/templates/MainPageTemplate";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <MainPageTemplate
      metaData={{
        title: "Privacy Policy",
        description: "Privacy Policy",
      }}
    >
      <SubPageBanner subbanner={"/images/subbanner.jpg"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-6 lg:gap-8">
        <h1 className="xlg:text-3xl md:text-2xl text-xl text-custom-darkgreen text-center">
          Privacy Policy
        </h1>
        <p className="xlg:text-lg md:text-base text-sm text-custom-black">
          At Pahadi Collections, your privacy is of utmost importance to us.
          This Privacy Policy outlines how we collect, use, protect, and
          disclose your personal information when you visit our website&nbsp;
          <Link className="text-blue-500 underline" href="/">
            www.pahadicollections.com
          </Link>
          or make a purchase. By using our website, you agree to the practices
          described in this policy.
          <br /> <br />
          <b>1. Information We Collect:</b>
          <br />
          We offer refunds in the following situations: <br />
          &bull; <b>Personal Information:</b> This includes information that can
          be used to identify you, such as your name, email address, phone
          number, shipping address, billing address, and payment details.
          <br />
          &bull; <b>Non-Personal Information:</b> This includes general
          information about your usage of our website, such as browser type,
          device type, IP address, and other browsing-related data that cannot
          personally identify you.
          <br />
          <br />
          <b>2. How We Collect Information:</b>
          <br />
          &bull; <b>Account Registration:</b> When you create an account or make
          a purchase on our website, we collect your personal information such
          as name, email, shipping and billing addresses, and payment
          information.
          <br />
          &bull; <b>Cookies:</b> We use cookies and similar technologies to
          track your browsing behavior on our website. These cookies help us
          improve your user experience and provide personalized content and ads.
          You can manage your cookie preferences through your browser settings.
          <br />
          &bull; <b>Analytics:</b> We use web analytics tools &#40;such as
          Google Analytics&#41; to track user behavior on our site. These tools
          collect non-personally identifiable information to help us analyze how
          visitors interact with our website.
          <br />
          <br />
          <b>3. How We Use Your Information:</b>
          <br />
          &bull; To process and fulfill your orders.
          <br />
          &bull; To send you order confirmations, shipping updates, and other
          transactional communications.
          <br />
          &bull; To improve our website&apos;s functionality and user
          experience.
          <br />
          &bull; To respond to customer service inquiries and resolve issues.
          <br />
          &bull; To send promotional emails, newsletters, or updates about our
          products, unless you opt-out.
          <br />
          &bull; To send promotional emails, newsletters, or updates about our
          products, unless you opt-out.
          <br />
          <br />
          <b>4. Sharing Your Information:</b>
          <br />
          &bull; <b>Service Providers:</b> We may share your information with
          trusted third-party service providers who assist us in operating our
          website, processing payments, and fulfilling orders. These providers
          are required to keep your information confidential and use it solely
          for the purposes of providing the requested services.
          <br />
          &bull; <b>Cookies:</b> We use cookies and similar technologies to
          track your browsing behavior on our website. These cookies help us
          improve your user experience and provide personalized content and ads.
          You can manage your cookie preferences through your browser settings.
          <br />
          &bull; <b>Legal Requirements:</b> We may disclose your information to
          comply with legal obligations or respond to lawful requests by
          government authorities.
          <br />
          <br />
          <b>5. Data Security:</b>
          <br />
          We take the security of your personal information seriously and use
          industry-standard encryption &#40;SSL&#41; to protect sensitive data
          during transmission. However, no method of data transmission over the
          internet is 100% secure. While we strive to use commercially
          acceptable means to protect your personal information, we cannot
          guarantee its absolute security.
          <br />
          <br />
          <b>6. Your Rights and Choices:</b>
          <br />
          &bull; <b>Access:</b> You can request a copy of the personal
          information we hold about you.
          <br />
          <br />
          &bull; <b>Correction:</b> You can update or correct any inaccuracies
          in your personal information.
          <br />
          <br />
          &bull; <b>Deletion:</b> You may request the deletion of your personal
          information, subject to certain legal requirements.
          <br />
          <br />
          &bull; <b>Opt-Out:</b> You can unsubscribe from our promotional emails
          at any time by following the unsubscribe instructions in the emails.
          <br />
          <br />
          <b>7. Children&apos;s Privacy:</b>
          <br />
          Our website is not intended for children under the age of 18. We do
          not knowingly collect or solicit personal information from children.
          If we discover that we have collected personal information from a
          child under 18, we will take steps to delete that information as soon
          as possible.
          <br />
          <br />
          <b>8. Changes to This Privacy Policy:</b>
          <br />
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated date. By continuing to use our
          website after such changes, you agree to the revised policy.
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
