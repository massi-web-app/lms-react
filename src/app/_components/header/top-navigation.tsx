'use client';
import React from "react";
import Link from 'next/link'
import {usePathname} from "next/navigation";

const menuItems: NavigationMenuItem[] = [
    {
        title: 'صفحه اصلی',
        href: '/',
    },
    {
        title: 'دوره های ری اکت و نکست',
        href: '/courses'
    },
    {
        title: "مطالب و مقالات",
        href: '/blog'
    }
]

const TopNavigation: React.FC = () => {

    const pathName = usePathname();

    return (
        <ul className="flex gap-x-8 mr-12">
            {menuItems.map((menuItem) => {
                    const isActive = pathName === menuItem.href;
                    return (
                        <li key={`navigation-${menuItem.href}`}>
                            <Link href={menuItem.href} className={`dark:hover:text-primary transition-colors pb-2 ${isActive && 'border-b-2 dark:text-primary dark:border-primary/30'}`}>
                                {menuItem.title}
                            </Link>
                        </li>
                    )

                }
            )}
        </ul>
    )
}


export default TopNavigation
