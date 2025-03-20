import {ReactNode} from "react";
import {auth} from "@/auth";
import {redirect} from "next/navigation";


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