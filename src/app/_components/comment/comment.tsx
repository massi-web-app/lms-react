import React from "react";
import {CommentProps} from './comment.types'
import {Avatar} from "@/app/_components/avatar";
import {API_URL} from "@/configs/global";
import {Rating} from "@/app/_components/rating";

export const Comment: React.FC<CommentProps> = ({
                                                    fullName,
                                                    isResponse,
                                                    userId,
                                                    commentText,
                                                    date,
                                                    variant,
                                                    score,
                                                }) => {

    const srcPath = userId ? API_URL + '/picture/' + userId : undefined;
    return (
        <div className={`comment comment-${isResponse ? "end" : "start"}`}>
            <div className="comment-image">
                <Avatar
                    src={srcPath}
                    size="tiny"
                    variant={!isResponse ? "neutral" : variant}
                />
            </div>
            <div className="comment-header">
                {fullName}
                <time className="text-xs opacity-50 mx-2">{date}</time>
            </div>
            <div
                className={`comment-bubble ${
                    isResponse ? "comment-bubble-" + variant : ""
                }`}
            >
                {commentText}
            </div>
            {score && score > 0 && (
                <div className="comment-footer">
                    <Rating variant="accent" size="tiny" rate={score!}/>
                </div>
            )}
        </div>
    )
}
