"use client"
import Link from "next/link"
import { useState } from "react"
import { navLinks } from "../data/nav.json"
import Button from "./Button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <Button
        href="#"
        variant="solid"
        className="p-4 md:hidden focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>

      <div className="hidden px-6 md:block">
        <ul className="flex flex-row justify-center space-x-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href} className="font-light text-white">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed left-0 top-0 h-full w-1/2 bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <Button
            href="#"
            variant="solid"
            className=""
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
        <ul className="flex flex-col px-6 space-y-4 text-lg">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="font-light text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
