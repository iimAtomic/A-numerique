import React from "react";
import Link from "next/link";
import JoinUs from "../Banner/JoinUs";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Accueil", href: "#/", current: true },
  { name: "Qui sommes nous ?", href: "#nous", current: false },
  { name: "Mentor", href: "#mentor", current: false },
  { name: "Notre équipe", href: "#équipe", current: false },
  { name: "Témoignage", href: "#testimonial", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-black hover:opacity-100"
                    : "hover:text-black hover:opacity-100",
                  "py-1 text-lg font-normal opacity-75 block"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <JoinUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
