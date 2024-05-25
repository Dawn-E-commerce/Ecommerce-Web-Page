import React from "react";
import German from "../../assets/images/country/German.svg";
import { HEADER_NAV } from "../../utils/constants";
const NavBar: React.FC = () => {
  return (
    <nav className="top-nav border-y">
      <div className="container max-w-6xl mx-auto py-4">
        <div className="row flex justify-between items-center">
          <div className="col">
            <ul className="top-nav__list flex flex-row gap-6 font-semibold">
              {HEADER_NAV.map((item) =>

              (
                <li key={item.id} className="flex flex-rows items-center gap-1">
                  {item.icon && <item.icon />}
                  <a href="#">{item.name}</a>
                </li>

              )
              )}
            </ul>

          </div>
          <div className="col">
            <div className="top-nav__setting flex gap-8 font-semibold items-center">
              <div className="top-nav-setting__payment flex">
                English, USD
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="#8B96A5" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                  </svg>
                </button>
              </div>
              <div className="top-nav-setting__shipping flex items-center gap-2">
                Ship to
                <img src={German} alt="" className="size-[25px]" />
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="#8B96A5" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>


  );
};

export default NavBar;
