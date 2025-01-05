import {HomeHeroSection} from "@/app/_components/home-hero-section/home-hero-section";
import {CourseSummeryInterface} from "@/types/course-summery.interface";
import {CourseCardList} from './(courses)/_components/course-card-list'

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
            <section className="container pt-20">
                <div className="text-center xl:text-right">
                    <h2 className="text-2xl font-extrabold">
                        تازه ترین دوره های آموزشی
                    </h2>
                    <p>
                        برای به روز موندن ، یاد گرفتن نکته های تازه ضروری
                    </p>
                </div>
                <CourseCardList courses={newestCourses}/>
            </section>
        </>
    );
}
