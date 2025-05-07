import SignUpForm from "@/components/signup/SignUpForm";
import MainPageTemplate from "@/templates/MainPageTemplate";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Signup() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token") || null;

  if (token && token.value) {
    redirect("/");
  }

  return (
    <MainPageTemplate metaData={{ title: "Signup", description: "Signup" }}>
      <div className="flex flex-col gap-4 xlg:gap-6 p-4 md:p-6 xlg:p-12">
        <h1 className="text-2xl xlg:text-4xl text-custom-darkgreen self-center text-center">
          Welcome to Pahadi Collection
        </h1>
        <p className="text-lg xlg:text-xl text-custom-black self-center text-center">
          fill the form below to create new account for accessing your orders,
          carts
        </p>
        <SignUpForm />
        <Link
          href="/login"
          className="text-custom-darkgreen xlg:text-xl md:text-base text-sm text-center"
        >
          Already have an Account? Log in now !
        </Link>
      </div>
    </MainPageTemplate>
  );
}
