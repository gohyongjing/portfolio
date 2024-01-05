"use client";

import { NavigationMenu } from '@/lib/radix-ui';
import NavLink from './nav-link';
import ThemeToggle from '../theme-toggle';

export default function NavBar() {

  return (
    <NavigationMenu.Root className='sticky top-0 bg-neutral-50 bg-opacity-80 text-neutral-600 dark:bg-opacity-80 dark:bg-neutral-800 dark:text-neutral-300'>
      <NavigationMenu.List className='pl-4 sm:pl-8 pr-4 py-4 flex justify-between animate-fade-in'>
        <NavigationMenu.Item>
          <NavLink href='/'>
            Yong Jing
          </NavLink>
        </NavigationMenu.Item>
        <span className='flex gap-4'>
          <NavigationMenu.Item>
           <NavLink href='#about'>
            About
            </NavLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavLink href='#work'>
              Work
            </NavLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavLink href='#projects'>
              Projects
            </NavLink>
          </NavigationMenu.Item>     
          <ThemeToggle />
        </span>
      </NavigationMenu.List>
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
