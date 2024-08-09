"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Link from "next/link";
import { Card, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { WorkoutSession } from "@/types/workoutSession";
import { useWorkoutSessionService } from "@/app/services/workoutSession.service";
import { useRouter } from "next/navigation";
import { metadata } from "@/app/metadata";


export default function workoutSession({ params }: { params: { idTreino: number } }) {

    const router = useRouter();

    //Requisição na API
    const [data, setData] = useState<WorkoutSession[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await useWorkoutSessionService().findWorkoutSessionByWorkoutId(params.idTreino);
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
           
            <div className="grid grid-cols-3" >
                {data.map((res, index1) => (
                    <div key={index1}>

                        <button onClick={() => (router.push(`/sub-treinos/${res.id}`))}>
                            <Card className='!bg-secondary h-28 rounded-md p-2 m-4 flex flex-col items-center justify-center hover:scale-1'>
                                <h2 className="font-bold text-xl">Treino &nbsp;{res.name}</h2>
                                <p className="text-xs">{res.description}</p>
                            </Card>
                        </button>
                    </div>
                ))
                }
            </div>

            <Footer></Footer>
        </main>
    )
}