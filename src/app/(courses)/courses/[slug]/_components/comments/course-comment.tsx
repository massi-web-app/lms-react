'use client';
import {useEffect} from "react";
import {readData} from "@/core/http-service/http-service";

export const CourseComments = () => {
    useEffect(() => {

        readData('/validation-error');

    }, []);

    return (
        <>

        </>
    )
}

export default CourseComments;