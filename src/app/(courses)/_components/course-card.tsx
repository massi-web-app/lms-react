import {CourseSummeryInterface} from "@/types/course-summery.interface";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export type CourseCardProps = CourseSummeryInterface & {}


export const CourseCard: React.FC<CourseCardProps> = ({
                                                          coverImageId,
                                                          title,
                                                          subTitle,
                                                          level,
                                                          recordStatus,
                                                          basePrice,
                                                          duration,
                                                          slug
                                                      }: CourseCardProps) => {
    return (
        <div className="card">
            <figure>
                <Image src={`https://api.classbon.com/api/picture/${coverImageId}`} alt={title} width={550}
                       height={327}/>
            </figure>
            <div className={"mt-2 flex gap-2 font-semibold dark:text-info px-3 py-2"}>
                {
                    recordStatus
                }
                {
                    level
                }
            </div>
            <div className={"card-body"}>
                <Link href={`/course/${slug}`}>
                    {title}
                </Link>
                <p>
                    {subTitle}
                </p>
                <div>
                    {
                        duration
                    }
                    {
                        basePrice
                    }
                </div>
            </div>
            <Link href={`course/${slug}`} className="card-footer justify-center">
                مشاهده جزییات دوره
            </Link>
        </div>
    )
}