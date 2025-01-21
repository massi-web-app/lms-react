import {BlogPostSummery} from '@/types/blog-post-summery.interface'

export type BlogPostCardProps = BlogPostSummery & {}

export type BlogPostCardListProps = {
    posts: BlogPostSummery[]
}