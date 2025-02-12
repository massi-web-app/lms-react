'use client';
import {useParams} from "next/navigation";
import {useCourseComments} from "@/app/(courses)/courses/[slug]/_api/get-comments";
import {Comment} from '@/app/_components/comment'
import {TextPlaceholder} from "@/app/_components/placeholders";
import {Fragment, useEffect} from "react";
import {useInView}  from 'react-intersection-observer'
export const CourseComments = () => {

    const {ref,inView}=useInView({

    });
    const {slug} = useParams();

    const {data: comments, isFetchingNextPage, fetchNextPage, hasNextPage, refetch} = useCourseComments({
        params: {
            slug: slug as string,
            page: 1
        }
    });


    useEffect(()=>{
        if (inView && hasNextPage){
            fetchNextPage();
        }
    },[inView,hasNextPage]);

    return (
        <>
            {comments?.pages.map((currentPage)=>(
                <Fragment key={`comment-page-${currentPage.nextPage}`}>
                    {
                        currentPage.data.map((comment)=>(
                            <Comment key={`comment-courses-${comment.id}${comment.fullName}`} {...comment} variant={"info"}/>
                        ))
                    }
                </Fragment>
            ))}

            {(isFetchingNextPage || hasNextPage) && (
                <div ref={ref}>
                    <TextPlaceholder/>
                </div>
            )}

            {/*{isLoading && <TextPlaceholder/>}*/}

        </>
    )
}

export default CourseComments;