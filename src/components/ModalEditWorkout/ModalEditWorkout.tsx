import { Workout } from "@/types/workout"
import { Button, MenuItem, Modal, Select, SelectChangeEvent, TextField } from "@mui/material"
import { useEffect, useState } from "react"

type ModalEditWorkoutProps = {
    state: boolean
    setState: any
    data: Workout[]
}

export default function ModalEditWorkout({ state, setState, data }: ModalEditWorkoutProps) {
    const [workout, setWorkout] = useState<Workout | undefined | any>();


    const handleChange = (event: SelectChangeEvent) => {
        const selectedId = Number(event.target.value);
        const selectedWorkout = data.find(workout => workout.id === selectedId);
        setWorkout(selectedWorkout);
    };

    return (
        <Modal

            open={state}
            onClose={() => setState(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form className="absolute w-80 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" onSubmit={() => console.log}>

                <div className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white  w-full px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <h2 className='text-xl text-center mb-5 font-bold'>Editar treino</h2>
                        <div className="w-full">
                            <Select

                                className="w-full"
                                value={workout}
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
                                <MenuItem value={undefined}>
                                    <em>Selecione o Treino</em>
                                </MenuItem>
                                {data.map((res, index) => (
                                    <MenuItem key={index} value={res.id}>
                                        <em>{res.name}</em>
                                    </MenuItem>
                                ))}
                            </Select>
                            
                            <TextField defaultValue={workout?.name} id="outlined-basic" variant="outlined" />
                            <TextField defaultValue={workout?.description} id="outlined-basic" variant="outlined" />
                        </div>
                    </div>
                    <div className="flex justify-center bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                        <Button type="submit" variant="contained">Adicionar</Button>
                    </div>

                </div>
            </form>
        </Modal>
    )
}