import { AxiosError, AxiosResponse } from "axios";

export interface IErrorResponce {
    error: boolean,
    exception: AxiosError<string> | string
}

export function isAxiosResponce(responce: AxiosResponse | IErrorResponce): responce is AxiosResponse {
    return (responce as AxiosResponse).data !== undefined
}