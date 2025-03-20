"use server";
import {signInSchema} from "@/app/(auth)/signin/_types/signin.schema";
import {OperationResultTypes} from "@/types/operation-result.types";
import {serverActionWrapper} from "@/actions/server-action-wrapper";
import {createData} from "@/core/http-service/http-service";
import {SignIn} from '@/app/(auth)/signin/_types/sigin.types';
import {SendAuthCode, VerifyUserType} from "@/app/(auth)/verify/_types/verify-user.type";
import {Problem} from "@/types/http-errors.interface";
import {signIn, signOut, AuthrozieError} from "@/auth";

export async function signInAction(FormState: OperationResultTypes<string> | null, formData: FormData) {
    const mobile = formData.get("mobile") as string;
    const validatedData = signInSchema.safeParse({
        mobile,
    });

    if (!validatedData.success) {
        return {
            message: "خطا در فرمت موبایل"
        }
    }
    return serverActionWrapper(async () => await createData<SignIn, string>(`/signin`, {
        mobile
    }))

}


export async function sendAuthCode(formState: OperationResultTypes<string> | null, mobile: string) {
    return serverActionWrapper(async () => await createData<SendAuthCode, string>('/send-auth-code', {mobile}));

}


export async function verify(prevState: OperationResultTypes<void> | undefined, model: VerifyUserType) {
    try {
        await signIn("credentials", {
            username: model.username,
            code: model.code,
            redirect: false
        });
        return {
            isSuccess: true
        } satisfies  OperationResultTypes<void>
    } catch (error) {
        if (error instanceof AuthrozieError) {
            return {
                isSuccess: false,
                error: error.problem
            } satisfies OperationResultTypes<void>
        }
        throw new Error("");
    }
}


export async function logout(prevState:OperationResultTypes<void> | undefined) {

    try{
        await signOut({redirect:false});
        return {
            isSuccess:true
        } satisfies OperationResultTypes<void>
    }catch (error){
        throw Error('');

    }
}