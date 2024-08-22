"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Breadcrumbs, Card, Link, Paper, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { WorkoutSession } from "@/types/workoutSession";
import { useWorkoutSessionService } from "@/app/services/workoutSession.service";
import { useRouter } from "next/navigation";
import { metadata } from "@/app/metadata";
import AddEditRemoveBtn from "@/components/AddEditRemoveBtn/AddEditRemoveBtn";
import ModalAddWorkoutSession from "@/components/ModalWorkoutSession/ModalAddWorkoutSession/ModalAddWorkoutSession";
import ModalEditWorkoutSession from "@/components/ModalWorkoutSession/ModalEditWorkoutSession/ModalEditWorkoutSession";
import ModalRemoveWorkoutSession from "@/components/ModalWorkoutSession/ModalRemoveWorkoutSession/ModalRemoveWorkoutSession";


export default function workoutSession({ params }: { params: { idWorkout: number } }) {

    const router = useRouter();

    //Requisição na API
    const [data, setData] = useState<WorkoutSession[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await useWorkoutSessionService().findWorkoutSessionByWorkoutId(params.idWorkout);
                setData(response);
            }
            catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        }
        fetchData();
    }, []);

    //Modal de cadastro
    const [openAddModal, setOpenAddModal] = useState(false);

    //Modal de editar
    const [openEditModal, setOpenEditModal] = useState(false);

    //Modal de remover
    const [openRemoveModal, setOpenRemoveModal] = useState(false);



    return (
        <main className="h-screen">
            <Breadcrumbs className="flex items-center justify-center" aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/treinos">
                    Treinos
                </Link>
                <Typography color="text.primary">Sessões</Typography>
            </Breadcrumbs>
            <ModalAddWorkoutSession state={openAddModal} setState={setOpenAddModal} idWorkout={params.idWorkout} ></ModalAddWorkoutSession>
            <ModalEditWorkoutSession state={openEditModal} setState={setOpenEditModal} data={data} WorkoutSessionId={params.idWorkout}></ModalEditWorkoutSession>
            <ModalRemoveWorkoutSession state={openRemoveModal} setState={setOpenRemoveModal} data={data}></ModalRemoveWorkoutSession>
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
            <AddEditRemoveBtn setOpenAddModal={setOpenAddModal} setOpenEditModal={setOpenEditModal} setOpenRemoveModal={setOpenRemoveModal}></AddEditRemoveBtn>
        </main>
    )
}