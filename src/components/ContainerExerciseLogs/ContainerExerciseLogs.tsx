import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Exercise } from "@/types/exercise";
import { WorkoutSessionExercise } from "@/types/workoutSessionExercise";
import { FormEvent, useState } from "react";
import { Session } from "@/types/session";
import { useSession } from "next-auth/react";

type ContainerExerciseLogsProps = {
    index: number
    name: string
    idWorkoutSession:number
}




export default function ContainerExerciseLogs({ index, name,idWorkoutSession}: ContainerExerciseLogsProps) {
    const { data: session, status, update } = useSession()
    const sectionId = (session as Session)?.id;

    
    const [exerciseLogSet, setExerciseLogSet] = useState("");
    const [exerciseLogWeight,setExerciseLogWeight] = useState("");
    const [exerciseLogRepetition,setExerciseLogRepetition] = useState("");
    const addExerciseLog = async (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <><form onSubmit={addExerciseLog}>
            <Accordion className="mx-2 bg-gray-200" key={index}>
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
                            {name}
                        </div>
                        <h6 className="text-xs mt-2">Obs.: Descrição do exercicio</h6>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex flex-col gap-4 ">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 280 }} size="small" aria-label="simple table">
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell align="center">
                                            <TextField
                                                sx={{ width: 40 }}
                                                id="outlined-number"
                                                label="Serie"
                                                type="number"
                                                variant="standard"
                                                onChange={(e)=> setExerciseLogSet(e.target.value)}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <TextField
                                                sx={{ width: 80 }}
                                                id="outlined-number"
                                                label="Peso&nbsp;(Kg)"
                                                type="number"
                                                variant="standard"
                                                onChange={(e)=> setExerciseLogWeight(e.target.value)}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <TextField
                                                sx={{ width: 90 }}
                                                id="outlined-number"
                                                label="Repetições"
                                                type="number"
                                                variant="standard"
                                                onChange={(e)=> setExerciseLogRepetition(e.target.value)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <div className="flex-col justify-center items-center mt-2 mb-2">
                                <TextField
                                    className="p-2"
                                    id="outlined-multiline-static"
                                    label="Observações"
                                    fullWidth={true}
                                    multiline
                                    rows={1}

                                />
                                <div className=" flex items-center justify-center">
                                    <IconButton type="submit" color="primary" className="rounded-full text-sm bg-primary hover:secondary">
                                        <SaveIcon />
                                        Salvar
                                    </IconButton>
                                </div>

                            </div>
                        </TableContainer>


                        <h6 className="text-sm mt-2">Séries de hoje</h6>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Série</TableCell>
                                        <TableCell align="center">Peso</TableCell>
                                        <TableCell align="center">Repetições</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell align="center">
                                            1
                                        </TableCell>
                                        <TableCell align="center">
                                            10
                                        </TableCell>
                                        <TableCell align="center">
                                            12
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell align="center">
                                            2
                                        </TableCell>
                                        <TableCell align="center">
                                            10
                                        </TableCell>
                                        <TableCell align="center">
                                            12
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell align="center">
                                            3
                                        </TableCell>
                                        <TableCell align="center">
                                            10
                                        </TableCell>
                                        <TableCell align="center">
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
            </form>
        </>
    )
}