import React from "react";
import {BadgeProps} from "@/app/_components/badge/badge.types";
import classNames from "classnames";
import {Size} from "@/app/_components/types/size.type";



const sizeClasses: Record<Size, string> = {
    tiny: "badge-xs",
    small: "badge-sm",
    normal: 'badge-normal',
    large: 'badge-lg'
}




export const Badge: React.FC<BadgeProps> = ({className, variant, children, size = "tiny"}: BadgeProps) => {

    const classes=classNames(
        "badge",
            className,
            {[`badge-${variant}`]: variant},
            {[`${sizeClasses[size]}`]:size},
        )
    return (
        <div className={classes}>
            {children}
        </div>
    )
}