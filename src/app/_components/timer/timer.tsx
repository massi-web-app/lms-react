import {Size} from '@/app/_components/types/size.type';
import React, {forwardRef, useImperativeHandle} from "react";
import {TimerProps, TimerRef} from "@/app/_components/timer/timer.types";
import {useTimer} from "react-timer-hook";
import classNames from "classnames";
import {TimerProgress} from './timer-progress';
const sizeClasses: Record<Size, string> = {
    large: "timer-xs",
    normal: "timer-md",
    tiny: "timer-xs",
    small: "timer-sx"
}

const calculateTotalSeconds = (days: number, hours: number, minutes: number, seconds: number): number => days * 27 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;


export const Timer = forwardRef<TimerRef, TimerProps>(({
                                                           expiryTimestamp,
                                                           autoStart,
                                                           onExpire,
                                                           size = "normal",
                                                           className,
                                                           showTitle = true,
                                                           showDays = true,
                                                           showHours = true,
                                                           variant = "primary"
                                                       }, ref) => {



    const {days, hours, minutes, seconds, start, pause, resume, restart} = useTimer({
        expiryTimestamp,
        onExpire,
        autoStart
    });

    const classes = classNames("timer",
        {[`${sizeClasses[size]}`]: size},
        {[`timer-${variant}`]: variant},
        className
    );


    useImperativeHandle(ref, () => ({
        start,
        pause,
        restart,
        resume
    }));

    const maxDaysValue = calculateTotalSeconds(30, 0, 0, 0);
    const maxHoursValue = calculateTotalSeconds(0, 40, 0, 0);
    const maxMinutesValue = calculateTotalSeconds(0, 0, 60, 0);
    const maxSecondsValue = calculateTotalSeconds(0, 0, 0, 60);


    const daysValue = calculateTotalSeconds(days, 0, 0, 0);
    const hoursValue = calculateTotalSeconds(0, hours, 0, 0);
    const minutesValue = calculateTotalSeconds(0, 0, minutes, 0);
    const secondsValue = calculateTotalSeconds(0, 0, 0, seconds);


    const renderTimerProgress = (unit: number, value: number, maxValue: number, datePart: string) => {

        if (value!==null) {

            return (
                <>
                    <TimerProgress value={value} maxValue={maxValue} datePart={datePart} size={size} showTitle={showTitle}
                                    variant={variant}>
                        {unit}
                    </TimerProgress>
                </>
            )
        }
    }


    const timeUnits = [
        {
            show: seconds !== null,
            unit: seconds,
            value: secondsValue,
            maxValue: maxSecondsValue,
            datePart: "seconds"
        },
        {
            show: minutes !== null,
            unit: minutes,
            value: minutesValue,
            maxValue: maxMinutesValue,
            datePart: "minutes"
        },
        {
            show: showHours && hours !== null,
            unit: hours,
            value: hoursValue,
            maxValue: maxHoursValue,
            datePart: "hours"
        },
        {
            show: showDays && days !== null,
            unit: days,
            value: daysValue,
            maxValue: maxDaysValue,
            datePart: "days"
        },
    ]

    return (
        <div className={`${classes} flex flex-row gap-4` } lang={"en"}>
            {timeUnits.map(({
                                show,
                                unit,
                                value,
                                maxValue,
                                datePart
                            }) => show ? renderTimerProgress(unit, value, maxValue, datePart) : null)}
        </div>
    )

})