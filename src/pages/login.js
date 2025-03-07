import LoginForm from "@/components/login/LoginForm";
import MainPageTemplate from "@/templates/MainPageTemplate";

export default function Login() {
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
      </div>
    </MainPageTemplate>
  );
}
