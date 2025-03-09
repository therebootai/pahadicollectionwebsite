import { AuthContext } from "@/context/AuthContext";
import ProfileCard from "@/ui/ProfileCard";
import { useContext } from "react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";

export default function AddressesList() {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg xlg:text-2xl text-custom-darkgreen">
        Saved Addresses
      </h1>
      <div className="flex flex-col xlg:gap-6 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProfileCard key={index}>
            <ProfileCard.Box boxProps={{ className: "flex flex-col gap-3" }}>
              <h3 className="bg-custom-yellow rounded-sm py-1 px-2 text-sm text-custom-darkgreen capitalize self-start">
                home
              </h3>
              <h1 className="text-custom-darkgreen xlg:text-lg text-base">
                Customer Name
              </h1>
              <p className="text-custom-gray xlg:text-lg text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium eius quia assumenda eum ducimus voluptates optio sit
                tempora itaque magnam esse voluptas alias ad illum,
                exercitationem quam fugit excepturi quas.
              </p>
              <div className=""></div>
            </ProfileCard.Box>
            <ProfileCard.Btn
              buttonProps={{ className: "self-start relative group" }}
            >
              <BsThreeDots size={24} />
              <aside className="absolute top-0 -left-full -translate-x-3/4 bg-white p-3 shadow-custom hidden group-hover:flex flex-col gap-3 items-start">
                <button
                  type="button"
                  className="text-custom-darkgreen text-base capitalize"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="text-custom-darkgreen text-base capitalize"
                >
                  delete
                </button>
              </aside>
            </ProfileCard.Btn>
          </ProfileCard>
        ))}
      </div>
    </div>
  );
}
