import { removeWishlist } from "@/actions/customerActions";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const MyWishListSection = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleDelete = async (productId) => {
    try {
      const response = await removeWishlist(user.customerId, productId);

      if (response && response.wishlist) {
        dispatch({
          type: "LOGIN",
          payload: { ...user, wishlist: response.wishlist },
        });
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error.message);
    }
  };
  if (!user) {
    return <div></div>;
  }
  if (user.wishlist.length === 0) {
    return <div>No items in your wishlist</div>;
  }
  return (
    <div className="flex flex-col gap-6">
      <h1 className=" text-2xl font-medium text-custom-green">Wishlist </h1>
      <div className="flex flex-col gap-4">
        {user.wishlist.map((item, index) => (
          <div
            key={index}
            className="xlg:p-6 p-4 flex flex-row gap-4 border border-custom-light-gray hover:shadow-custom-light hover:border-none rounded-sm"
          >
            <Link
              href={`/products/${item.slug}`}
              className="w-[90%]  flex flex-col md:flex-row gap-4"
            >
              <div className="w-[15%] h-full relative ">
                <Image
                  src={item.thumbnail_image.secure_url}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-[80%] flex flex-col gap-1">
                <h1 className=" text-xl font-medium text-custom-darkgreen">
                  {item.title}
                </h1>
                <h1 className=" text-base line-clamp-2 ">{item.description}</h1>
                <div className="flex flex-row items-center gap-4">
                  <div className="md:h-[2rem] h-[1.7rem] bg-custom-yellow text-custom-darkgreen text-xs md:text-base font-medium flex justify-center items-center px-2 md:px-4 rounded-full">
                    &#8377; {item.price}
                  </div>
                  <div className="text-custom-gray text-xs md:text-base font-medium line-through">
                    &#8377; {item.mrp}
                  </div>
                </div>
              </div>
            </Link>
            <button
              onClick={() => handleDelete(item._id)}
              className="w-[10%] text-2xl flex justify-end items-start text-custom-darkgreen"
            >
              <RiDeleteBin6Fill />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWishListSection;
