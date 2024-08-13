"use client"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Link from "next/link"
import Image from 'next/image'

import { usePathname, useRouter } from 'next/navigation';
import { getSession, useSession } from "next-auth/react";
import { useWorkoutService } from "../services/workout.services"

import Button from '@mui/material/Button';
import { Alert, Box, Breadcrumbs, Chip, Collapse, emphasize, Modal, SpeedDial, SpeedDialAction, SpeedDialIcon, styled, TextField, Typography } from "@mui/material";
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
import ModalAddWorkout from "@/components/ModalAddWorkout/ModalAddWorkout"


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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const pathname = usePathname();

    const [workoutName, setWorkoutName] = useState<string>();
    const [workoutDescription, setWorkoutDescription] = useState<string>();

    function actionBtn(func: string) {
        if (func == "Add") {
            handleOpen();
        }
    }
    const handleNavigation = (id: number) => {
        router.push(`./treinos/${id}`);
    };

    const handleAddNewWorkout = async (e: FormEvent) => {
        e.preventDefault();
        const workout = {
            name: workoutName,
            description: workoutDescription
        }
        handleClose();
        if (sectionId !== undefined) {
            return useWorkoutService().addWorkoutToUser(workout, sectionId)
        }
        else {
            console.log("Erro ao adicionar treino não foi localizado o id")
        }

    }

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
        <main title="Treinos" className="h-screen">
            <Breadcrumbs className="flex items-center justify-center" aria-label="breadcrumb">
                <Link2 underline="hover" color="inherit" href="#">
                    Treinos
                </Link2>
                <Link2 underline="hover" color="inherit" href="#">
                    Catalog
                </Link2>
                <Typography color="text.primary">Belts</Typography>
            </Breadcrumbs>
            
            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleAddNewWorkout}>
                    <div className=" flex items-center justify-center overflow-y-auto">
                        <div className="flex min-h-full w-full items-end justify-center p-4 text-center sm:items-center">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <h2 className='text-xl mb-5 font-bold'>Adicionar novo treino</h2>
                                        <div className="flex">
                                            <TextField
                                                required
                                                onChange={(e) => setWorkoutName(e.target.value)}
                                                id="outlined-required"
                                                label="Nome do Treino"
                                                defaultValue=""
                                            />
                                            <TextField
                                                id="outlined-required"
                                                onChange={(e) => setWorkoutDescription(e.target.value)}
                                                label="Descrição"
                                                defaultValue=""
                                            /></div>
                                    </Box>
                                </div>
                                <div className="flex justify-center bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <Button type="submit" variant="contained">Adicionar</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
            */}
            <ModalAddWorkout openOrCLose={open}></ModalAddWorkout>
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
                                        <Button onClick={() => handleNavigation(res.id as number)} className='!bg-secondary' size="medium" variant="contained">Ver</Button>
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
            <Footer></Footer>
        </main>
    )
}
