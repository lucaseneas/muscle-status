import { useExerciseService } from "@/app/services/exercise.services";
import { useWorkoutSessionExerciseService } from "@/app/services/workoutSessionExercise.service";
import { Exercise } from "@/types/exercise";
import { Alert, Button, MenuItem, Modal, Select, SelectChangeEvent, Slide, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";

type ModalAddWorkoutSessionExerciseProps = {
    state: boolean
    setState: any
    idWorkoutSession: number
}

export function ModalAddWorkoutSessionExercise({ state, setState, idWorkoutSession }: ModalAddWorkoutSessionExerciseProps) {

    //Abrir e fechar slider e alert
    type Severity = "error" | "success" | "info" | "warning" | undefined;
    const [openOrCloseSlider, setOpenOrCloseSlider] = useState(false);
    const [alertType, setAlertType] = useState<Severity>(undefined);
    const [alertText, setAlertText] = useState<string>("");

    //Capturar data do Exercise
    const [exerciseData, setExerciseData] = useState<Exercise[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await useExerciseService().findExercise();
                setExerciseData(response);
            }
            catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        }
        fetchData();
    }, []);

    //Captura o id do exercicio selecionado
    const [exerciseId, setExerciseId] = useState<number|any>();

    //Exercise value select
    const [exerciseSelectValue,setExerciseSelectValue] = useState<string>('')

    const handleChange = (event: SelectChangeEvent) => {
        setExerciseSelectValue(event.target.value as string);
        setExerciseId(Number(event.target.value))
    };


    //Adicionar nova exercicio
    const addWorkoutSessionExercise = async (e: FormEvent) => {
        e.preventDefault();
        console.log(exerciseId)
        const response = await useWorkoutSessionExerciseService().addWorkoutSessionExercise(idWorkoutSession,exerciseId)
        setState(false);
        if ((response as Response).status === 200) {
            setOpenOrCloseSlider(true)
            setAlertType("success")
            setAlertText("Exercicio inserido com sucesso!")
            return response  
        }
        else {
            setOpenOrCloseSlider(true)
            setAlertType("error")
            setAlertText("Ocorreu um erro inserir o exercicio")
            return response
            
        }
    }

    return (
        <>
            <Modal
                open={state}
                onClose={() => setState(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form className="absolute w-80 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" onSubmit={addWorkoutSessionExercise}>

                    <div className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white  w-full px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <h2 className='text-xl text-center mb-5 font-bold'>Adicionar um exercicio ao seu treino</h2>
                            <div className=" gap-2">
                                <Select
                                    className="w-full"
                                    value={exerciseSelectValue}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 48 * 4.5 + 8,
                                                width: 250,
                                            },
                                        }
                                    }}
                                >
                                    {exerciseData.map((res, index) => (
                                        <MenuItem key={index} value={res.id}>
                                            <em>{res.name}</em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className="flex justify-center bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <Button type="submit" variant="contained">Adicionar</Button>
                        </div>

                    </div>
                </form>
            </Modal>
            
            <div className="flex w-screen justify-center">
                <Slide direction="up" in={openOrCloseSlider} mountOnEnter unmountOnExit>
                    <Alert className="fixed bottom-32 z-50" severity={alertType} onClose={() => setOpenOrCloseSlider(false)}>
                        {alertText}
                    </Alert>
                </Slide>

            </div>
        </>
    )
}