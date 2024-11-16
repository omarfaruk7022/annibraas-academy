import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Search } from "lucide-react";
export default function Header() {
  return (
    <header className="mx-auto container shadow-sm">
      <div className="  px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-green-600" />
          <span className="text-2xl font-bold text-green-600">
            Softwadi
          </span>
        </Link>
        <Button className="hidden md:inline-flex bg-green-600 text-white hover:bg-green-700 focus:outline-none">
          Sign Up
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
