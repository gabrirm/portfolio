import { BookOpenText, FolderKanban, Home, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GiSkills } from "react-icons/gi";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/lib/hooks";

const routes = [
  {
    label: "Home",
    icon: <Home className="h-4 w-4 mr-2" />,
    href: "#home",
  },
  {
    label: "About",
    icon: <BookOpenText className="h-4 w-4 mr-2" />,
    href: "#about",
  },
  {
    label: "Projects",
    icon: <FolderKanban className="h-4 w-4 mr-2" />,
    href: "#projects",
  },
  {
    label: "Skills",
    icon: <GiSkills className="h-4 w-4 mr-2" />,
    href: "#skills",
  },
  {
    label: "Experience",
    icon: <BsFillSuitcaseLgFill className="h-4 w-4 mr-2" />,
    href: "#experience",
  },
  {
    label: "Contact",
    icon: <MdContactMail className="h-4 w-4 mr-2" />,
    href: "#contact",
  },
];

const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  // use effect to prevent hydration error. We render the component only
  // when it's mounted on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) return null;

  return (
    <>
      <div
        className="
            md:hidden
            fixed
            w-full
            h-[3rem]
            bg-white
            z-[999]
            top-0
            mb-20
            bg-opacity-60
            flex
            items-center
            justify-stretch
            shadow-lg
            shadow-black/[0.03]
            backdrop-blur-[0.5rem]
        "
      >
        <Button
          onClick={onOpen}
          className="md:hidden ml-2 mt-2 mb-2"
          variant="ghost"
          size="sm"
        >
          <Menu className="h-7 w-7" />
        </Button>
        <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent
            side="top"
            className="flex flex-col mt-10 items-center justify-center w-full"
          >
            <ul>
              {routes.map((route) => (
                // nav item for mobile sidebar
                <li
                  key={route.href}
                  className="flex items-center gap-x-2 p-1.5 text-gray-600
                    rounded-md hover:text-gray-950 transition text-start no-underline
                    dark:text-gray-400 dark:hover:text-gray-100 
                    hover:no-underline"
                >
                  <Link
                    onClick={onClose}
                    href={route.href}
                    className="flex items-center gap-x-2 p-1.5 hover:bg-gray-100 rounded-md transition dark:hover:bg-gray-800"
                  >
                    {route.icon}
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileSidebar;
