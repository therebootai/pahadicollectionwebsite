import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function ProfileSideBar() {
  const pathname = useRouter().pathname;
  const { user } = useContext(AuthContext);

  const isActive = (path) => {
    return pathname === path;
  };

  if (!user) {
    return null;
  }
  return (
    <aside className="flex flex-col border border-[#ccc] rounded-sm">
      <div className="flex flex-col">
        <h2 className="text-custom-darkgreen text-lg md:text-xl xlg:text-2xl bg-custom-light-gray py-4 xlg:py-5 px-4 md:px-6 xlg:px-8">
          Account Settings
        </h2>
        <div className="py-4 xlg:py-5 px-4 md:px-6 xlg:px-8 flex flex-col gap-4">
          <Link
            href="/my-profile"
            className={`text-sm xlg:text-base hover:gradient-text ${
              isActive("/my-profile")
                ? "gradient-text"
                : "text-custom-darkgreen"
            }`}
          >
            Account information
          </Link>
          <Link
            href="/my-profile/manage-address"
            className={`text-sm xlg:text-base hover:gradient-text ${
              isActive("/my-profile/manage-address")
                ? "gradient-text"
                : "text-custom-darkgreen"
            }`}
          >
            Manage Address
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-custom-darkgreen text-lg md:text-xl xlg:text-2xl bg-custom-light-gray py-4 xlg:py-5 px-4 md:px-6 xlg:px-8">
          My Interactions
        </h2>
        <div className="py-4 xlg:py-5 px-4 md:px-6 xlg:px-8 flex flex-col gap-4">
          <Link
            href={`/my-interaction/my-wishlist`}
            className="text-custom-darkgreen text-sm xlg:text-base hover:gradient-text"
          >
            My Wishlist
          </Link>
          <Link
            href="/my-profile"
            className="text-custom-darkgreen text-sm xlg:text-base hover:gradient-text"
          >
            My Reviews
          </Link>
          <Link
            href="/my-interaction/my-cart"
            className="text-custom-darkgreen text-sm xlg:text-base hover:gradient-text"
          >
            My Cart
          </Link>
        </div>
      </div>
    </aside>
  );
}
