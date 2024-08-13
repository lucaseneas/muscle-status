import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";

type ModalAddWorkoutProps = {
    openOrCLose : boolean
}

export default function ModalAddWorkout({openOrCLose}:ModalAddWorkoutProps) {
    const [workoutName, setWorkoutName] = useState<string>();
    const [workoutDescription, setWorkoutDescription] = useState<string>();
    const [open, setOpenOrCLose] = useState(openOrCLose);

    useEffect(() => {
        setOpenOrCLose(openOrCLose);
    }, [openOrCLose]);

    const handleClose = () => {
        setOpenOrCLose(false);
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form onSubmit={handleClose}>
                <div className=" flex items-center justify-center overflow-y-auto">
                    <div className="flex min-h-full w-full items-end justify-center p-4 text-center sm:items-center">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <h2 className='text-xl mb-5 font-bold'>Adicionar novo treino</h2>
                                    <div className="flex">
                                        <TextField
                                            required
                                            onChange={(e) => setWorkoutName(e.target.value)}
                                            id="outlined-required"
                                            label="Nome do Treino"
                                            defaultValue=""
                                        />
                                        <TextField
                                            id="outlined-required"
                                            onChange={(e) => setWorkoutDescription(e.target.value)}
                                            label="Descrição"
                                            defaultValue=""
                                        /></div>
                                </Box>
                            </div>
                            <div className="flex justify-center bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <Button type="submit" variant="contained">Adicionar</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}