import React from "react";
import {AvatarProps} from "@/app/_components/avatar/avatar.types";
import {Size} from '../types/size.type'
import classNames from "classnames";
import Image from 'next/image';
import {IconUserProfile} from '@/app/_components/icons/icons'

const sizeClasses: Record<Size, number> = {
    tiny: 40,
    small: 50,
    normal: 70,
    large: 120

}

export const Avatar: React.FC<AvatarProps> = ({variant = "primary", size = "normal", src, alt = ''}) => {

    const classes = classNames('avatar',
        {[`avatar-${variant}`]: variant},
        {[`${sizeClasses[size]}`]: size},
    )

    return (
        <div className={classes} style={{width: sizeClasses[size], height: sizeClasses[size]}}>
            {
                src ? <Image src={src} alt={alt} width={sizeClasses[size]} height={sizeClasses[size]}/> :
                    <IconUserProfile width={sizeClasses[size] / 2} height={sizeClasses[size] / 2}/>
            }

        </div>
    )
}
