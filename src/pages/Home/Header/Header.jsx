import { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import logo from "../../../assets/logo 2.png";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Bars2Icon,
  HeartIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Wishlist",
    icon: HeartIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "Audio & Home Theater",
  },
  {
    title: "Camera & Photo",
  },
  {
    title: "Computer & Laptop",
  },
  {
    title: "Computer & Laptop",
  },
  {
    title: "Computer & Laptop",
  },
  {
    title: "Computer & Laptop",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
              <EllipsisVerticalIcon className="h-[18px] w-[18px]" /> All
              Category
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden gap-3 overflow-visible lg:grid">
          <ul className=" bg-white">{renderItems}</ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <EllipsisVerticalIcon className="h-[18px] w-[18px]" /> All Category
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      <div className="relative flex w-full gap-2 md:w-max">
        <Input
          type="search"
          placeholder="Search Here"
          className="pl-4"
          containerProps={{
            className: "min-w-[288px]",
          }}
        />
        <Button size="sm" className="!absolute right-1 top-1 rounded">
          Search
        </Button>
      </div>
    </ul>
  );
}

export function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <div className="bg-white text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* <h1 className="text-2xl font-bold">DealHub</h1> */}
          <img className="w-32" src={logo} alt="" />
        </div>
        <div className="flex items-center">
          <div className="relative inline-block text-white border">
            <select
              className="bg-white text-black px-3 py-2 focus:outline-none"
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categoryOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="divide-y-2 border">
            <input
              type="text"
              className="bg-white text-black px-3 py-2 focus:outline-none"
              placeholder="I'm searching for..."
            />
          </div>
          <button className="px-3 py-2 relative lg:right-10 md:right-10">
            <AiOutlineSearch />
          </button>
          <div
            className="ml-4 relative inline-block text-black"
            ref={userMenuRef}
          >
            <div className="cursor-pointer text-4xl" onClick={toggleUserMenu}>
              <BiSolidUser />
            </div>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-32 bg-white text-black rounded-lg shadow-lg">
                <div className="py-1 px-4 cursor-pointer hover:bg-gray-200">
                  My Profile
                </div>
                <div className="py-1 px-4 cursor-pointer hover-bg-gray-200">
                  Wishlist
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
