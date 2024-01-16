import React from "react";
import { ContanctForm } from "@/app/contact/form";
import Navigation from "@/components/navigation";
import { ProfileCard } from "@/components/profilecard";
import { MenuCard } from "@/components/menucard";

export default function page() {
  return (
    <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 items-start gap-6 w-full mx-auto container py-10">
      <div className="hidden md:block lg:block">
        <Navigation>
          <div className="flex flex-col gap-4">
            <ProfileCard />
            <MenuCard />
          </div>
        </Navigation>
      </div>
      <div>
        <ContanctForm />
      </div>
    </div>
  );
}
