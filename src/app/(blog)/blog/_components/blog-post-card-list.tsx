import React from "react";
import {BlogPostCardListProps} from './blog-post-card.type'
import {BlogPostCard} from './blog-post-card'

export const BlogPostCardList: React.FC<BlogPostCardListProps> =  ({posts}) => {

    return (
        <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-2">
            {
                posts?.map((post) => (
                    <BlogPostCard key={`blog-post-${post.slug}`} {...post} />
                ))
            }
        </div>
    )
}