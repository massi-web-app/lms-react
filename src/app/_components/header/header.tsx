import React from "react";
import Image from 'next/image'
import TopNavigation from "@/app/_components/header/top-navigation";

export const Header: React.FC = () => {

    return (
        <header className="border-b dark:border-base-content dark:border-opacity-5">
            <div className="container flex items-center justify-between ">
                <span>
                    <Image src="/images/logo-light.svg"
                           alt="LMS REACT"
                           width={100}
                           height={36}/>
                </span>
                <TopNavigation/>
                <span className="mr-auto">User Authentication</span>
            </div>
        </header>
    )
}


export default Header;