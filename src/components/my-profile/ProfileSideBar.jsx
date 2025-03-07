import Link from "next/link";

export default function ProfileSideBar() {
  return (
    <aside className="flex flex-col border border-[#ccc] rounded-sm">
      <div className="flex flex-col">
        <h2 className="text-custom-darkgreen text-lg md:text-xl xlg:text-2xl bg-custom-light-gray py-4 xlg:py-5 px-4 md:px-6 xlg:px-8">
          Account Settings
        </h2>
        <div className="py-4 xlg:py-5 px-4 md:px-6 xlg:px-8 flex flex-col gap-4">
          <Link
            href="/my-profile"
            className="text-custom-darkgreen text-sm xlg:text-base hover:gradient-text"
          >
            Account information
          </Link>
          <Link
            href="/my-profile/manage-address"
            className="text-custom-darkgreen text-sm xlg:text-base hover:gradient-text"
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
            href="/my-profile"
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
        </div>
      </div>
    </aside>
  );
}


