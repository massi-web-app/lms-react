export interface CourseComments {
    id: number;
    date: string;
    userId: number | undefined;
    commentText: string;
    score: number | null;
    isResponse: boolean;
}

export interface CourseCommentList {
    data: CourseComments[];
    nextPage: number;
}