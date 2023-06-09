import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
  LinkIcon
  
} from '@heroicons/react/24/solid'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='bg-purple-50'>
        <div className='pt-12 my-container'>
      <div className='relative flex items-center justify-between'>
        {/* Logo Section */}
        <Link to='/' className='inline-flex items-center'>
          <LinkIcon className='h-6 w-6 text-blue-500' />
          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
          Glass-door
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
             Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/statistics'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
             Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/applied_job'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <button className="my-btn">Star Applying</button>
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BoltIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Glass-door
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                      Home
                      </Link>
                    </li>
                    <li>
                      <Link to='/statistics' className='default'>
                      Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/applied_job'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Applied Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>

      
    </div>
    </div>
  )
}

export default Header
