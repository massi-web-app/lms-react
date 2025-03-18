import {Problem} from "@/types/http-errors.interface";

export type OperationResultTypes<T> = {
    isSuccess:boolean;
    error?:Problem;
    response?:T
}