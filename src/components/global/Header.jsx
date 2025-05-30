"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCloseSharp, IoLogOut, IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { AiOutlineMenuFold } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart, MdFolderShared } from "react-icons/md";
import axiosFetch from "@/config/axios.config";
import { AuthContext } from "@/context/AuthContext";
import { HiArchiveBox } from "react-icons/hi2";
import { FaUser } from "react-icons/fa6";
import { logoutCustomer } from "@/actions/authActions";
import { toast } from "react-toastify";
import GlobalSearch from "@/ui/GlobalSearch";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouter().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [logo, setLogo] = useState();
  const [showSearchBox, setShowSearchBox] = useState(false);

  const { user, logout, isAuthenticated } = useContext(AuthContext);

  const fetchLogo = async () => {
    try {
      const response = await axiosFetch.get(
        `/component/get?type=logo&status=true&limit=1`
      );

      if (response.data?.data?.length > 0) {
        setLogo(response.data.data[0]); // Set first object in array
      }
    } catch (error) {
      console.error("Error fetching components:", error);
    }
  };

  useEffect(() => {
    fetchLogo();
  }, []);

  const isActive = (path) => {
    return pathname === path;
  };

  const NavLinksData = [
    {
      text: "home",
      href: "/",
    },
    // {
    //   text: "Shop",
    //   href: "",
    // },

    {
      text: "Products",

      href: "/products?page=1",
    },
    // {
    //   text: "Blogs",
    //   href: "",
    // },
    // {
    //   text: "Gallery",
    //   href: "",
    // },
    {
      text: "Contact Us",
      href: "/contact-us",
    },
  ];

  const profileLinks = user
    ? [
        {
          text: "Account Settings",
          subMenu: [
            {
              text: "Profile",
              href: "/my-profile",
            },
            {
              text: "Manage Address",
              href: "/my-profile/manage-address",
            },
          ],
        },
        {
          text: "My Interactions",
          subMenu: [
            {
              text: "Wishlists",
              href: "/my-interaction/my-wishlist",
            },
            {
              text: "Cart",
              href: "/my-interaction/my-cart",
            },
            {
              text: "Orders",
              href: "/my-orders",
            },
          ],
        },
      ]
    : [
        {
          text: "Login",
          href: "/login",
        },
        {
          text: "Create an Account",
          href: "/signup",
        },
      ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function handleLogout() {
    try {
      const response = await logoutCustomer();
      if (response.message && response.message !== "Logout successful") {
        throw new Error(response.message);
      }
      toast.success("You successfully logged out.");
      logout();
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  }
  return (
    <div
      className={`flex justify-between items-center md:px-6 px-4 fixed lg:px-8 h-[3.5rem] md:h-[5rem] w-full z-[60] bg-custom-green shadow-md ${
        scrolled ? "top-0 " : "md:top-[3rem] top-0"
      }`}
    >
      {/* Logo */}

      <Link href={"/"}>
        <Image
          src={
            logo ? logo.component_image.secure_url : "/images/pahadilogo.png"
          }
          alt="logo"
          width={1224}
          height={133}
          priority
          className="md:h-[2rem] lg:h-[2rem] xl:h-[2.5rem] h-[1.5rem] w-fit"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center  justify-center gap-5">
        {NavLinksData.map((item, index) => (
          <li key={index} className="relative group">
            {item.href ? (
              <Link
                href={item.href}
                className={`${
                  isActive(item.href) ? "text-custom-gold" : "text-white"
                } text-sm xlg:text-base xl:text-lg font-medium capitalize hover:text-custom-gold `}
              >
                {item.text}
              </Link>
            ) : (
              <div className="relative">
                <span
                  className={`${
                    isActive(item.href) ? "text-custom-gold" : "text-white"
                  } text-sm xlg:text-base xl:text-lg font-medium capitalize cursor-pointer hover:text-custom-gold`}
                >
                  {item.text}
                </span>
                {item.subMenu && item.subMenu.length > 0 && (
                  <div className="absolute top-full bg-defined-green/50  left-1/2 -translate-x-1/2 duration-500 transition-all origin-top-right opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto overflow-hidden flex rounded">
                    <div className="text-white flex flex-col gap-6 whitespace-nowrap p-2 py-4 xlg:p-4">
                      <ul className="flex flex-row gap-4">
                        {item.subMenu.map((menu, con) => (
                          <div
                            className="text-white flex flex-col gap-6 whitespace-nowrap p-2 py-4 xlg:p-4"
                            key={con}
                          >
                            <ul className="flex flex-col gap-4">
                              {menu.menus.map((link, indx) => (
                                <li
                                  key={indx}
                                  className="text-base xlg:text-lg"
                                >
                                  <Link
                                    href={link.href}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-custom-darkgreen">
                                      &gt;
                                    </span>
                                    {link.text}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center lg:gap-5 text-white text-xl font-medium">
        <button type="button" onClick={() => setShowSearchBox(true)}>
          <IoSearch />
        </button>
        <div className="relative group inline-flex items-center justify-center">
          {user ? (
            user.profileImage ? (
              <Image
                src={user.profileImage.secure_url}
                alt="profile"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-custom-darkgreen text-custom-gold flex items-center justify-center">
                {user.name.slice(0, 1).toUpperCase()}
              </div>
            )
          ) : (
            <button type="button" className="">
              <CgProfile />
            </button>
          )}
          <div className="absolute top-full py-4  bg-white  left-1/2 -translate-x-1/2 duration-500 transition-all origin-top-right opacity-0 group-hover:opacity-100 overflow-hidden hidden group-hover:block rounded">
            {user ? (
              <div className="flex flex-col">
                <div className="flex flex-col mx-4">
                  <h1 className="text-xl text-custom-darkgreen">{user.name}</h1>
                </div>
                <Link
                  href={"/my-orders"}
                  className="text-custom-darkgreen inline-flex gap-4 items-center py-2 bg-custom-light-gray px-5 text-sm xlg:text-base border-b border-[#ccc]"
                >
                  <HiArchiveBox className="shrink-0" />
                  <span className="whitespace-nowrap">My orders</span>
                </Link>
                <Link
                  href={"/my-profile"}
                  className="text-custom-darkgreen inline-flex gap-4 items-center py-2 bg-custom-light-gray px-5 text-sm xlg:text-base border-b border-[#ccc]"
                >
                  <FaUser className="shrink-0" />
                  <span className="whitespace-nowrap">Account Settings</span>
                </Link>
                <Link
                  href={"/my-interaction/my-wishlist"}
                  className="text-custom-darkgreen inline-flex gap-4 items-center py-2 bg-custom-light-gray px-5 text-sm xlg:text-base border-b border-[#ccc]"
                >
                  <MdFolderShared className="shrink-0" />
                  <span className="whitespace-nowrap">My Interactions</span>
                </Link>
                <button
                  type="button"
                  className="text-custom-darkgreen inline-flex gap-4 items-center py-2 bg-custom-light-gray px-5 text-sm xlg:text-base border-b border-[#ccc]"
                  onClick={handleLogout}
                >
                  <IoLogOut className="shrink-0" />
                  <span className="whitespace-nowrap">Log Out</span>
                </button>
              </div>
            ) : (
              <div className="flex gap-4 mx-5">
                <Link
                  href="/login"
                  className="bg-custom-darkgreen text-white text-base py-3 w-28 text-center"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-custom-darkgreen bg-custom-light-gray text-base py-3 w-28 text-center"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
        <Link
          href={isAuthenticated ? "/my-interaction/my-wishlist" : "/login"}
          className="relative"
        >
          <FaRegHeart />
          {user && user.wishlist && user.wishlist.length > 0 && (
            <span className="absolute -top-1/2 left-full text-xs bg-red-600 size-4 rounded-full text-center">
              {user?.wishlist?.length}
            </span>
          )}
        </Link>
        <Link
          href={isAuthenticated ? "/my-interaction/my-cart" : "/login"}
          className="relative"
        >
          <MdAddShoppingCart />
          {user && user.cart && user.cart.length > 0 && (
            <span className="absolute -top-1/2 left-full text-xs bg-red-600 size-4 rounded-full text-center">
              {user?.cart?.length}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="inline-flex lg:hidden items-center justify-center gap-2">
        <button
          type="button"
          className="text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="menu-open"
        >
          <svg width="0" height="0">
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFCD91" />
              <stop offset="100%" stopColor="#FFCD91" />
            </linearGradient>
          </svg>
          <span
            className={`transform transition-transform duration-500 ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isMenuOpen ? (
              <IoCloseSharp
                style={{
                  fill: "url(#gradient1)",
                }}
              />
            ) : (
              <AiOutlineMenuFold
                style={{
                  fill: "url(#gradient1)",
                }}
              />
            )}
          </span>
        </button>
        <button
          type="button"
          onClick={() => setShowSearchBox(true)}
          className="text-3xl"
        >
          <svg width="0" height="0">
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFCD91" />
              <stop offset="100%" stopColor="#FFCD91" />
            </linearGradient>
          </svg>
          <IoSearch
            style={{
              fill: "url(#gradient1)",
            }}
          />
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-black/90 absolute top-full w-full left-0 text-white lg:hidden p-6 pb-12 rounded-b-lg h-fit overflow-y-scroll">
          <ul className="flex flex-col gap-4 capitalize">
            {NavLinksData.map((item, index) => (
              <li key={index} className="relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-custom-darkgreen lg:text-base text-base md:text-xl xlg:text-lg "
                  >
                    {item.text}
                  </Link>
                ) : (
                  <div>
                    <div
                      className="flex justify-between items-center cursor-pointer lg:text-base text-base md:text-xl xlg:text-lg"
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                    >
                      <span className="capitalize">{item.text}</span>
                      <span>{openDropdown === index ? "-" : "+"}</span>
                    </div>

                    {openDropdown === index && (
                      <div
                        className={`duration-500 transition-all origin-top ${
                          openDropdown === index
                            ? "h-auto opacity-100"
                            : "h-0 opacity-0"
                        } overflow-hidden flex flex-col rounded`}
                      >
                        {item.subMenu && item.subMenu.length > 0 && (
                          <ul className="flex flex-col gap-4">
                            {item.subMenu.map((menu, subIndex) => (
                              <div
                                className="text-white flex flex-col gap-6 whitespace-nowrap p-2"
                                key={subIndex}
                              >
                                <ul className="flex flex-col gap-4">
                                  {menu.menus.map((link, linkIndex) => (
                                    <li
                                      key={linkIndex}
                                      className="lg:text-base text-base md:text-xl xlg:text-lg"
                                    >
                                      <Link
                                        href={link.href}
                                        className="flex items-center gap-2"
                                      >
                                        <span className="text-custom-darkgreen">
                                          &gt;
                                        </span>
                                        {link.text}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
            {profileLinks.map((item, index) => (
              <li key={index} className="relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-custom-darkgreen lg:text-base text-base md:text-xl xlg:text-lg "
                  >
                    {item.text}
                  </Link>
                ) : (
                  <div>
                    <div
                      className="flex justify-between items-center cursor-pointer lg:text-base text-base md:text-xl xlg:text-lg"
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                    >
                      <span className="capitalize">{item.text}</span>
                      <span>{openDropdown === index ? "-" : "+"}</span>
                    </div>

                    {openDropdown === index && (
                      <div
                        className={`duration-500 transition-all origin-top ${
                          openDropdown === index
                            ? "h-auto opacity-100"
                            : "h-0 opacity-0"
                        } overflow-hidden flex flex-col rounded`}
                      >
                        {item.subMenu && item.subMenu.length > 0 && (
                          <ul className="flex flex-col gap-4 my-4 ps-2">
                            {item.subMenu.map((menu, subIndex) => (
                              <li
                                className="lg:text-base text-base md:text-xl xlg:text-lg"
                                key={subIndex}
                              >
                                <Link
                                  href={menu.href}
                                  className="flex items-center gap-2"
                                >
                                  {menu.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
            {user && (
              <button
                className="hover:text-custom-darkgreen text-base xlg:text-lg text-left"
                type="button"
                onClick={handleLogout}
              >
                Log out
              </button>
            )}
          </ul>
        </div>
      )}

      {showSearchBox && (
        <GlobalSearch closeMethod={() => setShowSearchBox(false)} />
      )}
    </div>
  );
};

export default Header;
