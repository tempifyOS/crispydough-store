// MainNav.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const aboutUsRoute = routes.find((route) => route.href === "/about");
  const paymentRoute = routes.find((route) => route.href === "/payment");

  // If "About Us" link is not present, add it to routes
  if (!aboutUsRoute) {
    routes.push({
      href: "/about",
      label: "About Us",
      active: pathname === "/about",
    });
  }

  if (!paymentRoute) {
    routes.push({
      href: "/payment",
      label: "Payments",
      active: pathname === "/payment",
    });
  }

  return (
    <nav className="flex flex-col lg:flex-row items-center lg:items-stretch">
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-sm font-medium transition-colors hover:text-black"
        >
          {/* Hamburger menu icon */}
          <svg
            className="mr-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 ml-3 gap-1`}
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MainNav;
