import { AxiosInstance, AxiosRequestConfig } from "axios";
export interface HttpService {
    GET<T>(path: string, config?: AxiosRequestConfig): Promise<T>;
    POST<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    PUT<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    DELETE<T>(path: string, config?: AxiosRequestConfig): Promise<T>;
}
export declare class DefaultHttpService implements HttpService {
    private config;
    client: AxiosInstance;
    constructor(config: any, client?: AxiosInstance);
    headers(config: any): void;
    GET<T>(path: string, config?: AxiosRequestConfig): Promise<T>;
    POST<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    PUT<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    DELETE<T>(path: string, config?: AxiosRequestConfig): Promise<T>;
}
