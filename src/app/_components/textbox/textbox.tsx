import React from "react";
import {Size} from '../types/size.type';
import {TextProps} from './textbox.types';
import classNames from "classnames";


export const sizeClasses: Record<Size, string> = {
    tiny: "textbox-xs",
    small: "textbox-sm",
    normal: "textbox-md",
    large: "textbox-lg"
}


export  const Textbox: React.FC<TextProps> = ({
                                                 variant = "ghost",
                                                 type = "text",
                                                 className,
                                                 size = "normal",
                                                 ...rest
                                             }) => {

    const classes = classNames("textbox", "w-full", className, {[`textbox-${variant}`]: variant}, {[`${sizeClasses[size]}`]: size})

    return (
        <input type={type} className={classes} {...rest} />
    )
}


