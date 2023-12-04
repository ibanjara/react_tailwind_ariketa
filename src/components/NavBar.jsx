import { useState } from 'react'

import burgerMenu from '../assets/images/icon-menu.svg'
import closeBtn from '../assets/images/icon-menu-close.svg'

export const NavBar = () => {

  // true bezala hasieratu, horrela hamburguesako menua izkutuz.
  const [menuVisible, setmenuVisible] = useState(true)

  // egoera aldatu, itxita badago, ireki, eta alderantziz (true => false, false => true)
  const kontrolatu = () => {
    setmenuVisible(egoera => !egoera)
  }

  return (
    <>
      <ul className={`${menuVisible ? 'hidden' : ''} absolute bg-white top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:place-content-around sm:p-0 sm:h-auto sm:relative sm:text-[16px]`}>
        <li className={`${menuVisible ? 'hidden' : ''} cursor-pointer sm:hidden  flex place-content-end`}>
          <img className='w-8 h-8 mb-[87px]' src={closeBtn} onClick={kontrolatu} alt="" />
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-[#F15E50] sm:text-4' href="#">Home</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-[#F15E50]' href="#">New</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-[#F15E50]' href="#">Popular</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-[#F15E50]' href="#">Trending</a>
        </li>
        <li className='mb-8 sm:mb-0'>
          <a className='hover:text-[#F15E50]' href="#">Categories</a>
        </li>
      </ul>
      <img className={`${menuVisible ? '' : 'hidden'} w-10 h-4 cursor-pointer sm:hidden`} src={burgerMenu} onClick={kontrolatu} alt="" />
    </>
  )
}