"use client";
import {Button} from "@/app/_components/button";
import {Textbox} from "@/app/_components/textbox";
import {TextInput} from "@/app/_components/form-input";
import {useForm} from "react-hook-form";
import {SigIn} from '../types/sigin.types';

const SignInForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<SigIn>();


    const onSubmit = async (data: any) => {
        console.log(data);
    }

    return (
        <>
            <h5 className="text-2xl">ورود | ثبت نام</h5>
            <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
            <form className="flex flex-col gap-6 mt-16" onSubmit={handleSubmit(onSubmit)}>
                <TextInput<SigIn>
                    register={register}
                    name={"mobile"}
                    rules={{
                        required: "شماره موبایل الزامی است.",
                        maxLength: {
                            value: 11,
                            message: "شماره موبایل 11 رقم باشد"
                        },
                        minLength: {
                            value:11,
                            message:"شماره موبایل باید 11 رقم باشد"
                        }
                    }}
                    errors={errors}
                />

                <Button type="submit" variant="primary">
                    تایید و دریافت کد
                </Button>
            </form>
        </>
    );
};

export default SignInForm;