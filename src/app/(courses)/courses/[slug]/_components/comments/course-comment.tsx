'use client';
import {useParams} from "next/navigation";
import {useCourseComments} from "@/app/(courses)/courses/[slug]/_api/get-comments";
import {Comment} from '@/app/_components/comment'
import {TextPlaceholder} from "@/app/_components/placeholders";
import {Fragment, useEffect} from "react";
import {useInView}  from 'react-intersection-observer';
import {IconRefresh} from '@/app/_components/icons/icons';
import {Alert} from '@/app/_components/alert';
import {Button} from '@/app/_components/button';


export const CourseComments = () => {

    const {ref,inView}=useInView({

    });
    const {slug} = useParams();

    const {data: comments, error,isFetchingNextPage, fetchNextPage, hasNextPage, refetch,isFetching} = useCourseComments({
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


    if (error) {
        return (
            <>
                <Alert variant="error">خطا در برقراری ارتباط با سرور</Alert>
                <div className="text-center mt-3">
                    <Button
                        variant="neutral"
                        className="font-semibold"
                        isOutline={true}
                        shape="wide"
                        onClick={() => refetch()}
                    >
                        <IconRefresh />
                        تلاش مجدد
                    </Button>
                </div>
            </>
        )
    }

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

            {(isFetching || hasNextPage) && (
                <div ref={ref}>
                    <TextPlaceholder/>
                </div>
            )}


        </>
    )
}

export default CourseComments;