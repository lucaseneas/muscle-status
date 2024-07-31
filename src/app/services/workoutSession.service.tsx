import { httpClient } from "@/http";
import { WorkoutSession } from "@/types/workoutSession";
import { AxiosResponse } from "axios";
require('dotenv').config();

const baseURL = process.env.NEXT_PUBLIC_BASEURL;
const registerEndPoint = "/workout-session";

const url = baseURL + registerEndPoint;

export const useWorkoutSessionService = () => {



    const findWorkoutSessionByWorkoutId = async (id : number) => {
        const response: AxiosResponse<WorkoutSession[]> = await httpClient.get<WorkoutSession[]>(`${url}/workout/${id}`);
        return response.data;
      };

    return { findWorkoutSessionByWorkoutId};
}