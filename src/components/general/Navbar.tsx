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
export default async function Navbar() {
  let { getUser } = getKindeServerSession();
  let user = await getUser();

  return (
    <nav className="border-b-2 flex justify-between items-center p-2 w-full">
      <div className="left ml-3.5">
        <Button variant="ghost" size="default" className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
            <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
          </svg>
          Next Task manager
        </Button>
      </div>
      <div className="right mr-3.5 flex items-center gap-6">
        <Profile />
        {user ? (
          <LogoutLink className={`cursor-pointer ${buttonVariants()}`}>
            Logout
          </LogoutLink>
        ) : (
          <div className="btn-container flex items-center gap-2">
            <LoginLink className={`cursor-pointer ${buttonVariants()}`}>
              Login
            </LoginLink>
            <LogoutLink
              className={`cursor-pointer ${buttonVariants({
                variant: "outline",
              })}`}
            >
              Sign up
            </LogoutLink>
          </div>
        )}
      </div>
    </nav>
  );
}
