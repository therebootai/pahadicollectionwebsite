"use client";
import { searchProducts } from "@/actions/FetchProducts";
import useClickOutside from "@/hooks/useClickOutside";
import { useActionState, useState } from "react";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import MiniLoader from "./MiniLoader";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function GlobalSearch({ closeMethod }) {
  const modalRef = useClickOutside(closeMethod);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const router = useRouter();
  const searchParams = useSearchParams();

  async function handelSearch(prevState, formData) {
    const search = formData.get("search") || "";
    try {
      const params = new URLSearchParams(searchParams);
      params.set("search", search);
      router.push(`/products/search?page=1&${params.toString()}`, {
        shallow: true,
      });
      return { ...prevState };
    } catch (error) {
      console.log(error);
      return { ...prevState };
    }
  }

  async function handelSearchShow(input) {
    try {
      const response = await searchProducts({ search: input });
      setSearchedProducts(response.products);
    } catch (error) {
      console.log(error);
      setSearchedProducts([]);
    }
  }

  const [_state, formAction, isPending] = useActionState(handelSearch, null);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-black/80 flex items-center justify-center mx-auto">
      <div
        className="flex flex-col relative md:mt-8 mt-4 bg-custom-light-gray md:basis-1/2 md:p-6 p-4 rounded-sm"
        ref={modalRef}
      >
        <button
          type="button"
          className="xlg:text-3xl md:text-2xl text-xl absolute md:top-4 top-2 md:right-4 right-2 text-custom-darkgreen"
          onClick={closeMethod}
        >
          <IoClose />
        </button>
        <form
          className="flex border-b border-[#ddd] mx-auto md:max-w-xl w-full"
          action={formAction}
        >
          <input
            type="search"
            name="search"
            placeholder="Search for products"
            onChange={(e) => handelSearchShow(e.target.value)}
            className="px-4 xlg:px-6 py-4 xlg:py-5 gap-6 flex flex-col bg-transparent outline-none border-none flex-1"
          />
          <button
            type="submit"
            className="xlg:text-2xl md:text-xl text-lg shrink-0"
          >
            <IoSearchSharp />
          </button>
        </form>
        <div className="flex items-center justify-center my-4">
          {isPending && <MiniLoader />}
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {searchedProducts.slice(0, 5).map((item) => (
            <Link
              key={item._id}
              href={`/products/${item.slug}`}
              className="flex items-center gap-4 border-b last:border-transparent border-[#ddd] py-4"
            >
              <Image
                width={64}
                height={64}
                src={item.thumbnail_image.secure_url}
                alt={item.slug}
                className="w-16 h-16 object-cover"
              />
              <div className="flex flex-col">
                <h1 className="text-custom-darkgreen">{item.title}</h1>
                <h1 className="text-custom-darkgreen">
                  {item.category.mainCategory}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
