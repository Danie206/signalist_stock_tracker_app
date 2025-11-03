"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropdown: React.FC = () => {
  const router = useRouter();

  const user = {
    name: "Daniela",
    email: "danielela206@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/153423955?s=280&v=4",
  };

  const handleSignOut = async () => {
    console.log("Signing out...");
    router.push("/sign-in");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
        >
          {/* Next.js Image for Avatar */}
          <Image
            src={user.avatar}
            alt="User avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="sr-only">Open user menu</span>

          {/* Optional visible user info on larger screens */}
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
            <span className="text-sm text-gray-500">{user.email}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="text-gray-400 bg-gray-800 border border-gray-700 p-2 rounded-lg"
      >
        <DropdownMenuLabel>
          <div className="flex items-center gap-3 py-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-gray-600" />

        <DropdownMenuItem onClick={() => router.push("/profile")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/billing")}>
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/team")}>
          Team
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/subscription")}>
          Subscription
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-gray-600" />

        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-red-500 hover:text-red-400 cursor-pointer"
        >
          <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
          Sign out
        </DropdownMenuItem>

        <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />

        {/* Mobile navigation items */}
        <nav className="sm:hidden">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
