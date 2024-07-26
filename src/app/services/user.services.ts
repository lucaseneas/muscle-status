import { httpClient } from "@/http";
import { User } from "@/types/user";
import { AxiosResponse } from "axios";
require('dotenv').config();

const baseURL = process.env.NEXT_PUBLIC_BASEURL;
const registerEndPoint = "/auth/register";

const url = baseURL + registerEndPoint;

export const useUserService = () => {

    const create = async (user: User) => {
        const response: AxiosResponse<User> = await httpClient.post<User>(url,user);
        return response.data;
      };

    return {create};
}