import {HomeHeroSection} from "@/app/_components/home-hero-section/home-hero-section";
import {CourseSummeryInterface} from "@/types/course-summery.interface";


async function getNewestCourses(count: number): Promise<CourseSummeryInterface[]> {
    const res = await fetch(`https://api.classbon.com/api/courses/newest/${count}`, {
        next: {
            revalidate: 24 * 60 * 60
        }
    });
    return res.json();
}


export default async function Home() {
    const newestCourses = await getNewestCourses(4);
    return (
        <>
            <HomeHeroSection/>
            {
                newestCourses.map((p) => (
                    <p key={p.title}>{p.title}</p>
                ))
            }
        </>
    );
}
