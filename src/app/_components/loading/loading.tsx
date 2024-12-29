import React from "react";
import {LoadingProps} from './loading.types'
import classNames from "classnames";
import {Size} from "@/app/_components/types/size.type";


const sizeClasses: Record<Size, string> = {
    tiny: "loading-xs",
    small: "loading-sm",
    normal: 'loading-md',
    large: 'loading-lg'
}


export const Loading: React.FC<LoadingProps> = ({type = "spinner", variant, size, className}: LoadingProps) => {

    const classes = classNames(
        'loading',
        className,
        {[`loading-${type}`]: type},
        {[`${sizeClasses[size]}`]: size},
        {[`loading-${variant}`]:variant}
    )

    return (
        <span className={classes}></span>
    )
}