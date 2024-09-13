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

    return {create}
}