import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/home", current: true },
  { name: "Notes", href: "/notes", current: false },
  { name: "E-Lab Solutions", href: "/codes", current: false },
  { name: "GPA-Calculator", href: "https://virajp4.me/GPA-Wiz/", current: false, target: "_blank" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({ active }) {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 250) {
      setNavbarVisible(true);
    } else {
      setNavbarVisible(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const navClassNames = classNames(
    "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out font-chivo",
    navbarVisible ? "" : "bg-transparent"
  );

  const getNavItemClassNames = (itemName) => {
    let baseClass = "rounded-md px-3 py-2 text-lg font-bold border-2 border-transparent";
    let dynamicClass = "";

    if (navbarVisible) {
      if (active === itemName) {
        dynamicClass = "bg-blue-900 text-white border-blue-400";
      } else {
        dynamicClass =
          "text-white hover:bg-blue-400 hover:text-blue-950 hover:border-2 hover:border-blue-900 focus:bg-blue-500 focus:text-black focus:border-2 focus:border-blue-900";
      }
    } else {
      if (active === itemName) {
        dynamicClass =
          "border-2 border-orange-400 bg-amber-900 text-white";
      } else {
        dynamicClass =
          "text-white hover:bg-orange-300 hover:text-orange-950 hover:border-2 hover:border-orange-950 focus:bg-amber-600 focus:text-black focus:border-2 focus:border-orange-950";
      }
    }
    return classNames(baseClass, dynamicClass);
  };

  const getMinNavItemsClassNames = (itemName) => {
  };

  return (
    <Disclosure as="nav" className={navClassNames}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={navbarVisible ? "#f2e9e4" : "#f2e9e4"}
                      className="w-8 h-8"
                    >
                      <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                      <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                      <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                    </svg>
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={getNavItemClassNames(item.name)}
                        aria-current={item.current ? "page" : undefined}
                        target={item.target ? item.target : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
