"use client";
import {Button} from "@/app/_components/button";
import {Textbox} from "@/app/_components/textbox";
import {TextInput} from "@/app/_components/form-input";
import {useForm} from "react-hook-form";
import {SingIn} from '../types/sigin.types';
import {useRouter} from "next/navigation";
import {useNotificationStore} from "@/stores/notification.store";
import {useEffect} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {signInSchema} from "@/app/(auth)/signin/_types/signin.schema";
import {signInAction} from "@/actions/auth";
import {useFormState} from 'react-dom';
import {Alert} from "@/app/_components/alert";

const SignInForm = () => {

    const {register, handleSubmit, formState: {errors}, getValues} = useForm<SingIn>({
        resolver: zodResolver(signInSchema)
    });

    const [formState,action] = useFormState(signInAction, {message: ''});

    const router = useRouter();

    const showNotification = useNotificationStore(state => state.showNotification);


    useEffect(()=>{
        if (formState.message){
            showNotification({
                message: formState.message,
                type: "error"
            })
        }
    },[formState,showNotification]);

    // router.push(`/verify?mobile=${getValues('mobile')}`);

    const onSubmit = async (data: SingIn) => {
        const formData=new FormData();
        formData.append("mobile",data.mobile);
        action(formData);
        // signIn.submit(data);
    }


    return (
        <>
            <h5 className="text-2xl">ورود | ثبت نام</h5>
            <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
            <form className="flex flex-col gap-6 mt-16" onSubmit={handleSubmit(onSubmit)}>
                <TextInput<SingIn>
                    register={register}
                    name={"mobile"}
                    errors={errors}
                />

                <Button type="submit" variant="primary">
                    تایید و دریافت کد
                </Button>
                {
                    formState.message && <Alert variant={"error"}>{formState.message}</Alert>
                }
            </form>
        </>
    );
};

export default SignInForm;