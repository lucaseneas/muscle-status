"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Link from "next/link";
import { dados } from "../../../data";
import { Card, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { WorkoutSession } from "@/types/WorkoutSession";
import { useWorkoutSessionService } from "@/app/services/workoutSession.service";


export default function workout() {

    const [data, setData] = useState<WorkoutSession[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                    const response = await useWorkoutSessionService().findWorkoutSessionByWorkoutId(1);
                    setData(response);
            }
            catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        }
        fetchData();
    }, []);

    return (
        <main className="h-screen">
            <Header name='Treinos'></Header>



            {dados.users.map((res, index1) => (
                <div  key={index1}>
                    {res.trainingPlan.map((res2, index2) => (
                        <div className="grid grid-cols-3" key={index2}>
                            {res2.workouts.map((res3, index3) => (
                                <Link key={index3} href={`/treinos/lista/${res3.letter}`}>
                                    <Card className='!bg-secondary h-28 rounded-md p-2 m-4 flex flex-col items-center justify-center hover:scale-1'>
                                        <h2 className="font-bold text-xl">Treino&nbsp;{res3.letter}</h2>
                                        <p className="text-xs">{res3.description}</p>
                                    </Card>




                                </Link>
                            ))}

                        </div>
                    ))}
                </div>
            ))
            }


            <Footer></Footer>
        </main>
    )
}