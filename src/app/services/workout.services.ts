import { httpClient } from "@/http";
import { User } from "@/types/user";
import { Workout } from "@/types/workout";
import { AxiosResponse } from "axios";
require('dotenv').config();

const baseURL = process.env.NEXT_PUBLIC_BASEURL;
const registerEndPoint = "/workout";

const url = baseURL + registerEndPoint;

export const useWorkoutService = () => {

    const create = async (workout: Workout) => {
        const response: AxiosResponse<User> = await httpClient.post<User>(url, workout);
        return response.data;
    };

    //const findWorkoutByIdUser = async (): Promise<Workout[]> => {
    const findWorkoutByIdUser = async (id : string) => {
        const response: AxiosResponse<Workout[]> = await httpClient.get<Workout[]>(`${url}/user/${id}`);
        return response.data;
      };

    return { create , findWorkoutByIdUser};
}