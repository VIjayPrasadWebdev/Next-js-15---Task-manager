import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
export default async function Profile() {
  let { getUser, getPermission } = getKindeServerSession();
  let permission = await getPermission("delete:task");
  let user = await getUser();
  console.log("permission", permission);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="info-container flex items-center gap-2">
          <Button variant="outline" size="icon" className="cursor-pointer">
            {user ? (
              <Image
                src={
                  user.picture ? user.picture : "https://github.com/shadcn.png"
                }
                height={100}
                width={100}
                className={`${buttonVariants({ size: "icon" })} object-cover`}
                alt={user.given_name ? user.given_name : "user"}
              />
            ) : (
              <Image
                src={"https://github.com/shadcn.png"}
                height={100}
                width={100}
                className={`${buttonVariants({ size: "icon" })} object-cover`}
                alt="user"
              />
            )}
          </Button>
          <p className="text-black dark:text-white">
            {user ? user.given_name : "Guest User"}
          </p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard">Dashboard</Link>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href="https://github.com/VIjayPrasadWebdev/Next-js-15-task-manager">
            GitHub
          </Link>
          <DropdownMenuShortcut>⌘G</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>

        {permission?.isGranted && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/admin">Admin Page</Link>
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSeparator />
        {user ? (
          <DropdownMenuItem>
            <LogoutLink> Log out</LogoutLink>

            <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut>
          </DropdownMenuItem>
        ) : (
          <>
            <DropdownMenuItem>
              <LoginLink>Login</LoginLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RegisterLink>Signup</RegisterLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
