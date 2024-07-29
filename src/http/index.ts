import Axios, { AxiosInstance } from "axios";
import { getSession } from "next-auth/react";

export const httpClient: AxiosInstance = Axios.create({
    baseURL: process.env.BASEURL,
    withCredentials: false,
});

// Adiciona um interceptador na requisição

httpClient.interceptors.request.use(async function (config) {
    const session: any = await getSession();

    console.log("Sessão:",session);
    if (session?.accessToken) {
        config.headers.Authorization = session!.accessToken
            ? `Bearer ${session.accessToken}`
            : "";
    }

    return config;
});
