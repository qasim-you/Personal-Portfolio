import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="flex justify-center items-center flex-col mt-10 p-4">
              <SheetTitle>Home </SheetTitle>
              <SheetTitle>Projects </SheetTitle>
              <SheetTitle>Login</SheetTitle>
              {/* <SheetTitle></SheetTitle> */}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
