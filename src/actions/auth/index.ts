"use server";
import {signInSchema} from "@/app/(auth)/signin/_types/signin.schema";
import {OperationResultTypes} from "@/types/operation-result.types";
import {serverActionWrapper} from "@/actions/server-action-wrapper";
import {createData} from "@/core/http-service/http-service";
import {SignIn} from '@/app/(auth)/signin/_types/sigin.types';
import {SendAuthCode} from "@/app/(auth)/verify/_types/verify-user.type";
import {Problem} from "@/types/http-errors.interface";
import {signIn, signOut} from "@/auth";

export async function signInAction(FormState: OperationResultTypes<string> | null, formData: FormData) {
    const mobile = formData.get("mobile") as string;
    // const validatedData = signInSchema.safeParse({
    //     mobile,
    // });
    //
    // if (!validatedData.success) {
    //     return {
    //         message: "خطا در فرمت موبایل"
    //     }
    // }
    return serverActionWrapper(async () => await createData<SignIn, string>(`/signin`, {
        mobile
    }))

}


export async function sendAuthCode(formState:OperationResultTypes<string> | null,mobile:string){
    return serverActionWrapper(async ()=>await createData<SendAuthCode,string>('/send-auth-code',{mobile}));

}


export async function verify(state:Problem | undefined,formData:FormData){
    try {
        await signIn("credentials",formData);
    }catch (error){
        return {
            status:0,
            title:"",
        } satisfies Problem;
    }
}


export async function logout(){
    await signOut();
}