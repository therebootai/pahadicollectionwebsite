"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ProductFetchObserver({
  currentPage,
  totalPages,
  path,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const observerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          changePage(currentPage, totalPages);
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [currentPage]);

  function changePage(currentPage, totalPages) {
    if (parseInt(currentPage) >= parseInt(totalPages)) {
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set("page", currentPage + 1);

    router.push(`${path}?${params.toString()}`, { scroll: false });
  }
  return (
    <div
      ref={observerRef}
      className="xl:col-span-4 md:col-span-3 col-span-2 text-center py-4"
    ></div>
  );
}
