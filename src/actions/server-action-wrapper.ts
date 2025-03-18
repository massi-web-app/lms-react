import {OperationResultTypes} from '@/types/operation-result.types';
import {Problem} from "@/types/http-errors.interface";

export async function serverActionWrapper<T>(action: () => Promise<T>): Promise<OperationResultTypes<T>> {

    try {
        const response = await action();

        return {isSuccess: true, response};
    } catch (error:unknown) {
        const err=error as Problem;
        if (err){
            return {
                isSuccess:false,
                error:err,
            }
        }
        throw new Error('خطای ناشناخته');
    }
}
