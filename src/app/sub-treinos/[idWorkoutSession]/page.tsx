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



export default function workNumber({ params, }: { params: { idWorkoutSession: number }; }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [count, setCount] = React.useState(1);

    const [weight, setWeight] = useState<number>();
    const [repetition, setRepetition] = useState<number>();

    const actions = [
        { icon: <AddIcon />, name: 'Add' },
        { icon: <EditIcon />, name: 'Edit' },
        { icon: <DeleteIcon />, name: 'Remove' },
    ];
    function actionBtn(func: string) {
        if (func == "Add") {
            setOpenAddModal(true)
        }
        if (func == "Edit") {

        }
        if (func == "Remove") {

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

    return (
        <main className="">
            <ModalAddWorkoutSessionExercise state={openAddModal} setState={setOpenAddModal} idWorkoutSession={params.idWorkoutSession}></ModalAddWorkoutSessionExercise>
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

                <form>
                    {data.map((res, index) => (
                        <Accordion className="mx-2 bg-teal-50" key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <div className="flex-col">
                                    <div className="flex items-center gap-5">
                                        <Avatar>
                                            H
                                        </Avatar>
                                        {res.exercise.name}
                                    </div>
                                    <h6 className="text-xs mt-2">Obs.: Descrição do exercicio</h6>
                                </div>


                            </AccordionSummary>

                            <AccordionDetails>
                                <div className="flex flex-col gap-4 ">
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 300 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="left">Série</TableCell>
                                                    <TableCell align="left">Peso</TableCell>
                                                    <TableCell align="left">Repetições</TableCell>
                                                    <TableCell align="left">
                                                    <IconButton color="primary" className=" rounded-full bg-primary hover:secondary">
                                                            <SaveIcon />
                                                    </IconButton>
                                                    </TableCell>

                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow key="1">
                                                    <TableCell align="left">
                                                        <TextField
                                                            sx={{ width: 40 }}
                                                            id="outlined-number"
                                                            label="Serie"
                                                            type="number"
                                                            variant="standard"
                                                        />
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        <TextField
                                                            sx={{ width: 80 }}
                                                            id="outlined-number"
                                                            label="Peso&nbsp;(Kg)"
                                                            type="number"
                                                            variant="standard"
                                                        />
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        <TextField
                                                            sx={{ width: 80 }}
                                                            id="outlined-number"
                                                            label="Repetições"
                                                            type="number"
                                                            variant="standard"
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Observações"
                                        fullWidth={true}
                                        multiline
                                        rows={2}

                                    />
                                    <h6 className="text-sm mt-2">Séries de hoje</h6>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="left">Série</TableCell>
                                                    <TableCell align="left">Peso</TableCell>
                                                    <TableCell align="left">Repetições</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow key="1">
                                                    <TableCell align="left">
                                                        1
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        10
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        12
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow key="2">
                                                    <TableCell align="left">
                                                        2
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        10
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        12
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow key="3">
                                                    <TableCell align="left">
                                                        3
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        10
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        12
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Button>Ver Anteriores</Button>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </form>


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