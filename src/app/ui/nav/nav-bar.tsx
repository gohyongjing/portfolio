"use client";

import { NavigationMenu } from '@/lib/radix-ui';
import NavLink from './nav-link';

export default function NavBar() {

  return (
    <NavigationMenu.Root className='sticky top-0 bg-neutral-800 text-neutral-400 '>
      <NavigationMenu.List className='pl-4 sm:pl-8 pr-4 py-4 flex justify-between animate-fade-in'>
        <NavigationMenu.Item>
          <NavLink>
            Yong Jing
          </NavLink>
        </NavigationMenu.Item>
        <span className='flex gap-4'>
          <NavigationMenu.Item>
           <NavLink>
            About
            </NavLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavLink>
              Skills
            </NavLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavLink>
              Projects
            </NavLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavLink>
              Work
            </NavLink>
          </NavigationMenu.Item>     
        </span>
      </NavigationMenu.List>
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
