import {API_URL} from '@/configs/global';

import {
    BadRequestError,
    NetworkError,
    ValidationError,
    UnauthorizedError,
    UnhandledException, NotFoundError
} from '@/types/http-errors.interface';
import axios, {AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse} from "axios";

type ApiError = BadRequestError | NetworkError | ValidationError | UnauthorizedError | UnhandledException;


const httpService = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    }
});


httpService.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error?.response) {
        const statusCode = error?.response?.status;
        if (statusCode >= 400) {
            const errorData: ApiError = error.response?.data;
            if (statusCode === 400 && !errorData.errors) {
                throw {
                    ...errorData
                } as BadRequestError
            }

            if (statusCode === 400 && errorData.errors) {
                throw {
                    ...errorData
                } as ValidationError
            }

            if (statusCode === 404) {
                throw {
                    ...errorData,
                    detail: 'سرویس مورد نظر یافت نشد'
                } as NotFoundError
            }

            if (statusCode === 403) {
                throw {
                    ...errorData,
                    detail: 'دسترسی به سرویس مورد نظر امکان پذیر نمیباشد.'
                } as UnauthorizedError
            }

            if (statusCode >= 500) {
                throw {
                    ...errorData,
                    detail: 'خطا سرور'
                } as UnhandledException
            }
        } else {
            throw {
                detail: 'خطایی شبکه'
            } as NetworkError
        }
    }
});


async function apiBase<T>(
    url: string,
    options?: AxiosRequestConfig
): Promise<T> {
    const response: AxiosResponse = await httpService(url, options);
    return response.data as T;
}


async function readData<T>(url: string, headers?: AxiosRequestHeaders): Promise<T> {
    const options: AxiosRequestConfig = {
        headers,
        method: 'GET'
    }
    return await apiBase<T>(url, options);
}

async function createData<TModel, TResult>(url: string, data: TModel, headers?: AxiosRequestHeaders): Promise<TResult> {
    const options: AxiosRequestConfig = {
        method: 'POST',
        headers,
        data: JSON.stringify(data)
    }
    return await apiBase<TResult>(url, options);
}


async function updateData<TModel, TResult>(url: string, data: TModel, headers?: AxiosRequestHeaders): Promise<TResult> {
    const options: AxiosRequestConfig = {
        method: 'PUT',
        headers,
        data: JSON.stringify(data)
    }
    return await apiBase<TResult>(url, options);
}


async function deleteData<TModel, TResult>(url: string, headers?: AxiosRequestHeaders): Promise<TResult> {
    const options: AxiosRequestConfig = {
        method: 'DELETE',
        headers,
    }
    return await apiBase<TResult>(url, options);
}

export {createData, readData, updateData, deleteData};