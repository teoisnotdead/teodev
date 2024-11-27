'use client'

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { MenuItem } from './MenuItem';

export const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';
  const logo = isLight ? 'teodev_light' : 'teodev_dark';

  return (
    <div className='flex items-center justify-between w-full'>
      <Image
        src={`/images/logo/${logo}.svg`}
        alt='TEODEV Logo'
        height={30}
        width={180}
        priority
      />

      <MenuItem />

      <div className='flex items-center space-x-4'>
        <button
          className='p-2 m-2 text-white bg-slate-500 dark:bg-gray-500 rounded-md'
          onClick={() => {
            setTheme(isLight ? 'dark' : 'light')
            console.log('Theme changed to', theme);
          }}
        >
          {isLight ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>

        <select className="p-2 m-2 text-secondary dark:text-white bg-transparent dark:bg-transparent focus:ring-0 focus:outline-none">
          <option className="bg-white dark:bg-slate-800 text-secondary dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-black dark:hover:text-white">
            ES
          </option>
          <option className="bg-white dark:bg-slate-800 text-secondary dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-black dark:hover:text-white">
            EN
          </option>
        </select>
      </div>
    </div>
  )
}
