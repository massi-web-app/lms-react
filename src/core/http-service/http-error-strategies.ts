import {
    ApiError,
    BadRequestError, NetworkError,
    NotFoundError,
    UnauthorizedError, UnhandledException,
    ValidationError
} from "@/types/http-errors.interface";

export type ApiErrorHandler = (errorData: ApiError) => void;


export const BadRequestErrorStrategy: ApiErrorHandler = errorData => {
    throw {
        ...errorData,
    } as BadRequestError;
}


export const ValidationErrorStrategy: ApiErrorHandler = errorData => {
    throw {
        ...errorData,
    } as ValidationError;
}

export const NotFoundErrorStrategy: ApiErrorHandler = errorData => {
    throw {
        ...errorData,
        detail: 'سرویس مورد نظر یافت نشد'
    } as NotFoundError;
}

export const UnauthorizedErrorStrategy: ApiErrorHandler = errorData => {
    throw {
        ...errorData,
        detail: 'دسترسی به سرویس مورد نظر امکان پذیر نمیباشد.'
    } as UnauthorizedError
}

export const UnhandledExceptionStrategy: ApiErrorHandler = errorData => {
    throw {
        ...errorData,
        detail: 'خطا سرور'
    } as UnhandledException
}


export const NetworkErrorStrategy:ApiErrorHandler = errorData => {
    throw {
        detail: 'خطایی شبکه'
    } as NetworkError
}

export const errorHandler: Record<number, ApiErrorHandler> = {
    400: (errorData) => (errorData.errors ? ValidationErrorStrategy : BadRequestErrorStrategy)(errorData),
    403: UnauthorizedErrorStrategy,
    404: NotFoundErrorStrategy,
    500: UnhandledExceptionStrategy
}