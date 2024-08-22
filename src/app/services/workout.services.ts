import { httpClient } from "@/http";
import { User } from "@/types/user";
import { Workout } from "@/types/workout";
import { Description } from "@mui/icons-material";
import axios, { AxiosResponse } from "axios";
require('dotenv').config();

const baseURL = process.env.NEXT_PUBLIC_BASEURL;
const registerEndPoint = "/workout";

const url = baseURL + registerEndPoint;

export const useWorkoutService = () => {

    const create = async (workout: Workout) => {
        const response: AxiosResponse<User> = await httpClient.post<User>(url, workout);
        return response.data;
    };

    const findWorkoutByIdUser = async (id : number) => {
        const response: AxiosResponse<Workout[]> = await httpClient.get<Workout[]>(`${url}/user/${id}`);
        return response.data;
      };

    const addWorkoutToUser = async (workout: Workout, idUser: number) => {
        try {
            const response = await httpClient.post(`${url}/user/${idUser}`,workout)
            return response;
          }
          catch (error) {
            console.error("Erro ao criar o treino:", error);
            return error;
          }
    }

    const updateWorkout = async (workout: Workout, workoutId: number) => {
      try{
        const response = await httpClient.put(`${url}/${workoutId}`,workout)
        return response;
      }
      catch (error){
        console.error("Erro ao atualizar o treino:", error)
        return error;
      }
    }

    const deleteWorkout = async (workoutId:number) => {
      try{
        const response = await httpClient.delete(`${url}/${workoutId}`);
        return response;
      }
      catch (error){
        console.error("Erro ao deletar o treino:", error)
        return error;
      }
    }

   
    return { create , findWorkoutByIdUser, addWorkoutToUser, updateWorkout, deleteWorkout};
}