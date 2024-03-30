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

  const closeMenu = () => {
    setIsOpen(false);
  };

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const aboutUsRoute = routes.find((route) => route.href === "/about");
  const paymentRoute = routes.find((route) => route.href === "/payment");
  const contactRoute = routes.find((route) => route.href === "/contact");

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

  if (!contactRoute) {
    routes.push({
      href: "/contact",
      label: "Contact Us",
      active: pathname === "/contact",
    });
  }

  // Adjusted classNames for better control of layout based on the open state
  return (
    <nav className="ml-3 flex flex-col lg:flex-row items-center lg:items-stretch">
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-sm font-medium transition-colors hover:text-black"
        >
          <svg
            className="mr-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "fixed" : "hidden"
        } lg:static lg:flex lg:flex-row lg:items-center lg:space-x-4 lg:p-0 lg:ml-auto lg:w-auto lg:bg-transparent lg:shadow-none lg:visible lg:opacity-100 transition-all ease-in-out duration-300 top-0 left-0 h-screen w-3/4 bg-white z-50 lg:z-auto flex flex-col py-8 px-6`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-3 right-3 lg:hidden text-gray-600"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {routes.map((route) => (
          <LinkWrapper
            key={route.href}
            href={route.href}
            active={route.active}
            onClick={closeMenu}
          >
            {route.label}
          </LinkWrapper>
        ))}
      </div>
    </nav>
  );
};

interface LinkWrapperProps {
  href: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({
  href,
  active,
  onClick,
  children,
}) => {
  return (
    <Link legacyBehavior href={href}>
      <a
        onClick={onClick}
        className={cn(
          "text-lg font-medium transition-colors hover:text-black block py-2",
          active ? "text-black" : "text-neutral-500"
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default MainNav;