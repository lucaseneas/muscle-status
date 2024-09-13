import { Accordion, AccordionDetails, AccordionSummary, Alert, Avatar, Button, IconButton, Paper, Slide, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Exercise } from "@/types/exercise";
import { WorkoutSessionExercise } from "@/types/workoutSessionExercise";
import { FormEvent, useState } from "react";
import { Session } from "@/types/session";
import { useSession } from "next-auth/react";
import { ExerciseLog } from "@/types/exerciseLog";
import { useExerciseLog } from "@/app/services/exerciseLog.services";
import SlideAlert from "../SlideAlert/SlideAlert";
import { SlideSeverity } from "@/types/slideSeverity";

type ContainerExerciseLogsProps = {
    index: number
    name: string
    exerciseId:number
}




export default function ContainerExerciseLogs({ index, name,exerciseId}: ContainerExerciseLogsProps) {
    const { data: session, status, update } = useSession()
    const sectionId = (session as Session | any)?.id;

    
    const [exerciseLogSet, setExerciseLogSet] = useState<number>(0);
    const [exerciseLogWeight,setExerciseLogWeight] = useState<number>(0);
    const [exerciseLogRepetition,setExerciseLogRepetition] = useState<number>(0);
    const [exerciseLogDescription,setExerciseLogDescription] = useState<string>("");
    
    const addExerciseLog = async (e: FormEvent) => {
        e.preventDefault();
        const selectedExerciseLog:ExerciseLog = {
            weight:exerciseLogWeight,
            setNumber:exerciseLogSet,
            repetition:exerciseLogRepetition,
            description:exerciseLogDescription
        }
        console.log(selectedExerciseLog)
        try{
            const response = await useExerciseLog().create(sectionId,exerciseId,selectedExerciseLog)
            if (response.status === 200) {
                setOpenOrCloseSlider(true)
                setAlertType("success")
                setAlertText("Série cadastrada com sucesso")
                return response
                
            }
            else {
                setOpenOrCloseSlider(true)
                setAlertType("error")
                setAlertText("Ocorreu um erro ao criar a série")
                return response
                
            }
        }
        catch(error){
            setOpenOrCloseSlider(true)
            setAlertType("error")
            setAlertText("Ocorreu um erro interno na criação")
        }
        
    }

    //Abrir e fechar slider e alert
    const [openOrCloseSlider, setOpenOrCloseSlider] = useState(false);
    const [alertType, setAlertType] = useState<SlideSeverity>();
    const [alertText, setAlertText] = useState<string>("");

    return (
        <>
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
                    <form onSubmit={addExerciseLog}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 280 }} size="small" aria-label="simple table">
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell align="center">
                                            <TextField
                                                required
                                                sx={{ width: 40 }}
                                                id="outlined-number"
                                                label="Serie"
                                                type="number"
                                                variant="standard"
                                                onChange={(e)=> setExerciseLogSet(+e.target.value)}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <TextField
                                                required
                                                sx={{ width: 80 }}
                                                id="outlined-number"
                                                label="Peso&nbsp;(Kg)"
                                                type="number"
                                                variant="standard"
                                                inputProps={{ step: "0.1" }} 
                                                onChange={(e)=> setExerciseLogWeight(+e.target.value)}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <TextField
                                                required
                                                sx={{ width: 90 }}
                                                id="outlined-number"
                                                label="Repetições"
                                                type="number"
                                                variant="standard"
                                                onChange={(e)=> setExerciseLogRepetition(+e.target.value)}
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
                                    onChange={(e)=> setExerciseLogDescription(e.target.value)}

                                />
                                <div className=" flex items-center justify-center">
                                    <IconButton type="submit" color="primary" className="rounded-full text-sm bg-primary hover:secondary">
                                        <SaveIcon />
                                        Salvar
                                    </IconButton>
                                </div>

                            </div>
                        </TableContainer>
                        </form>

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
            <SlideAlert open={openOrCloseSlider} setOpen={setOpenOrCloseSlider} alertType={alertType} alertText={alertText}></SlideAlert>
        </>
    )
}