import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  function darkmode(){
    document.body.classList.toggle('dark')
  }

  return (
    <div className="flex flex-wrap place-items-center ">
        <nav className="nav flex flex-wrap items-center justify-between w-[100%] p-2 bg-white shadow-lg">
          <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
            <svg
              className="fill-current h-8 mr-2 w-8"
              xmlns="http://www.w3.org/2000/svg"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="1.5"
              clip-rule="evenodd"
              viewBox="0 0 716 895"
            >
              <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
              <path
                className="text-white fill-current"
                d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"
              ></path>
              <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              ProjectHub
            </span>
          </div>

          <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
            for="menu-btn"
          >
            <span className="navicon bg-grey-darkest flex items-center relative"></span>
          </label>

          <ul
           
            className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto"
          >
            <li className="border-t md:border-none " type="checkbox">
              <NavLink
                to="/"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
              >
                Form App
              </NavLink>
            </li>

            <li className="border-t md:border-none">
              <NavLink
                to="/movieapp"
                className="  block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Movie App
              </NavLink>
            </li>

            <li className="border-t md:border-none">
              <NavLink
                to="/galleryapp"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Gallery App
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
               to="/filterapp"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Filter App
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
                to="/user"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Rnandom user
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
               to="/quiz"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Quiz App
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
                to="/Quotes"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Quotes
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
                to="/Firebasecurd"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Firebase Curd
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
                to="/BMICalculator"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                BMICalculator
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
                to="/Weatherapp"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Weather App
              </NavLink>
            </li>
            <li className="border-t md:border-none" onClick={darkmode}>
              <NavLink 
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
             
              >
              Dark Mode
                
              </NavLink>
            </li>

           
          </ul>
        </nav>

        <Outlet />
      </div>
  )
}

export default Navbar




{/* <div className="flex flex-wrap place-items-center ">
        <nav className="nav flex flex-wrap items-center justify-between w-[100%] p-2 bg-white shadow-lg">
          <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
            <svg
              className="fill-current h-8 mr-2 w-8"
              xmlns="http://www.w3.org/2000/svg"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="1.5"
              clip-rule="evenodd"
              viewBox="0 0 716 895"
            >
              <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
              <path
                className="text-white fill-current"
                d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"
              ></path>
              <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              Carvely
            </span>
          </div>

          <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
            for="menu-btn"
          >
            <span className="navicon bg-grey-darkest flex items-center relative"></span>
          </label>

          <ul
            oncli
            className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto"
          >
            <li className="border-t md:border-none " type="checkbox">
              <NavLink
                to="/"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
              >
                formapp
              </NavLink>
            </li>

            <li className="border-t md:border-none">
              <NavLink
                to="/movieapp"
                className="  block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                movieapp
              </NavLink>
            </li>

            <li className="border-t md:border-none">
              <NavLink
                to="/galleryapp"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                galleryapp
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
               to="/filterapp"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                filterapp
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
                to="/user"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Rnandom user
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
               to="/quiz"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Quiz App
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
                to="/Quotes"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Quotes
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
                to="/Firebasecurd"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Firebase Curd
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
                to="/BMICalculator"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                BMICalculator
              </NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink
                
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                
              </NavLink>
            </li>

           
          </ul>
        </nav>

        <Outlet />
      </div> */}