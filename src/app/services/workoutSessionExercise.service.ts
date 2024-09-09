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

  const addWorkoutSessionExercise = async (idWorkoutSession: number, idExercise: number) => {
    try{
      const response = await httpClient.post(`${url}/workout-session/${idWorkoutSession}/exercise/${idExercise}`);
      return response;
    }
    catch(error){
      console.error("Não foi possivel inserir um exercicio no treino", error);
      return error;
    }
  }

  const removeWorkoutSessionExercise = async (idWorkoutSessionExercise: number) => {
    try{
      const response = await httpClient.delete(`${url}/${idWorkoutSessionExercise}`);
      return response;
    }
    catch(error){
      console.error("Não foi possivel remover o treino", error)
      return error
    }
  }

  return { findWorkoutSessionExerciseByWorkoutSession,addWorkoutSessionExercise,removeWorkoutSessionExercise };
}