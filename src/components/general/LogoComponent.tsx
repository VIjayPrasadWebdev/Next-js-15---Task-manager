"use client";
import React from "react";
import Lottie from "lottie-react";
import logolight from "../../../public/lottiefiles/logo-light.json";
export default function LogoComponent() {
  return (
    <div className="h-12 w-12 p-0 m-0 rounded-lg bg-white flex items-center justify-center overflow-hidden">
      <Lottie
        animationData={logolight}
        loop
        className="h-full w-full object-fill p-0 m-0 transform scale-110"
      />
    </div>
  );
}
