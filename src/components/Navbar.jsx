import { Menu, X } from "lucide-react";
import { useState } from "react";

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
            <ul className="hidden md:flex items-center justify-center gap-5 ">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
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
    </main>
  );
};

export default NavbarPage;