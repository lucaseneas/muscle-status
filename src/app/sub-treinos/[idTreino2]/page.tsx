"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Box, Button, Fab, Modal, TextField, Typography } from "@mui/material";

import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';


import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { WorkoutSessionExercise } from "@/types/workoutSessionExercise";
import { useEffect, useState } from "react";
import { useWorkoutSessionExerciseService } from "@/app/services/workoutSessionExercise.serivce";




export default function workNumber({ params, }: { params: { idTreino2: number }; }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [data, setData] = useState<WorkoutSessionExercise[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await useWorkoutSessionExerciseService().findWorkoutSessionExerciseByWorkoutSession(params.idTreino2);
                setData(response);
            }
            catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        }
        fetchData();
    }, []);
    

    return (
        <main className=" h-full">
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
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >

                            <div className="flex items-center gap-5">
                                <Avatar>
                                    H
                                </Avatar>
                                {res.exercise.name}
                            </div>
                        </AccordionSummary>
                        
                        <AccordionDetails>
                            <div className="flex mb-4">
                                <div className="w-3/4">
                                    <h6 className="text-xs">Obs.: DESCRIÇÃO</h6>

                                    <>
                                        <div className="flex gap-4 my-2">

                                            <h2>Série </h2>
                                            <input className="shadow appearance-none border rounded w-14 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Carga" />
                                            <select className="shadow appearance-none border rounded w-10 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                                <option value='0'>Kg</option>
                                                <option value='1'>Lbs</option>
                                                <option value='3'>P</option>
                                            </select>
                                            <input className="shadow appearance-none border rounded w-14 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='number' placeholder="Rep" />
                                        </div>
                                        <h3 className="text-xs">Ultima mudança em DATA</h3>
                                    </>

                                </div>

                                <div className="flex gap-4 pr-2 flex-col w-1/4 justify-center items-end">
                                    <Fab size='medium' color="primary" aria-label="add">
                                        <ContentPasteIcon onClick={handleOpen} />

                                    </Fab>
                                    <Fab size='medium' color="primary" aria-label="edit">
                                        <PublishedWithChangesOutlinedIcon />
                                    </Fab>
                                </div>
                            </div>

                            <TextField
                                id="outlined-multiline-static"
                                label="Observações"
                                fullWidth={true}
                                multiline
                                rows={2}
                                
                            />

                        </AccordionDetails>
                    </Accordion>
                ))}



            </section>

            <Footer></Footer>
        </main >
    )
}