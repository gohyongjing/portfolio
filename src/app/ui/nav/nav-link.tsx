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
    <Link href={href} passHref legacyBehavior>
      <NavigationMenu.Link className='hover:text-neutral-800 dark:hover:text-neutral-50 cursor-pointer'>
        {children}
      </NavigationMenu.Link>
    </Link>
  );
}
