import { Alert, Button, Modal, Slide, TextField } from "@mui/material";
import { useState } from "react";

type ModalAddWorkoutSession = {
    state: boolean
    setState: any
}

export default function ModalAddWorkoutSession({state,setState}:ModalAddWorkoutSession){
     //Abrir e fechar slider e alert
     type Severity = "error" | "success" | "info" | "warning" | undefined;
     const [openOrCloseSlider, setOpenOrCloseSlider] = useState(false);
     const [alertType, setAlertType] = useState<Severity>(undefined);
     const [alertText, setAlertText] = useState<string>("");
    return(
        <>
            <Modal
                open={state}
                onClose={() => setState(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form className="absolute w-80 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" onSubmit={()=>{}}>

                    <div className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white  w-full px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <h2 className='text-xl text-center mb-5 font-bold'>Adicionar novo treino</h2>
                            <div className=" gap-2">
                                <TextField
                                    className="w-full mb-6"
                                    required
                                    onChange={()=>{}}
                                    id="outlined-required"
                                    label="Nome do Treino"
                                />
                                <TextField
                                className="w-full"
                                    id="outlined-required"
                                    onChange={()=>{}}
                                    label="Descrição"
                                /></div>

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