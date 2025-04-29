"use client";
import React from "react";
import Lottie from "lottie-react";
import logo from "../../../public/lottiefiles/logo.json";
export default function LogoComponent() {
  return (
    <Lottie animationData={logo} loop className="h-full w-full object-cover" />
  );
}
