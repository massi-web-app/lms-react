"use client";
import {Button} from '@/app/_components/button';
import Link from 'next/link';
import AuthCode from "@/app/_components/auth-code/auth-code";
import {useActionState, useEffect, useRef, useState, useTransition} from "react";
import {AuthCodeRef} from "@/app/_components/auth-code/auth-code.types";
import {Timer} from "@/app/_components/timer/timer";
import {TimerRef} from "@/app/_components/timer/timer.types";
import {useSendAuthCode} from "@/app/(auth)/verify/_api/send-auth-code";
import {useNotificationStore} from "@/stores/notification.store";
import {useRouter, useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";
import {VerifyUserType} from "@/app/(auth)/verify/_types/verify-user.type";
import {useFormState} from "react-dom";
import {sendAuthCode, verify} from "@/actions/auth";
import {getSession} from "next-auth/react";


const getTwoMinutesFromNow = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10);
    return time;
}

export const VerificationForm = ({mobile}: { mobile: string }) => {

    const [showResendCode, setShowResendCode] = useState<boolean>(false);
    const authCodeRef = useRef<AuthCodeRef>(null);
    const timerRef = useRef<TimerRef>(null);

    const {handleSubmit, setValue, register, formState: {isValid}} = useForm<VerifyUserType>()
    const showNotification = useNotificationStore(state => state.showNotification);

    const [sendAuthCodeState, sendAuthCodeAction] = useActionState(sendAuthCode, {});

    const router=useRouter();

    const [verifyState, verifyAction] = useActionState(verify, undefined);

    const [verifyPendingState, startTransition] = useTransition()


    const params = useSearchParams();
    const username = params.get('mobile')!;


    const onSubmit = (data: VerifyUserType) => {
        data.username = username;
        startTransition(async () => {
            verifyAction({
                username: data.username,
                code: data.code
            });
        })
    }


    register('code', {
        validate: (value: string) => (value ?? "").length === 5
    });


    const resendAuthCode = () => {
        timerRef.current?.restart(getTwoMinutesFromNow());
        setShowResendCode(false);
        authCodeRef.current.clear();
        sendAuthCodeAction(mobile);
    }

    useEffect(() => {
        if (verifyState && !verifyState.isSuccess && verifyState?.error?.detail) {
            showNotification({
                message: verifyState.error.detail,
                type: "error"
            });
        } else if (verifyState?.isSuccess) {
            const fetchSesssion = async () => await getSession();
            fetchSesssion();
            router.push("/student/courses");
        }
    });


    useEffect(() => {
        if (sendAuthCodeState && !sendAuthCodeState.isSuccess && sendAuthCodeState.error) {
            showNotification({
                message: sendAuthCodeState.error?.detail!,
                type: "error"
            })
        } else if (sendAuthCodeState && sendAuthCodeState.isSuccess) {
            showNotification({
                message: "کد تایید به شماره شما ارسال شد.",
                type: "info"
            });
        }
    }, [sendAuthCodeState, showNotification]);

    return (
        <>
            <h5 className="text-2xl">کد تایید</h5>
            <p className="mt-2">
                دنیای شگفت انگیز برنامه نویسی در انتظار شماست!
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-10 flex-1">
                <AuthCode
                    className="mt-10"
                    ref={authCodeRef}
                    onChange={(value) => {
                        setValue('code', value, {shouldValidate: true});
                    }}
                />

                <Timer ref={timerRef} className="my-8" size={"small"} onExpire={() => {
                    setShowResendCode(true)
                }} expiryTimestamp={getTwoMinutesFromNow()} showDays={false} showHours={false} showTitle={false}/>

                <Button isLink={true} isDisabled={!showResendCode} isLoading={verifyPendingState}
                        onClick={resendAuthCode}>ارسال مجدد کد
                    تایید</Button>
                <Button type="submit" variant="primary" isDisabled={!isValid}>
                    تایید و ادامه
                </Button>
                <div className="flex items-start gap-1 justify-center mt-auto">
                    <span>برای اصلاح شماره موبایل</span>
                    <Link href="/signin">اینجا</Link>
                    <span>کلیک کنید</span>
                </div>
            </form>
        </>
    )
}

