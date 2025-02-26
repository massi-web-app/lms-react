"use client";
import {Button} from "@/app/_components/button";
import {Textbox} from "@/app/_components/textbox";
import {TextInput} from "@/app/_components/form-input";
import {useForm} from "react-hook-form";
import {SingIn} from '../types/sigin.types';
import {useSignIn} from "@/app/(auth)/signin/_api/signin";
import {useRouter} from "next/navigation";
import {useNotificationStore} from "@/stores/notification.store";
import {useEffect} from "react";

const SignInForm = () => {

    const {register, handleSubmit, formState: {errors},getValues} = useForm<SingIn>();

    const router = useRouter();


    const signIn = useSignIn({
        onSuccess: () => {
            router.push(`/verify?mobile=${getValues('mobile')}`)
        }
    })

    const onSubmit = async (data: SingIn) => {
        signIn.submit(data);
    }

    const showNotificaiton=useNotificationStore(state => state.showNotification);

    useEffect(()=>{

        showNotificaiton({
            type:"error",
            message:"error"
        })

    },[]);




    return (
        <>
            <h5 className="text-2xl">ورود | ثبت نام</h5>
            <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
            <form className="flex flex-col gap-6 mt-16" onSubmit={handleSubmit(onSubmit)}>
                <TextInput<SingIn>
                    register={register}
                    name={"mobile"}
                    rules={{
                        required: "شماره موبایل الزامی است.",
                        maxLength: {
                            value: 11,
                            message: "شماره موبایل 11 رقم باشد"
                        },
                        minLength: {
                            value: 11,
                            message: "شماره موبایل باید 11 رقم باشد"
                        }
                    }}
                    errors={errors}
                />

                <Button type="submit" variant="primary" isLoading={signIn.isPending}>
                    تایید و دریافت کد
                </Button>
            </form>
        </>
    );
};

export default SignInForm;