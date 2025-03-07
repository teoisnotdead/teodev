'use client';

import Image from 'next/image';
import { MenuItem } from './MenuItem';

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Image src="/images/logo/teodev_dark.webp" alt="TEODEV Logo" height={30} width={180} priority />
      <MenuItem />
    </div>
  );
};
