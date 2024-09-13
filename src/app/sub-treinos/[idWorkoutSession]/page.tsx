"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Paper, SpeedDial, SpeedDialAction, SpeedDialIcon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";

import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import SaveIcon from '@mui/icons-material/Save';


import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { WorkoutSessionExercise } from "@/types/workoutSessionExercise";
import { FormEvent, useEffect, useState } from "react";
import { useWorkoutSessionExerciseService } from "@/app/services/workoutSessionExercise.service";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { ModalAddWorkoutSessionExercise } from "@/components/ModalWorkoutSessionExercise/ModalAddWorkoutSessionExercise/ModalAddWorkoutSessionExercise";
import ModalEditWorkoutSessionExercise from "@/components/ModalWorkoutSessionExercise/ModalEditWorkoutSessionExercise/ModalEditWorkoutSessionExercise";
import ModalRemoveWorkoutSessionExercise from "@/components/ModalWorkoutSessionExercise/ModalRemoveWorkoutSessionExercise/ModalRemoveWokoutSessionExercise";
import ContainerExerciseLogs from "@/components/ContainerExerciseLogs/ContainerExerciseLogs";
import { useSession } from "next-auth/react";
import { Session } from "@/types/session";




export default function workNumber({ params, }: { params: { idWorkoutSession: number }; }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    

    const actions = [
        { icon: <AddIcon />, name: 'Add' },
        { icon: <DeleteIcon />, name: 'Remove' },
    ];
    function actionBtn(func: string) {
        if (func == "Add") {
            setOpenAddModal(true)
        }
        if (func == "Remove") {
            setRemoveModal(true)
        }
    }

    const createLog = async (e: FormEvent) => {
        e.preventDefault();
        const resp = await signIn('credentials', {
            redirect: false,
            email: email,
            password: password,
        });

        if (resp!.ok) {
            router.push("./treinos")
            localStorage.setItem("teste", "teste");
        }
        else {
            const error = resp?.error;
            setOpen(true)
        }
    };


    //Consulta na API
    const [data, setData] = useState<WorkoutSessionExercise[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await useWorkoutSessionExerciseService().findWorkoutSessionExerciseByWorkoutSession(params.idWorkoutSession);
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
    const [openRemoveModal, setRemoveModal] = useState(false);

    return (
        <main className="">
            <ModalAddWorkoutSessionExercise state={openAddModal} setState={setOpenAddModal} idWorkoutSession={params.idWorkoutSession}></ModalAddWorkoutSessionExercise>
            <ModalRemoveWorkoutSessionExercise state={openRemoveModal} setState={setRemoveModal} data={data}></ModalRemoveWorkoutSessionExercise>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <div className=" flex items-center justify-center w-screen overflow-y-auto">
                    <div className="flex items-end justify-center w-screen text-center">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full">
                            <div className="bg-white m-3 ">
                                <h3 className="font-bold">Historico de Treino</h3>
                                <h3 className="font-semibold">Supino Reto</h3>
                                <Timeline position="alternate">
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            <p className="text-sm">24/05/2024</p>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <p>Academia Gaviões</p>
                                            <p className="text-xs">Série 1 30kg 12rep</p>
                                            <p className="text-xs">Série 1 30kg 12rep</p>
                                            <p className="text-xs">Série 1 30kg 12rep</p>
                                            <p className="text-xs">Série 2 30kg 12rep+5</p>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            <p className="text-sm">24/05/2024</p>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <p>Academia Gaviões</p>
                                            <p className="text-xs">Série 1 30kg 12rep</p>
                                            <p className="text-xs">Série 1 30kg 12rep</p>
                                            <p className="text-xs">Série 1 30kg 12rep</p>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            <p className="text-sm">24/05/2024</p>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <p className="text-sm">Academia Gaviões</p>
                                            <p className="text-xs">Série 1 30kg 12rep</p>
                                            <p className="text-xs">Série 1 30kg 12rep</p>
                                            <p className="text-xs">Série 1 30kg 12rep</p>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 w-full flex items-center justify-center">
                                <Button onClick={handleClose} variant="contained">Voltar</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <section className="my-2 h-full">
                {data.map((res, index) => (
                    <ContainerExerciseLogs 
                    name={res.exercise.name} 
                    index={index}
                    exerciseId={res.exercise.id}
                    >

                    </ContainerExerciseLogs>
                ))}
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
        </main >
    )
}