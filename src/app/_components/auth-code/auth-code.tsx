"use client";
import {AuthCodeProps, AuthInputProps} from "@/app/_components/auth-code/auth-code.types";
import {useRef} from "react";
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


    const sendResult = () => {
        //send Code
    }

    const handleOnChange = () => {

    }

    const handleOnFoucs = () => {

    }


    const handleKeyDown = () => {

    }


    const classes=classNames("textbox flex-1 w-1 text-center",{
        [`textbox-${variant}`]:variant
    })

    const inputs = [];

    for (let i = 0; i < length; i++) {
        inputs.push(
            <input className={classes} type="text" key={`input-auth-code-${i}`} maxLength={1} disabled={isDisabled} onChange={handleOnChange} onFocus={handleOnFoucs}
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