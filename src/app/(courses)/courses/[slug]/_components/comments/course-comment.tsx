'use client';
import {useParams} from "next/navigation";
import {useCourseComments} from "@/app/(courses)/courses/[slug]/_api/get-comments";
import {Comment} from '@/app/_components/comments'
import {TextPlaceholder} from "@/app/_components/placeholders";
export const CourseComments = () => {

    const {slug} = useParams();

    const {data: comments,isLoading} = useCourseComments({
        params: {
            slug: slug as string,
            page: 1
        }
    });


    return (
        <>
            {
                comments?.data.map((comment) => (
                    <Comment key={`comment-${comment.id}`} {...comment} variant={"info"}/>
                ))
            }

            {isLoading && <TextPlaceholder/>}

        </>
    )
}

export default CourseComments;