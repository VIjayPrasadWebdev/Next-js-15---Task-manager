"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button, buttonVariants } from "../ui/button";
import ModeToggle from "./Mode";
import Profile from "./Profile";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { CodeXml } from "lucide-react";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="flex justify-center items-center">
      <nav
        className="fixed top-0 w-5/6 z-20 mx-auto mt-4 px-6 py-3 
        bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-white/20 
        dark:border-gray-700 rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
        flex justify-between items-center"
      >
        <div className="flex items-center gap-1">
          <Button
            size="icon"
            variant="outline"
            className=" cursor-pointer text-black dark:text-white"
          >
            <CodeXml className="w-5 h-5" />
          </Button>
          <p className="font-GABARITO hidden md:block text-lg font-medium text-black dark:text-white">
            Next Task Manager
          </p>
        </div>

        <div className="font-POPPINS font-normal hidden md:flex text-white dark:text-white items-center gap-9">
          <Link className="text-black dark:text-white" href="/">
            Home
          </Link>
          <Link className="text-black dark:text-white" href="/dashboard">
            Dashboard
          </Link>
          <Link className="text-black dark:text-white" href="/about">
            About
          </Link>
        </div>

        <div className=" flex items-center gap-4 text-white dark:text-white">
          <Profile />

          {user ? (
            <div className="hidden md:flex items-center gap-2">
              <LogoutLink className={`cursor-pointer  ${buttonVariants()}`}>
                Logout
              </LogoutLink>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <LoginLink className={`cursor-pointer ${buttonVariants()}`}>
                Login
              </LoginLink>
              <RegisterLink
                className={`cursor-pointer text-black dark:text-white ${buttonVariants(
                  {
                    variant: "outline",
                  }
                )}`}
              >
                Sign up
              </RegisterLink>
            </div>
          )}

          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
