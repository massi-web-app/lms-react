import {ComponentBase} from '@/app/_components/types/component-base.type';
import {Variant} from "@/app/_components/types/variant.type";
import {ReactNode} from "react";

export type TimerRef = {
    start: () => void;
    pause: () => void;
    restart: (expireTimeStamp: Date) => void;
    resume: () => void;
}

type VariantWithGradient = Omit<ComponentBase, 'variant' | 'isDisabled'>


export type TimerProps = VariantWithGradient & {
    variant?: Variant | 'gradient',
    expiryTimestamp: Date,
    autoStart?: boolean,
    showTitle?: boolean,
    showDays?: boolean,
    showHours?: boolean,
    onExpire?: () => void
}

export type TimerProgressProps = VariantWithGradient & {
    variant?: Variant | 'gradient',
    value: number;
    maxValue: number;
    showTitle?: boolean;
    datePart: string;
    children:ReactNode
}