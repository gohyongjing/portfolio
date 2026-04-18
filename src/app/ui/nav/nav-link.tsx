'use client';

import { NavigationMenu } from '@/lib/radix-ui';
import Link from 'next/link';

type NavBarProps = {
  href: string
  children: React.ReactNode
}

export default function NavLink({
  href,
  children
}: NavBarProps) {
  return (
    <NavigationMenu.Link asChild>
      <Link href={href} className='hover:text-neutral-800 dark:hover:text-neutral-50 cursor-pointer'>
        {children}
      </Link>
    </NavigationMenu.Link>
  );
}
