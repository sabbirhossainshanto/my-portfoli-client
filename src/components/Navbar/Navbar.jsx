import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import AnimatedLogo from "./AnimatedLogo";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector("[data-scroll-container]");
      if (scrollContainer) {
        setHasScrolled(scrollContainer.scrollTop > 50);
      }
    };

    const scrollContainer = document.querySelector("[data-scroll-container]");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <nav className="fixed w-full top-0 z-[100]">
        <div
          className={`relative transition-all duration-300 ${
            hasScrolled
              ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
              : "bg-black/30 backdrop-blur-md"
          }`}
        >
          <Container>
            <div className="py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <AnimatedLogo />

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                  <button className="text-white/70 hover:text-white transition-all group">
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/about.png"
                        alt="About"
                        className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="text-sm">About</span>
                    </div>
                  </button>
                  <Link
                    to="/projects"
                    className="text-white/70 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/work.png"
                        alt="Work"
                        className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="text-sm">Project</span>
                    </div>
                  </Link>

                  <Link to="/contact" className="group">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2.5 rounded-xl hover:opacity-90 transition-all flex items-center gap-2">
                      <img
                        src="/icons/contact.png"
                        alt="Contact"
                        className="w-5 h-5 opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="text-sm font-medium">Contact</span>
                    </div>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="md:hidden  text-white hover:opacity-80 transition-opacity"
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
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
