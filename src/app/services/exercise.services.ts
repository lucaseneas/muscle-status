import { httpClient } from "@/http";
import { Exercise } from "@/types/exercise";
import { AxiosResponse } from "axios";

require('dotenv').config();

const baseURL = process.env.NEXT_PUBLIC_BASEURL;
const registerEndPoint = "/exercise";

const url = baseURL + registerEndPoint;

export const useExerciseService = () => {

    const findExercise = async () => {
        const response: AxiosResponse<Exercise[]> = await httpClient.get<Exercise[]>(`${url}`);
        return response.data;
      };

    return {findExercise};
}