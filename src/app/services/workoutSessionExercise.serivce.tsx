import { httpClient } from "@/http";
import { WorkoutSessionExercise } from "@/types/workoutSessionExercise";

import axios, { AxiosResponse } from "axios";
require('dotenv').config();

const baseURL = process.env.NEXT_PUBLIC_BASEURL;
const registerEndPoint = "/workout-session-exercise";

const url = baseURL + registerEndPoint;

export const useWorkoutSessionExerciseService = () => {



  const findWorkoutSessionExerciseByWorkoutSession = async (id: number) => {
    const response: AxiosResponse<WorkoutSessionExercise[]> = await httpClient.get<WorkoutSessionExercise[]>(`${url}/workout-session/${id}`);
    return response.data;
  };

//TESTAR ISSO
  const addWorkoutSessionExercise = async (idWorkoutSession: number, idExercise: number) => {
    try {
      const response = await axios.post(`/workout-session/${idWorkoutSession}/exercise/${idExercise}`)
      return response.status >= 200 && response.status < 300;
    }
    catch (error) {
      console.error("Erro ao adicionar exercício à sessão:", error);
      return false;
    }

  }

  return { findWorkoutSessionExerciseByWorkoutSession };
}