export default function AddAndEditAddress({ address = null }) {
  return (
    <div className="flex flex-col gap-6 flex-1 bg-custom-light-gray px-4 xlg:px-6 py-4 xlg:py-5 border border-[#ddd]">
      <h1 className="xlg:text-2xl text-custom-darkgreen md:text-xl text-lg">
        {address ? "Manage" : "Add"} Address
      </h1>
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
    </div>
  );
}
