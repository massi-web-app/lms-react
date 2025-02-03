import {CourseDetails} from "@/types/course-details.interface";
import {API_URL} from "@/configs/global";


export async function generateStaticParams() {
    const slugs =await  fetch(`${API_URL}/courses/slugs`).then((res) =>
        res.json()
    );

    return (slugs as string[]).map((slug) => ({
        slug: slug
    }))
}

export async function getCourse(slug: string): Promise<CourseDetails> {
    const response = await fetch(`${API_URL}/courses/${slug}`);
    return response.json();
}

const CourseDetails = async ({params}: { params: { slug: string } }) => {

    const {slug} = params;
    const courseData = await getCourse(slug);


    return (
        <div className="flex-1 flex justify-center items-center text-5xl">
            <h1>{courseData.title }</h1>
        </div>
    )
}

export default CourseDetails;