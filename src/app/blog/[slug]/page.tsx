const BlogDetails = async ({params}: {
    params: { slug: string }
}) => {

    const {slug} = params;

    return (
        <div className="text-5xl flex justify-center items-center ">
            this is slug  {slug}
        </div>
    )
}

export default BlogDetails;