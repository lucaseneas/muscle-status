import { Accordion, AccordionDetails, AccordionSummary, Alert, Avatar, Button, Icon, IconButton, Paper, Slide, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { Exercise } from "@/types/exercise";
import { WorkoutSessionExercise } from "@/types/workoutSessionExercise";
import { FormEvent, useEffect, useState } from "react";
import { Session } from "@/types/session";
import { useSession } from "next-auth/react";
import { ExerciseLog } from "@/types/exerciseLog";
import { useExerciseLog } from "@/app/services/exerciseLog.services";
import SlideAlert from "../SlideAlert/SlideAlert";
import { SlideSeverity } from "@/types/slideSeverity";
import { useWorkoutService } from "@/app/services/workout.services";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

type ContainerExerciseLogsProps = {
    index: number
    name: string
    exerciseId: number
}




export default function ContainerExerciseLogs({ index, name, exerciseId }: ContainerExerciseLogsProps) {
    const { data: session, status, update } = useSession()
    const sectionId = (session as Session | any)?.id;


    const [exerciseLogSet, setExerciseLogSet] = useState<number>(0);
    const [exerciseLogWeight, setExerciseLogWeight] = useState<number>(0);
    const [exerciseLogRepetition, setExerciseLogRepetition] = useState<number>(0);
    const [exerciseLogDescription, setExerciseLogDescription] = useState<string>("");

    //Requisição na API para adicionar exercise log
    const addExerciseLog = async (e: FormEvent) => {
        e.preventDefault();
        const selectedExerciseLog: ExerciseLog = {
            weight: exerciseLogWeight,
            setNumber: exerciseLogSet,
            repetition: exerciseLogRepetition,
            description: exerciseLogDescription
        }
        console.log(selectedExerciseLog)
        try {
            const response = await useExerciseLog().create(sectionId, exerciseId, selectedExerciseLog)
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
        catch (error) {
            setOpenOrCloseSlider(true)
            setAlertType("error")
            setAlertText("Ocorreu um erro interno na criação")
        }

    }

    //Requisição na API para remover exercise log
    const [selectedLog, setSelectedLog] = useState<ExerciseLog | null>(null);
    const removeExerciseLog = async () => {
        try {
            if (!selectedLog) {
                throw new Error("Nenhum registro selecionado para remoção.");
            }
            const response = await useExerciseLog().deleteExerciseLog(selectedLog.id as number)
            if (response === 200) {
                setOpenOrCloseSlider(true)
                setAlertType("success")
                setAlertText("Série removida com sucesso")
                return response
            }
            else {
                setOpenOrCloseSlider(true)
                setAlertType("error")
                setAlertText("Ocorreu um erro ao remover a série")
                return response
            }
        }
        catch (error) {
            setOpenOrCloseSlider(true)
            setAlertType("error")
            setAlertText("Ocorreu um erro interno na remoção")
        }
    }
    //Requisição na API get exercise logs
    const [data, setData] = useState<ExerciseLog[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (sectionId !== undefined) {
                    const response = await useExerciseLog().findByUserIdAndExerciseIdAndDate(sectionId, exerciseId, new Date().toISOString());
                    setData(Array.isArray(response.data) ? response.data : [response.data]);

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
    }, [session]);

    //Requisição get exercise logs por userId e exerciseId
    const [exerciseLogsHistory, setExerciseLogsHistory] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (session != undefined) {
                    const response = await useExerciseLog().findByUserIdAndExerciseId(sectionId, exerciseId)
                    console.log("response", response);
                    setExerciseLogsHistory(response);
                    //setExerciseLogsHistory(Array.isArray(response.data) ? response.data : [response.data]);
                }
                else {
                    console.log("Não foi localizado Id de usuario")
                }
            }
            catch (error) {
                console.error('Erro ao buscar dados', error)
            }
        }
        fetchData();
    }, [session])

    //Abrir e fechar slider e alert
    const [openOrCloseSlider, setOpenOrCloseSlider] = useState(false);
    const [alertType, setAlertType] = useState<SlideSeverity>();
    const [alertText, setAlertText] = useState<string>("");

    //Abrir e fehcar modal de romover exercise log
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //Abrir e fechar modal do historico de exercise logs
    const [openModalHistory, setOpenModalHistory] = useState(false);
    const handleOpenHistory = () => setOpenModalHistory(true);
    const handleCloseHistory = () => setOpenModalHistory(false);

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
                                                    onChange={(e) => setExerciseLogSet(+e.target.value)}
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
                                                    onChange={(e) => setExerciseLogWeight(+e.target.value)}
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
                                                    onChange={(e) => setExerciseLogRepetition(+e.target.value)}
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
                                        onChange={(e) => setExerciseLogDescription(e.target.value)}

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
                            <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Série</TableCell>
                                        <TableCell align="center">Peso</TableCell>
                                        <TableCell align="center">Repetições</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((res, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="center">
                                                {res.setNumber}
                                            </TableCell>
                                            <TableCell align="center">
                                                {res.weight}
                                            </TableCell>
                                            <TableCell align="center">
                                                {res.repetition}
                                            </TableCell>
                                            <TableCell align="center">
                                                <IconButton onClick={() => { setSelectedLog(res); handleOpen() }} size="small" color="primary" className="rounded-full  hover:secondary">
                                                    <DeleteIcon fontSize="inherit" />
                                                </IconButton>
                                            </TableCell>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <div className="bg-white p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                    <h2 id="modal-modal-title">Deseja remover o registro?</h2>
                                                    <Button onClick={() => {
                                                        removeExerciseLog();
                                                        handleClose();
                                                    }
                                                    }
                                                        size="small" color="primary" className="bg-primary rounded-full  hover:secondary">
                                                        Sim
                                                    </Button>
                                                    <Button onClick={() => handleClose()} size="small" color="primary" className="rounded-full  hover:secondary">
                                                        Não
                                                    </Button>
                                                </div>
                                            </Modal>

                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        <Button onClick={() => handleOpenHistory()}>Ver Anteriores</Button>
                        <Modal open={openModalHistory}
                            onClose={handleCloseHistory}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description">
                            <div className="p-4 max-h-[80vh] overflow-auto">
                            {exerciseLogsHistory?.map((res, index) => (
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography component="span">{res}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">Série</TableCell>
                                                    <TableCell align="center">Peso</TableCell>
                                                    <TableCell align="center">Repetições</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell align="center">
                                                        2
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        42
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        11
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <IconButton size="small" color="primary" className="rounded-full  hover:secondary">
                                                            <DeleteIcon fontSize="inherit" />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                            </div>
                        </Modal>
                    </div>
                </AccordionDetails>
            </Accordion>
            <SlideAlert open={openOrCloseSlider} setOpen={setOpenOrCloseSlider} alertType={alertType} alertText={alertText}></SlideAlert>
        </>
    )
}