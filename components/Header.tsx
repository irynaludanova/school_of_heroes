import { Navbar } from "./Navbar"
import { Logo } from "./Logo"
export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full py-2 bg-gray-900 text-white  z-50 shadow-md">
      <div className="flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}
