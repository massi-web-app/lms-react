import {ReactNode} from "react";


const StudentLayout = async ({children}: {
    children: ReactNode
}) => {

    return (
        <>
            <aside className="bg-gray-300 w-80 flex justify-center items-center">

            </aside>
            <main>{children}</main>
        </>

    )
}

export default StudentLayout;