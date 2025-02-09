'use client';
import {useEffect} from "react";
import {readData} from "@/core/http-service/http-service";
import {useParams, usePathname} from "next/navigation";
import {useCourseComments} from "@/app/(courses)/courses/[slug]/_api/get-comments";

export const CourseComments = () => {

    const {slug} = useParams();

    const {data: comments} = useCourseComments({
        params: {
            slug: slug as string,
            page: 1
        }
    });


    return (
        <>
            {
                comments?.data.map((comment) => <p className="mb-8" key={comment.id}>{comment.commentText}</p>)
            }

        </>
    )
}

export default CourseComments;