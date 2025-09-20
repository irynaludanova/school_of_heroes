import { Navbar } from "./Navbar"
import { Logo } from "./Logo"
export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-2 text-white bg-gray-900 shadow-md">
      <div className="flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}
