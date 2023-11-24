import React from "react";
import { Image } from "@nextui-org/react";
import { GameCard } from "@/components";

export default function Home() {
  return (
    <div className="h-[100vh] ">
      <div className="flex justify-center pt-10 items-center flex-col ">
        <Image
          src="https://alonxx.github.io/YellowPenguinGames/images/ypg_logo.png"
          alt="Yellow Penguin Games Logo"
          className="w-20"
        />
      </div>
      <div className="flex justify-center mt-12 p-3 pb-20 flex-col items-center">
        <p className="text-[#cbd1d9] text-lg sm:text-2xl text-center mb-8 font-semibold tracking-[0.5em]">
          MOST RECENT GAME
        </p>

        <div className="w-80 sm:w-96">
          <GameCard
            icon="https://alonxx.github.io/YellowPenguinGames/images/toast_brawl_icon.png"
            title="TOAST BRAWL"
            url="https://play.google.com/store/apps/details?id=com.yellowpenguin.toastbrawl"
          />
        </div>
      </div>
    </div>
  );
}
