import React, { useState } from "react";
import Button from "../../components/Button";
import Logo from "../../assets/images/logo.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative h-24 md:h-30 flex items-center justify-between">

      {/* Logo */}
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          className="w-auto"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-32">
        <nav className="flex gap-8">
          <HashLink
            smooth
            to="/#case-study"
            className="text-[20px] font-medium text-[#212121]"
          >
            کیس استادی
          </HashLink>

          <HashLink
            smooth
            to="/#services"
            className="text-[20px] font-medium text-[#212121]"
          >
            خدمات من
          </HashLink>

          <HashLink
            smooth
            to="/#about"
            className="text-[20px] font-medium text-[#212121]"
          >
            درباره من
          </HashLink>

          <HashLink
            smooth
            to="/#contact"
            className="text-[20px] font-medium text-[#212121]"
          >
            ارتباط با من
          </HashLink>
        </nav>

        <Button
          text="دانلود رزومه"
          LinkTo="https://drive.google.com/file/d/1l63KS5bOT_7NfDi0LpAM6M8swm9mC0zm/view"
        />
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1"
      >
        <span className="w-6 h-0.5 bg-[#212121]" />
        <span className="w-6 h-0.5 bg-[#212121]" />
        <span className="w-6 h-0.5 bg-[#212121]" />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-lg p-6 md:hidden z-50">

          <nav className="flex flex-col gap-5">

            <HashLink
              smooth
              to="/#case-study"
              onClick={() => setIsOpen(false)}
            >
              کیس استادی
            </HashLink>

            <HashLink
              smooth
              to="/#services"
              onClick={() => setIsOpen(false)}
            >
              خدمات من
            </HashLink>

            <HashLink
              smooth
              to="/#about"
              onClick={() => setIsOpen(false)}
            >
              درباره من
            </HashLink>

            <HashLink
              smooth
              to="/#contact"
              onClick={() => setIsOpen(false)}
            >
              ارتباط با من
            </HashLink>

            <Button
              text="دانلود رزومه"
              LinkTo="https://drive.google.com/file/d/1l63KS5bOT_7NfDi0LpAM6M8swm9mC0zm/view"
            />

          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;