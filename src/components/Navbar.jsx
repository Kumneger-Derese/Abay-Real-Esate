import { useState } from 'react'
import { HiMoon, HiSun, HiXMark } from 'react-icons/hi2'
import { HiMenuAlt3 } from 'react-icons/hi'
import { navLinks } from '../constant/navLinks'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { toggleTheme, isDark } = useTheme()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-green-500 dark:bg-slate-950 p-3 flex justify-between items-center relative'>
      {/* Logo desktop and mobile */}
      <h1 className='text-white text-xl sm:text-2xl font-bold'>
        Abay Real Estate
      </h1>

      {/* Desktop menu */}
      <ul className='hidden lg:flex items-center gap-x-4'>
        {navLinks.map(link => (
          <div key={link.id} className='flex items-center gap-x-4'>
            <li key={link.id} className='inline-block font-medium'>
              <a href={link.path} className='text-white hover:text-gray-200'>
                {link.name}
              </a>
            </li>
          </div>
        ))}
      </ul>

      {/* Desktop buttons */}
      <div className='hidden lg:flex font-semibold lg:flex-row items-center gap-x-4'>
        <button className='bg-white text-green-500 px-4 py-1.5 rounded-lg'>
          Signup
        </button>

        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className='text-white p-2.5 bg-green-900 dark:bg-green-500 rounded-md'
        >
          {isDark ? <HiSun /> : <HiMoon />}
        </button>
      </div>

      {/* Mobile Nav icon with trigger */}
      <div className='lg:hidden'>
        <button onClick={toggleMenu}>
          <HiMenuAlt3 size={28} className='text-white' />
        </button>
      </div>

      {/* Mobile menu button */}

      <ul
        className={`lg:hidden flex flex-col fixed top-0 right-0 w-[75%] z-50 bg-green-700 text-white h-full transform transition-transform duration-300  ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* close button */}
        <button
          className='flex justify-end p-8 text-2xl hover:text-red-300'
          onClick={() => setIsOpen(false)}
        >
          <HiXMark size={28} />
        </button>

        <div className='p-4'>
          <ul className='flex flex-col space-y-4 '>
            {navLinks.map(link => (
              //  className='flex flex-col gap-y-4'>
              <li key={link.id} className='inline-block mx-4'>
                <a href={link.path} className='text-white hover:text-gray-200'>
                  {link.name}
                </a>
              </li>
              // </div>
            ))}
          </ul>
        </div>

        <div className=' px-2 mt-4 flex flex-col gap-y-4'>
          <button className='bg-white text-green-500 px-4 py-2 rounded'>
            signup
          </button>

          <button
            onClick={toggleTheme}
            className='dark:text-white p-3 flex items-center justify-center text-slate-900 bg-green-200 dark:bg-green-500 rounded-md'
          >
            {isDark ? <HiSun /> : <HiMoon />}
          </button>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
