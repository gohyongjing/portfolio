'use client';

import { NavigationMenu } from '@/lib/radix-ui';

type NavBarProps = {
  children: React.ReactNode
}

export default function NavLink({children}: NavBarProps) {
  return (
    <NavigationMenu.Link className='text-xl hover:text-neutral-50 cursor-pointer'>
        {children}
    </NavigationMenu.Link>
  );
}
