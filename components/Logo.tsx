import React from "react"
import Link from "next/link"
import Image from "next/image"
export const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/icons/flash.png"
        alt="Лого Школи Героїв"
        width={20}
        height={20}
        className=" h-8 w-8 mx-4 "
      />
      <p className="font-bold text-lg text-white">School of Heroes</p>
    </Link>
  )
}
