import ProfileCard from "@/ui/ProfileCard";

export default function ProductsList({ products, onUpdateQuantity }) {
  return (
    <div className="flex flex-col xlg:gap-6 md:gap-5 gap-4">
      {products.map((item) => (
        <ProfileCard key={item.productId} className="flex-col md:flex-row">
          <ProfileCard.Cover
            src={item.thumbnail_image?.secure_url}
            alt={item.slug}
            width={103}
            height={103}
            coverProps={{
              className:
                "rounded-sm w-full h-60 md:h-auto md:w-24 object-cover",
            }}
          />
          <ProfileCard.Box
            boxProps={{ className: "flex flex-col gap-4 flex-1" }}
          >
            <h1 className="xlg:text-lg text-base text-custom-darkgreen">
              {item.title}
            </h1>
            <h3 className="xlg:text-base text-sm text-custom-gray">
              {item.category.mainCategory}
            </h3>
            <div className="flex items-center justify-start gap-3">
              <p className="bg-[#FFCD91] text-custom-darkgreen py-2 px-4 rounded-2xl xlg:text-xl md:text-lg text-base">
                ₹{Math.round(item.price)}
              </p>
              <span className="text-custom-gray text-sm line-through">
                ₹{item.mrp}
              </span>
            </div>
          </ProfileCard.Box>
          <div className="flex items-center gap-4 justify-start self-start">
            <button
              type="button"
              className="bg-white xlg:text-2xl md:text-xl text-lg border p-1 rounded-lg inline-flex items-center justify-center"
              onClick={() => onUpdateQuantity(item.productId, 1)}
            >
              +
            </button>
            <p className="xlg:text-xl md:text-lg text-base text-custom-darkgreen">
              {item.quantity}
            </p>
            <button
              type="button"
              className="bg-white xlg:text-2xl md:text-xl text-lg disabled:cursor-not-allowed border p-1 rounded-lg inline-flex items-center justify-center"
              disabled={item.quantity === 1}
              onClick={() => onUpdateQuantity(item.productId, -1)}
            >
              -
            </button>
          </div>
        </ProfileCard>
      ))}
    </div>
  );
}
