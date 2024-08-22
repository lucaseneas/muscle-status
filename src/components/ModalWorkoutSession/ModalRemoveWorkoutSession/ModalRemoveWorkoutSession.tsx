import { useWorkoutSessionService } from "@/app/services/workoutSession.service"
import SlideAlert from "@/components/SlideAlert/SlideAlert"
import { SlideSeverity } from "@/types/slideSeverity"
import { WorkoutSession } from "@/types/workoutSession"
import { Button, MenuItem, Modal, Select, SelectChangeEvent, TextField } from "@mui/material"
import { FormEvent, useState } from "react"

type ModalRemoveWorkoutSessionProps = {
    state: boolean
    setState: any
    data: WorkoutSession[]
}

export default function ModalRemoveWorkoutSession({ state, setState, data }: ModalRemoveWorkoutSessionProps){
    
    const closeModal = () => {
        setState(false);
    }
    //Remove o Treino
    const removeWorkoutSession = async (e:FormEvent) =>{
        e.preventDefault();
        const response = await useWorkoutSessionService().removeWorkoutSession(workoutSession.id);
        if((response as Response).status === 200){
            setOpenOrCloseSlider(true);
            setAlertType("success");
            setAlertText("Sessão de treino removida com sucesso !")
        }
        else{
            setOpenOrCloseSlider(true);
            setAlertType("error");
            setAlertText("Ocorreu um erro ao remover a sessão de treino")
        }
        closeModal();
        
    }

    //Abrir e fechar slider e alert
    const [openOrCloseSlider, setOpenOrCloseSlider] = useState(false);
    const [alertType, setAlertType] = useState<SlideSeverity>();
    const [alertText, setAlertText] = useState<string>("");


    //Configurações do Select
    const [workoutSession, setworkoutSession] = useState<WorkoutSession | any>();
    const handleChange = (event: SelectChangeEvent) => {
        const selectedId = Number(event.target.value);
        const selectedWorkoutSession = data.find(workoutSession => workoutSession.id === selectedId);
        setworkoutSession(selectedWorkoutSession);
        const divSelect = document.querySelector("#select");
        const divTextField = document.querySelector("#textFields");
        const btnTextField = document.querySelector("#btnTextField");

        btnTextField?.classList.remove("hidden");
        divTextField?.classList.remove("hidden");
        divSelect?.classList.add("hidden");
    };

    return (
        <>
            <Modal
                open={state}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form className="absolute w-80 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" onSubmit={removeWorkoutSession}>
                    <div className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white  w-full px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <h2 className='text-xl text-center mb-5 font-bold'>Remover treino</h2>
                            <div className=" w-full">
                                <div id="select">
                                    <Select
                                        className="w-full"
                                        value={workoutSession}
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
                                                <em>{res.name}</em>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                                <div id="textFields" className="hidden">
                                    <TextField
                                        className="w-full mb-6"
                                        id="standard-read-only-input"
                                        label="Nome"
                                        defaultValue={workoutSession?.name}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                    <TextField
                                        className="w-full"
                                        id="standard-read-only-input"
                                        label="Descrição"
                                        defaultValue={workoutSession?.description}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />

                                </div>


                            </div>
                        </div>
                        <div className="flex justify-center bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <Button id="btnTextField" className="hidden" type="submit" variant="contained">Remover</Button>
                        </div>

                    </div>
                </form>
            </Modal>
            <SlideAlert open={openOrCloseSlider} setOpen={setOpenOrCloseSlider} alertType={alertType} alertText={alertText}></SlideAlert>
        </>
    )
}