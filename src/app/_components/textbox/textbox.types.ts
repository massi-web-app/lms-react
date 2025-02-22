import {InputHTMLAttributes} from "react";
import {ComponentBase} from "@/app/_components/types/component-base.type";

type TextBoxType = "text" | "number" | "email" | "password";


export type TextProps =Omit<InputHTMLAttributes<HTMLInputElement>,'size'> & ComponentBase & {
    type?: TextBoxType
};

