import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { mmlogo, menu, close } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`} //fixed will make the navbar stay at the top of the page
    >
      <div
        className="flex items-center justify-between w-full max-w-7xl mx-auto"
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          //setActive will keep track of where we are on the page
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0); //scroll to the top of the page
          }}
        >
          <img
            src={mmlogo}
            alt="logo"
            className="w-10 h-10 object-contain"
          />
          <p
            className="flex text-white text-[18px] font-bold cursor-pointer"
          >
            Matt &nbsp;
            <span className='sm:block hidden'>| Developer</span>
          </p>
        </Link>

        <ul
          className="list-none hidden sm:flex flex-row gap-10"
        >
          {/* for each link and render an <li>. Check if the link is currently active. If so render white text */}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title
                  ? 'text-white'
                  : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a
                href={`#${link.id}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile nav bar */}
        <div
          // className="sm:hidden flex flex-col items-end" suggested
          className="sm:hidden flex flex-1 justify-end items-center"
        >
          {/* image changes depending on clicked toggle state */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            // className="w-10 h-10 object-contain" suggested
            className="w-[28] h-[28] object-contain cursor-pointer"
            //click will change state
            onClick={() => setToggle(!toggle)}
          />

          {/* The Actual Menu */}
          {/* if not toggled, show hidden. Else show flex meaning we want to show it */}
          {/* setToggle(!toggle) will close the menu once a specific link is clicked */}
          <div
            // className={`${ toggle ? 'block' : 'hidden' } sm:hidden absolute top-0 right-0 w-full h-full bg-primary flex flex-col items-center justify-center`} SUGGESTED
            className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {/* Same <ul> from above with styling mods */}
            <ul
              className="list-none flex justify-end items-start flex-col gap-4"
            >
              {/* for each link and render an <li>. Check if the link is currently active. If so render white text */}
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                      ? 'text-white'
                      : 'text-secondary'
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle); //close menu
                    setActive(link.title)
                  }}
                >
                  <a
                    href={`#${link.id}`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar