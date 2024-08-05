import { httpClient } from "@/http";
import { WorkoutSessionExercise } from "@/types/workoutSessionExercise";

import { AxiosResponse } from "axios";
require('dotenv').config();

const baseURL = process.env.NEXT_PUBLIC_BASEURL;
const registerEndPoint = "/workout-session-exercise";

const url = baseURL + registerEndPoint;

export const useWorkoutSessionExerciseService = () => {



    const findWorkoutSessionExerciseByWorkoutSession = async (id : number) => {
        const response: AxiosResponse<WorkoutSessionExercise[]> = await httpClient.get<WorkoutSessionExercise[]>(`${url}/workout-session/${id}`);
        return response.data;
      };

    return { findWorkoutSessionExerciseByWorkoutSession};
}