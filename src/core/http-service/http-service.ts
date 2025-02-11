import {API_URL} from '@/configs/global';

import {
    ApiError
} from '@/types/http-errors.interface';
import axios, {AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse} from "axios";
import {errorHandler, NetworkErrorStrategy} from "@/core/http-service/http-error-strategies";


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

            errorHandler[statusCode](errorData);
        }
    } else {
        NetworkErrorStrategy();
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