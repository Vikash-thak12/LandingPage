import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants/index.jsx"

const NavbarPage = () => {
    const [moblieDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!moblieDrawerOpen)
    }
  return (
    <main>
        <div className="border flex items-center justify-between px-10 py-5">
            <div>
                <h1>Vikash</h1>
            </div>
            <div className="hidden md:flex items-center gap-5">
                {
                    navItems.map((item, index) => (
                        <li key={index} className="list-none">
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))
                }
            </div>
            <div className="hidden md:flex items-center gap-5">
                <button>login</button>
                <button>Create Account</button>
            </div>
            <div onClick={toggleNavbar} className="md:hidden flex cursor-pointer">
                {
                    moblieDrawerOpen ? <X /> : <Menu />
                }
            </div>
        </div>
        {
            moblieDrawerOpen && (
                <div className="fixed right-0 z-50 h-full bg-neutral-900 p-12 flex flex-col gap-5 items-start lg:hidden">
                    {
                        navItems.map((item, index) => (
                            <li key={index} className="list-none">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))
                    }
                </div>
            )
        }
    </main>
  );
};

export default NavbarPage;