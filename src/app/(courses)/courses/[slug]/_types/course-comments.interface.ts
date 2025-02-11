import {CommentInterface} from '@/types/comment.interface';

export interface CourseCommentList {
    data: CommentInterface[];
    nextPage: number;
}