import { useWorkoutSessionExerciseService } from "@/app/services/workoutSessionExercise.service"
import SlideAlert from "@/components/SlideAlert/SlideAlert"
import { SlideSeverity } from "@/types/slideSeverity"
import { WorkoutSessionExercise } from "@/types/workoutSessionExercise"
import { Button, MenuItem, Modal, Select, SelectChangeEvent, TextField } from "@mui/material"
import { useState } from "react"

type ModalRemoveWorkoutSessionExerciseProps = {
    state: boolean
    setState: any
    data: WorkoutSessionExercise[]
}

export default function ModalRemoveWorkoutSessionExercise({state,setState,data}:ModalRemoveWorkoutSessionExerciseProps){
    
    const closeModal = () => {
        setState(false);
    }

    //Remove o Treino
    const removeWorkoutSessionExercise = async () => {
        //e.preventDefault();
        window.location.reload();
        const response = await useWorkoutSessionExerciseService().removeWorkoutSessionExercise(workoutSessionExercise.id);
        if ((response as Response).status === 200) {
            setOpenOrCloseSlider(true);
            setAlertType("success");
            setAlertText("Exercicio removido do treino com sucesso !")
        }
        else {
            setOpenOrCloseSlider(true);
            setAlertType("error");
            setAlertText("Ocorreu um erro ao remover o exercicio do treino")
        }
        closeModal();

    }

    //Abrir e fechar slider e alert
    const [openOrCloseSlider, setOpenOrCloseSlider] = useState(false);
    const [alertType, setAlertType] = useState<SlideSeverity>();
    const [alertText, setAlertText] = useState<string>("");


    //Configurações do Select
    const [workoutSessionExercise, setWorkoutSessionExercise] = useState<WorkoutSessionExercise | any>();
    const handleChange = (event: SelectChangeEvent) => {
        const selectedId = Number(event.target.value);
        const selectedWorkoutSessionExercise = data.find(workoutSessionExercise => workoutSessionExercise.id === selectedId);
        setWorkoutSessionExercise(selectedWorkoutSessionExercise);
        const divSelect = document.querySelector("#select");
        const divTextField = document.querySelector("#textFields");
        const btnTextField = document.querySelector("#btnTextField");

        btnTextField?.classList.remove("hidden");
        divTextField?.classList.remove("hidden");
        divSelect?.classList.add("hidden");
    };

    //Ativar e desativar Child Modal
    const [openChildModal, setOpenChildModal] = useState(false);
    return (
        <>
            <Modal
                open={state}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form className="absolute w-80 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <div className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white  w-full px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <h2 className='text-xl text-center mb-5 font-bold'>Remover treino</h2>
                            <div className=" w-full">
                                <div id="select">
                                    <Select
                                        className="w-full"
                                        value={workoutSessionExercise}
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
                                        {data.map((res, index) => (
                                            <MenuItem key={index} value={res.id}>
                                                <em>{res.exercise.name}</em>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                                <div id="textFields" className="hidden">
                                    <TextField
                                        className="w-full mb-6"
                                        id="standard-read-only-input"
                                        label="Nome"
                                        defaultValue={workoutSessionExercise?.exercise.name}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <Button onClick={() => setOpenChildModal(true)} id="btnTextField" className="hidden" variant="contained">Remover</Button>
                        </div>

                    </div>
                </form>
            </Modal>
            <Modal
                open={openChildModal}
                onClose={() => setOpenChildModal(false)}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <div className="p-4 w-3/4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg">
                    <h2 className=' text-xl text-center mb-5 font-bold'>Deseja realmente remover o exercicio do treino?</h2>
                    <div className="flex justify-around">
                        <Button onClick={() => removeWorkoutSessionExercise()} type="submit" variant="contained">Confirmar</Button>
                        <Button onClick={() => setOpenChildModal(false)} variant="outlined">Cancelar</Button>
                    </div>
                </div>
            </Modal>
            <SlideAlert open={openOrCloseSlider} setOpen={setOpenOrCloseSlider} alertType={alertType} alertText={alertText}></SlideAlert>
        </>
    )
}