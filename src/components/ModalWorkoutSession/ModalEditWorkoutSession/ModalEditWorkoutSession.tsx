import { useWorkoutSessionService } from "@/app/services/workoutSession.service";
import SlideAlert from "@/components/SlideAlert/SlideAlert";
import { SlideSeverity } from "@/types/slideSeverity";
import { WorkoutSession } from "@/types/workoutSession";
import { Button, MenuItem, Modal, Select, SelectChangeEvent, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

type ModalEditWorkoutSessionProps = {
    state: boolean
    setState: any
    data: WorkoutSession[]
    WorkoutSessionId: number | undefined
}
export default function ModalEditWorkoutSession({ state, setState, data, WorkoutSessionId }: ModalEditWorkoutSessionProps) {

    //Editar Treino
    const [workoutSessionName, setWorkoutSessionName] = useState<string>("");
    const [workoutSessionDescription, setWorkoutSessionDescription] = useState<string>("");

    //Abrir e fechar slider e alert
    const [openOrCloseSlider, setOpenOrCloseSlider] = useState(false);
    const [alertType, setAlertType] = useState<SlideSeverity>();
    const [alertText, setAlertText] = useState<string>("");

    const editWorkout = async (e: FormEvent) => {
        e.preventDefault();

        const editedWorkoutSession = {
            name: workoutSessionName,
            description: workoutSessionDescription
        }

        if (editedWorkoutSession.name == "") {
            editedWorkoutSession.name = workoutSession.name
        }

        if (editedWorkoutSession.description == "") {
            editedWorkoutSession.description = workoutSession.description
        }


        const response = await useWorkoutSessionService().updateWorkoutSession(workoutSession.id , editedWorkoutSession)
        console.log(response)
        if ((response as Response).status === 200) {
            setOpenOrCloseSlider(true);
            setAlertType("success");
            setAlertText("Sessão de treino editada com sucesso !")
        }
        else {
            setOpenOrCloseSlider(true);
            setAlertType("error");
            setAlertText("Ocorreu um erro ao editar a Sessão de treino")
        }
        closeModal();

    }

    //
    const closeModal = () => {
        setworkoutSession("")
        setState(false);
    }



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
                <form className="absolute w-80 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" onSubmit={editWorkout}>

                    <div className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white  w-full px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <h2 className='text-xl text-center mb-5 font-bold'>Editar treino</h2>
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
                                <div id="textFields" className="hidden ">
                                    <h3>Nome:</h3>
                                    <TextField
                                        className="w-full mb-6"
                                        defaultValue={workoutSession?.name}
                                        id="outlined-basic"
                                        variant="outlined"
                                        onChange={(e) => setWorkoutSessionName(e.target.value)}
                                    />
                                    <h3>Descrição:</h3>
                                    <TextField
                                        className="w-full"
                                        defaultValue={workoutSession?.description}
                                        id="outlined-basic"
                                        variant="outlined"
                                        onChange={(e) => setWorkoutSessionDescription(e.target.value)}
                                    />

                                </div>


                            </div>
                        </div>
                        <div className="flex justify-center bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <Button id="btnTextField" className="hidden" type="submit" variant="contained">Editar</Button>
                        </div>

                    </div>
                </form>
            </Modal>
            <SlideAlert open={openOrCloseSlider} setOpen={setOpenOrCloseSlider} alertType={alertType} alertText={alertText}></SlideAlert>
        </>
    )
}