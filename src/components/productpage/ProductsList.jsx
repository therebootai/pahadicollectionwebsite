"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProductDesignCard from "../card/ProductDesignCard";

export default function ProductsList({ products }) {
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    setAllProducts((prev) => [...prev, ...products]);
  }, [products]);

  return allProducts.map((item, index) => (
    <Link
      href={`/products/${item.slug}`}
      key={index}
      className="h-fit relative"
    >
      <ProductDesignCard
        productId={item._id}
        productimg={item.thumbnail_image.secure_url}
        producthoverimg={item.hoverImage.secure_url}
        productname={item.title}
        productDiscount={item.discount}
        productprice={item.price}
        productMRP={item.mrp}
      />
    </Link>
  ));
}
