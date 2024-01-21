"use client";

import { ModeToggle } from "@/components/modetoggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const SHEET_SIDES = ["top"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export default function MenuSheet() {
  return (
    <div className="">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <div className="flex justify-end items-center mt-6 container mx-auto gap-10 mb-4">
            <ModeToggle />
            <div className="rounded-full bg-green-400 p-2 transition-all duration-300 hover:bg-red-400 hover:cursor-pointer">
              <SheetTrigger asChild>
                <Menu color="white" size={32} />
              </SheetTrigger>
            </div>
          </div>
          <SheetContent side={side} className="bg-white dark:bg-black h-dvh">
            <div className="mx-auto container">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
