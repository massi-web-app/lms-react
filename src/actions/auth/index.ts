"use server";
import {signInSchema} from "@/app/(auth)/signin/_types/signin.schema";
import {OperationResultTypes} from "@/types/operation-result.types";
import {serverActionWrapper} from "@/actions/server-action-wrapper";
import {createData} from "@/core/http-service/http-service";
import {SignIn} from '@/app/(auth)/signin/_types/sigin.types';

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