import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const ROUTES = [
  { name: 'Nested Object', route: '/nested-object' },
  { name: 'Array', route: '/array' },
  { name: 'Dynamic Fields', route: '/dynamic-fields' },
  { name: 'Schema Validation - Ch1', route: '/schema-validation/ch1' },
  { name: 'Schema Validation - Ex1', route: '/schema-validation/ex1' },
  { name: 'Schema Validation - Ex2', route: '/schema-validation/ex2' },
  { name: 'Schema Validation - Ex3', route: '/schema-validation/ex3' },
];

const Navbar = () => {
  return (
    <div
      className="fixed -right-32 w-full top-0 py-5 px-10"
      style={{ position: '100vw' }}
    >
      <div className="">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full  justify-between items-center rounded-md bg-transparent text-black">
              RHFs
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-black hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                {ROUTES.map((route) => {
                  return (
                    <Menu.Item key={route.name}>
                      <div className="p-2 focus:scale-105 transition-all duration-200 divide-y divide-gray-200 border-t border-t-gray-200 ">
                        <Link href={route.route}>{route.name}</Link>
                      </div>
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
