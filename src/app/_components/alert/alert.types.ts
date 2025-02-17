import {ComponentBase} from "@/app/_components/types/component-base.type";
import React from "react";

export type AlertProps = Omit<ComponentBase, 'isDisabled'> & {
    showIcon?: boolean,
    children: React.ReactNode
}