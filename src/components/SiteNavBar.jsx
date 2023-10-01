"use client"
import { FaListUl } from 'react-icons/fa6';
import { FiChevronDown } from 'react-icons/fi';

const SiteNavBar = () => {
  return <header className="container mx-auto mt-4 py-4 text-black"><div className="flex justify-between items-center space-b">
    <p className="font-bold text-xl"><a href="/">Design<span className="text-sec">AGENCY</span></a></p>
    <nav className='font-medium'>
      <ul className="hidden md:flex md:flex-row md:items-center md:gap-6">
        <li className='text-lg'><a href="/">Home</a></li>
        <li className='text-lg'><a href="/team">Team</a></li>
        <li className='text-lg'><a href="/service">Service</a></li>
        <li className='text-lg'><a href="/projects">Projects</a></li>
        <li className='text-lg'><a href="/testimonials">Testimonials</a></li>
        <li><button className="flex flex-row items-center gap-1 py-1 px-4 border-2 border-brand rounded-lg text-lg">Login<FiChevronDown /></button></li>
        <li><button className="flex flex-row items-center gap-1 py-1 px-4 border-2 border-brand bg-brand rounded-lg text-lg text-white">Register</button></li>
      </ul>
      <button className='block md:hidden  px-4 py-4 bg-white mr-6 rounded-lg focus:outline-none group'> <FaListUl />
        <div className='absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-200'>
          <ul className="flex flex-col item-center w-full text-base cursor-pointer pt-10">
          <li className='text-lg px-6 py-4'><a href="/">Home</a></li>
        <li className='text-lg px-6 py-4'><a href="/team">Team</a></li>
        <li className='text-lg px-6 py-4'><a href="/service">Service</a></li>
        <li className='text-lg px-6 py-4'><a href="/projects">Projects</a></li>
        <li className='text-lg px-6 py-4'><a href="/testimonials">Testimonials</a></li>
          </ul>
        </div>
      </button>
    </nav>
  </div>
  </header>;
};
export default SiteNavBar;