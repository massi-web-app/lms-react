import {CourseLectureInterface} from "@/types/course-lecture.interface";

export interface CourseChapterInterface {
    id: number;
    title: string;
    numOfLectures: number;
    durations: string;
    lectures: CourseLectureInterface[]
}