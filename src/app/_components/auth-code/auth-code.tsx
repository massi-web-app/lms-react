"use client";
import {AuthCodeProps, AuthInputProps} from "@/app/_components/auth-code/auth-code.types";
import React, {useEffect, useRef} from "react";
import classNames from "classnames";


export const AuthCode: React.FC<AuthCodeProps> = ({
                                                      variant = 'ghost',
                                                      authFocus = true,
                                                      className,
                                                      isDisabled,
                                                      length = 5,
                                                      onChange
                                                  }) => {


    if (length < 1) {
        throw new Error("تعداد ارقام باید بزرگتر از صفر باشد");
    }

    const inputsRef = useRef<Array<HTMLInputElement>>([]);


    const inputProps: AuthInputProps = {
        min: '0',
        max: '9',
        pattern: '[0-9]{1}'
    };

    useEffect(() => {

        if (authFocus){
            inputsRef.current[0].focus();
        }

    }, [authFocus]);


    const sendResult = () => {

        const result = inputsRef.current.map(input => input.value).join('');
        onChange(result);

    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {value, nextElementSibling}} = e;
        if (value.match(inputProps.pattern)) {
            if (nextElementSibling !== null) {
                (nextElementSibling as HTMLInputElement).focus();
            }
        } else {
            e.target.value = '';
        }

        sendResult();
    }

    const handleOnFoucs = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    }


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

        const {key} = e;
        const target = e.target as HTMLInputElement;
        if (key === 'Backspace') {
            if (target.value === '') {
                if (target.previousElementSibling !== null) {
                    const previousElement = target.previousElementSibling as HTMLInputElement;
                    previousElement.value = '';
                    previousElement.focus();
                }
            } else {
                target.value = '';
            }
        }
        sendResult();
    }


    const classes = classNames("textbox flex-1 w-1 text-center", {
        [`textbox-${variant}`]: variant
    })

    const inputs = [];

    for (let i = 0; i < length; i++) {
        inputs.push(
            <input className={classes} type="text" key={`input-auth-code-${i}`} maxLength={1} disabled={isDisabled}
                   onChange={handleOnChange} onFocus={handleOnFoucs}
                   onKeyDown={handleKeyDown} ref={(element: HTMLInputElement) => {
                inputsRef.current[i] = element;
            }}/>
        );
    }


    return (
        <>
            <div className={`flex gap-4 flex-row-reverse `}>
                {
                    inputs
                }
            </div>

        </>
    )
}