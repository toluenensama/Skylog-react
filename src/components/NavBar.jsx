import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { MapPin } from "lucide-react";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLocation,setCurrentLocation]  = useState("Loading location ....")

  useEffect(() => {
    const getCurrentLocation = localStorage.getItem("current city")
    setCurrentLocation(getCurrentLocation)

    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={cn(
          "py-5 w-full z-40 transition-all duration-300",
          " bg-gray-700/30 backdrop-blur-md ",


        )}
      >
        <div className="container flex flex-col items-center justify-center mx-auto">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow ">Sky</span> Logs
            </span>
          </a>
          <div className="flex gap-2 items-center">
          <MapPin className="text-primary h-6 w-6"/>
          <p className="text-lg text-primary">{currentLocation}</p>
          </div>
        </div>
      </nav>
    </>
  );
}
