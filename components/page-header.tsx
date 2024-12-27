import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeaderMenu from "./header-menu";

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 x-30 w-full transistion-all">
      <div className="2-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b ">
        <div className="flex h-14 items-center justify-between">
          <Image src="/logo.png" alt="logo" width={120} height={100} />
          <div>
            <SignedOut>
              <SignInButton>
                <Button className="bg-black">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-black ml-2">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <HeaderMenu />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};
export default PageHeader;
