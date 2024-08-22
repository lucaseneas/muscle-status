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

    const createWorkoutSession = async (idWorkout:number,workoutSession:WorkoutSession) => {
      try{
        const response = await httpClient.post(`${url}/${idWorkout}`,workoutSession);
        return response;
      }
      catch(error){
        console.error("Não foi possivel criar uma Sessão de Treino", error);
        return error;
      }
    }

    const updateWorkoutSession = async (idWorkoutSession: number, workoutSession:WorkoutSession) => {
      try{
        const response = await httpClient.put(`${url}/${idWorkoutSession}`,workoutSession)
        return response;
      }
      catch(error){
        console.error("Não foi possivel criar uma Sessão de Treino", error)
        return error;
      }
    }

    const removeWorkoutSession = async (idWorkoutSession:number) => {
      try{
        const response = await httpClient.delete(`${url}/${idWorkoutSession}`);
        return response;
      }
      catch(error){
        console.error("Não foi possivel remover uma Sessão de Treino", error);
        return error;
      }
    }

    return { findWorkoutSessionByWorkoutId,createWorkoutSession,updateWorkoutSession,removeWorkoutSession};
}