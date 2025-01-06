import React from "react";
import {CourseSummeryInterface} from "@/types/course-summery.interface";
import {CourseCard} from './course-card'

type CourseCardListProps = {
    courses: CourseSummeryInterface[];
}


export const CourseCardList: React.FC<CourseCardListProps> = ({courses}: CourseCardListProps) => {
    return (
        <div className="flex flex-wrap  gap-6 mt-10">
            {
                courses.map((course) => (
                    <CourseCard key={`course-${course.slug}`} {...course}/>
                ))
            }
        </div>
    )
}