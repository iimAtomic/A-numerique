import React from "react";
import Link from "next/link";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import { Disclosure } from '@headlessui/react';
import JoinUs from "../Banner/JoinUs";


interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Acceuil', href: '#/', current: true },
    { name: 'Cours', href: '#courses', current: false },
    { name: 'Mentor', href: '#mentor', current: false },
    { name: 'Equipe', href: '/', current: false },
    { name: 'Temoignage', href: '#testimonial', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
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
                  item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                  'py-1 text-lg font-normal opacity-75 block'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
              
            ))}
           
            {/* <div className="mt-4"></div>
            <button className="bg-white w-full text-Blueviolet border border-semiblueviolet font-medium py-2 px-4 rounded">
             Connexion
            </button>
            <button className="bg-semiblueviolet w-full hover:bg-Blueviolet hover:text-white text-Blueviolet font-medium my-2 py-2 px-4 rounded">
              Inscription
            </button> */}
            <JoinUs/>
          </div>
        </div>
      </div>
    </div>
  );


}

export default Data;
