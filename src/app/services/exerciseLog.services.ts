import { httpClient } from "@/http";
import { User } from "@/types/user";
import { ExerciseLog } from "@/types/exerciseLog";
import { Description } from "@mui/icons-material";
import axios, { AxiosResponse } from "axios";
require('dotenv').config();

const baseURL = process.env.NEXT_PUBLIC_BASEURL;
const registerEndPoint = "/exercise-log";

const url = baseURL + registerEndPoint;

export const useExerciseLog = () => {

    const create = async (userId:number, exerciseId:number, ExerciseLog: ExerciseLog) => {
        const response: AxiosResponse<ExerciseLog> = await httpClient.post<ExerciseLog>(url+`/user-id/${userId}/exercise-id/${exerciseId}`, ExerciseLog);
        return response;
    };

    const findByUserIdAndExerciseIdAndDate = async (userId:number, exerciseId:number, date: string) => {
        const response: AxiosResponse<ExerciseLog> = await httpClient.get<ExerciseLog>(url+`/user-id/${userId}/exercise-id/${exerciseId}/date/${date}`);
        return response;
    }

    const findByUserIdAndExerciseId = async (userid:number, exerciseId:number) => {
      const response: AxiosResponse<ExerciseLog> = await httpClient.get<ExerciseLog>(url+`/user-id/${userid}/exercise-id/${exerciseId}`);
      const a: Date[] = response.data.map((item: any) => item.log_date.split('T')[0]);
      const set = new Set(a);
      const array = [...set];
      return array;
    }

    const deleteExerciseLog = async (exerciseLogId:number) => {
      try{
        console.log(exerciseLogId);
        const response = await httpClient.delete(`${url}/id/${exerciseLogId}`);    
        return response.status;
      }
        catch (error){
        console.error("Erro ao deletar o registro de exercício:", error)
        return error;
      } 
    }
    return {create,findByUserIdAndExerciseIdAndDate,deleteExerciseLog,findByUserIdAndExerciseId}
}