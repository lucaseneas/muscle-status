"use client"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Link from "next/link"
import Image from 'next/image'

import { usePathname, useRouter } from 'next/navigation';
import { getSession, useSession } from "next-auth/react";
import { useWorkoutService } from "../services/workout.services"

import Button from '@mui/material/Button';
import { Alert, Box, Breadcrumbs, Chip, Collapse, emphasize, Modal, Slide, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, styled, TextField, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { FormEvent, Suspense, useEffect, useState } from "react";
import { Workout } from "@/types/workout"
import { Session } from "@/types/session"
import { metadata } from "../metadata"
import { Router } from "next/router"
import Link2 from '@mui/material/Link';
import Loading from "@/components/Loading/Loading"
import { Description } from "@mui/icons-material"
import { fetchData } from "next-auth/client/_utils"
import ModalEditWorkout from "@/components/ModalWorkout/ModalEditWorkout/ModalEditWorkout"
import { ModalAddWorkout } from "@/components/ModalWorkout/ModalAddWorkout/ModalAddWorkout"
import ModalRemoveWorkout from "@/components/ModalWorkout/ModalRemoveWorkout/ModalRemoveWorkout"
import { revalidatePath } from "next/cache"


metadata.pageTitle = "Treinos"



const actions = [
    { icon: <AddIcon />, name: 'Add' },
    { icon: <EditIcon />, name: 'Edit' },
    { icon: <DeleteIcon />, name: 'Remove' },
];



export default function workout() {
    const { data: session, status, update } = useSession()
    const sectionId = (session as Session)?.id;
    const router = useRouter();

    //Modal de cadastro
    const [openAddModal, setOpenAddModal] = useState(false);

    //Modal de editar
    const [openEditModal, setOpenEditModal] = useState(false);

    //Modal de remover
    const [openRemoveModal, setOpenRemoveModal] = useState(false);

    function actionBtn(func: string) {
        if (func == "Add") {
            setOpenAddModal(true);
        }
        if (func == "Edit") {
            setOpenEditModal(true);
        }
        if (func == "Remove"){
            setOpenRemoveModal(true);
        }
    }
    const handleNavigation = (id: number) => {
        router.push(`./treinos/${id}`);
    };


    //Requisição na API
    const [data, setData] = useState<Workout[]>([]);
    useEffect(() => {
        if (session != undefined) {
            const fetchData = async () => {
                try {
                    if (sectionId !== undefined) {
                        const response = await useWorkoutService().findWorkoutByIdUser(sectionId);
                        setData(response);

                    }
                    else {
                        console.log("Não foi localizado o Id de usuario")
                    }

                }
                catch (error) {
                    console.error('Erro ao buscar dados', error);
                }
            }
            fetchData();
        }
        

    }, [session]);
    

    return (
        <main title="Treinos" className="">
            <ModalAddWorkout state={openAddModal} setState={setOpenAddModal} sectionId={sectionId}></ModalAddWorkout>
            <ModalEditWorkout state={openEditModal} setState={setOpenEditModal} data={data} sectionId={sectionId}></ModalEditWorkout>
            <ModalRemoveWorkout state={openRemoveModal} setState={setOpenRemoveModal} data={data} ></ModalRemoveWorkout>
            <Breadcrumbs className="relative left-1/2 -translate-x-1/2 " aria-label="breadcrumb">
                <Link2 underline="hover" color="inherit" href="/treinos">
                    Treinos
                </Link2>
                <Typography color="text.primary">Sessões</Typography>
            </Breadcrumbs>
            <section className="h-auto">

                <ul role="list" className="divide-y  divide-gray-100">
                    {data.map((res, index) => (
                        <div key={index}>
                            <li className="flex justify-between gap-x-6 py-6">
                                <div className="flex pl-4 min-w-0 gap-x-6">
                                    {(!res.name) ? (
                                        <div className="h-16 w-16 flex-none rounded-full bg-gray-50"><Image src="" width={500} height={500} alt="Picture of the author" /></div>
                                    ) : (
                                        <div className="h-16 w-16 flex-none rounded-full bg-gray-50"><Image src="https://img.icons8.com/?size=100&id=sjh9Yrj8v34Y&format=png&color=000000" width={500} height={500} alt="Picture of the author" /></div>
                                    )}
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{res.name}</p>
                                        <p className="mt-1 truncate text-xs leading-7 text-gray-500">Criado por: {res.description}</p>
                                    </div>
                                </div>
                                <div className=" w-1/4 flex flex-col items-center mr-4">
                                    <p className="text-xs text-gray-900">Data de criação</p>
                                    <p className="text-sm leading-5 text-gray-900"></p>
                                    {res.id !== undefined && res.id !== null && (
                                        <Button onClick={() => {
                                            handleNavigation(res.id as number)

                                        }}  size="medium" variant="contained">Ver</Button>
                                    )}
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>
            </section>
            <div className="fixed right-4 bottom-28">
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => actionBtn(action.name)}>
                        </SpeedDialAction>
                    ))}
                </SpeedDial>
            </div>
        </main>
    )
}
