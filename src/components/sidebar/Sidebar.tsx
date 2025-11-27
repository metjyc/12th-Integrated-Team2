"use client";

import { logout } from "@/apis/auth";

import { useUserStore } from "@/store/userStore";

import { Location } from "@/types/location";

import LocationList from "./LocationList";
import { Login } from "./Login";
import SidebarHeader from "./SidebarHeader";

type SidebarProps = {
  locations: Location[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onClickAdd: () => void;
  onClickDelete: (id: string) => void;
  onTogglePin: (id: string) => void;
};

export default function Sidebar({
  locations,
  selectedId,
  onSelect,
  onClickAdd,
  onClickDelete,
  onTogglePin,
}: SidebarProps) {
  const username = useUserStore(state => state.username);
  console.log(username);

  const handleLogout = async () => {
    try {
      await logout;
      console.log("로그아웃성공");
      useUserStore.getState().clear();
    } catch (error) {
      error;
    }
  };
  return (
    <aside className="bg-gray-0 section-shadow flex h-screen w-[248px] shrink-0 flex-col items-start gap-10 rounded-r-[48px] px-4 py-12">
      {username ? (
        <div className="border-gray-20 flex w-full items-center justify-evenly border p-2">
          <div>{username}님</div>
          <button
            onClick={handleLogout}
            className="text-lab-lg bg-skyblue text-gray-60 border-blue cursor-pointer rounded-sm p-1"
          >
            로그아웃 하기
          </button>
        </div>
      ) : (
        <Login />
      )}
      <SidebarHeader onClickAdd={onClickAdd} />

      <div className="w-full px-4">
        <LocationList
          locations={locations}
          selectedId={selectedId}
          onSelect={onSelect}
          onDelete={onClickDelete}
          onTogglePin={onTogglePin}
        />
      </div>
    </aside>
  );
}
