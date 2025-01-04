import  Image from 'next/image'
import {Button} from './_components/button'
import {HomeHeroSection} from "@/app/_components/home-hero-section/home-hero-section";

export default function Home() {
    return (
        <>
            <HomeHeroSection/>
            <div className="container">
            </div>
        </>
    );
}
