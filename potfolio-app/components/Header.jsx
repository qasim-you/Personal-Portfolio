"use client";
import React, { useEffect, useState } from "react";
import ThemeTogler from "./ThemeTogler";
import Image from "next/image";
// import Logo from "./logo";
import logoImg from "../public/logo-white.png";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
export default function Header() {
  return (
    <>
      <header>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Image
              src={logoImg}
              alt="Picture of the author"
              width={60}
              style={{ borderRadius: 50 }}
              height={50}
            />
            <div className="flex items-center gap-x-6">
              <Nav containerStyles="hidden xl:flex gap-x-8 items-center justify-center  m-5" />
              <ThemeTogler /> 
            </div>
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
