import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import {BlogPostCardProps} from './blog-post-card.type'
import {Badge} from "@/app/_components/badge";
import {IconCalendar, IconClock, IconComment, IconUserProfile} from "@/app/_components/icons/icons";

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
                                                              title,
                                                              thumbnailUrl,
                                                              studyTime,
                                                              author,
                                                              postDate,
                                                              numberOfViews,
                                                              numberOfComments,
                                                              isNew,
                                                              slug
                                                          }) => {


    return (
        <div className="card">
            <figure>
                <Image src={thumbnailUrl} alt={title} width={550} height={327}/>
            </figure>
            <div className="card-body">
                <Link href={`/blog/${slug}`} className="card-title mb-auto">
                    {title}
                </Link>

                <div className="flex items-center justify-between mt-2">
                    <Badge variant="info" size="tiny">
                        <IconUserProfile width={16} height={16}/>
                        {author}
                    </Badge>
                    <Badge variant="neutral">
                        <IconCalendar width={16} height={16}/>
                        {postDate}
                    </Badge>
                </div>
            </div>

            <div className="card-footer flex text-xs justify-between">
                <div className="flex gap-1">
                    <Badge variant="accent">
                        <IconComment width={16} height={16}/>
                        {numberOfComments}
                    </Badge>
                </div>
                <span className="flex items-center gap-1">
                    <IconClock width={16} height={16}/>
                    زمان مطالعه : {studyTime} دقیقه
                </span>
            </div>
        </div>
    )
}