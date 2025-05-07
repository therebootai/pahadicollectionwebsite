import LoginForm from "@/components/login/LoginForm";
import MainPageTemplate from "@/templates/MainPageTemplate";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Login() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token") || null;

  if (token && token.value) {
    redirect("/");
  }

  return (
    <MainPageTemplate metaData={{ title: "Login", description: "Login" }}>
      <div className="flex flex-col gap-4 xlg:gap-6 p-4 md:p-6 xlg:p-12">
        <h1 className="text-2xl xlg:text-4xl text-custom-darkgreen self-center text-center">
          Welcome Back!
        </h1>
        <p className="text-lg xlg:text-xl text-custom-black self-center text-center">
          fill the form below to access your account, orders, carts
        </p>
        <LoginForm />
        <div className="flex flex-col items-center gap-6">
          <button
            type="button"
            className="text-custom-darkgreen xlg:text-xl md:text-base text-sm"
          >
            Forget Password ?
          </button>
          <Link
            href="/signup"
            className="text-custom-darkgreen xlg:text-xl md:text-base text-sm"
          >
            New here? Sign Up now !
          </Link>
        </div>
      </div>
    </MainPageTemplate>
  );
}
