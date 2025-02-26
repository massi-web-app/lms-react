"use client";
import {SVGAttributes} from "react";
import {SvgIcon} from "@/app/_components/icons/icon.types";

const BaseIcon: React.FC<SvgIcon> = ({
                                         color = "currentColor",
                                         width = 24,
                                         height = 24,
                                         strokeWidth = '1.5',
                                         viewBox = "0 0 24 24",
                                         fill = "none",
                                         children,
                                         ...rest
                                     }) => {

    return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill={fill}
                strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}>
        {children}
    </svg>
}

export default BaseIcon