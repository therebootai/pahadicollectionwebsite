export default function AddAndEditAddress({ address = null }) {
  return (
    <div className="flex flex-col gap-6 flex-1 bg-custom-light-gray px-4 xlg:px-6 py-4 xlg:py-5 border border-[#ddd]">
      <h1 className="xlg:text-2xl text-custom-darkgreen md:text-xl text-lg">
        {address ? "Manage" : "Add"} Address
      </h1>
      <form action="" className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder=" House Number"
            type="number"
            required
          />
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder=" Street Name"
            type="text"
            required
          />
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder="Area"
            type="text"
            required
          />
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder="Post Office"
            type="text"
            required
          />
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder="Pin Code"
            type="number"
            required
          />
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder="Landmark"
            type="text"
          />
        </div>
        <div className="flex-1 flex">
          <input
            className="p-6 flex-1 rounded-sm border border-[#ddd] text-custom-gray"
            placeholder=" Remarks"
            type="text"
            required
          />
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="addressType"
              id="home"
              className="appearance-none checked:accent-white checked:ring-custom-gold size-4 rounded-full ring-4 ring-custom-gray"
            />
            <label
              htmlFor="home"
              className="text-custom-gray xlg:text-lg text-base cursor-pointer"
            >
              Home
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="addressType"
              id="office"
              className="appearance-none checked:accent-white checked:ring-custom-gold size-4 rounded-full ring-4 ring-custom-gray"
            />
            <label
              htmlFor="office"
              className="text-custom-gray xlg:text-lg text-base cursor-pointer"
            >
              Office
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="addressType"
              id="others"
              className="appearance-none checked:accent-white checked:ring-custom-gold size-4 rounded-full ring-4 ring-custom-gray"
            />
            <label
              htmlFor="others"
              className="text-custom-gray xlg:text-lg text-base cursor-pointer"
            >
              Others
            </label>
          </div>
        </div>
        <div className="flex items-center justify-start gap-6">
          <button
            type="button"
            className="text-white inline-flex py-3 px-5 text-xs bg-custom-darkgreen"
          >
            Save Address
          </button>
          <button
            type="button"
            className="text-custom-darkgreen inline-flex py-3 px-5 text-xs bg-[#ddd]"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
