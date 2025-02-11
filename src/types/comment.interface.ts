export interface CommentInterface {
    id: number;
    date: string;
    fullName:string;
    userId: number | undefined;
    commentText: string;
    score: number | null;
    isResponse: boolean;
}
