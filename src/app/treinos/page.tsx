"use client"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Link from "next/link"
import Image from 'next/image'
import { dados } from './../../data';
import { useRouter } from 'next/navigation';

import Button from '@mui/material/Button';
import { Box, Modal, SpeedDial, SpeedDialAction, SpeedDialIcon, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";





const actions = [
    { icon: <AddIcon />, name: 'Add' },
    { icon: <EditIcon />, name: 'Edit' },
    { icon: <DeleteIcon />, name: 'Remove' },
];



export default function homePage() {
    const router = useRouter();
    function actionBtn(func: string) {
        if (func == "Add") {
            handleOpen();

        }
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (


        <main className="h-screen">

            <Header name='Treinos'></Header>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
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
                                            id="outlined-required"
                                            label="Nome do Treino"
                                            defaultValue=""
                                        />
                                        <TextField

                                            id="outlined-required"
                                            label="Descrição"
                                            defaultValue=""
                                        /></div>

                                </Box>
                            </div>
                            <div className="flex justify-center bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                                <Button  variant="contained">Adicionar</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <section className="h-auto">
                <ul role="list" className="divide-y  divide-gray-100">

                    {dados.users.map((res, index) => (
                        <div key={index}>
                            {res.trainingPlan.map((res2, index2) => (
                                <li key={index2} className="flex justify-between gap-x-6 py-6">
                                    <div className="flex pl-4 min-w-0 gap-x-6">
                                        <div className="h-16 w-16 flex-none rounded-full bg-gray-50"><Image src={res2.imgUrl} width={500} height={500} alt="Picture of the author" /></div>
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-gray-900">{res2.name}</p>
                                            <p className="mt-1 truncate text-xs leading-7 text-gray-500">Criado por: {res2.whoCreate} </p>
                                        </div>
                                    </div>
                                    <div className=" w-1/4 flex flex-col items-center mr-4">
                                        <p className="text-xs text-gray-900">Data de criação</p>
                                        <p className="text-sm leading-5 text-gray-900">{res2.creationDate}</p>
                                        <Link href='/treinos/lista'><Button className='!bg-secondary' size="medium" variant="contained">Ver</Button></Link>

                                    </div>
                                </li>
                            ))}
                        </div>
                    ))}

                </ul>
            </section>

            <div className="fixed right-4 bottom-28">
                <SpeedDial
                    
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon  />}
                >
                    {actions.map((action) => (


                        <SpeedDialAction
                            
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => actionBtn(action.name)}>

                        </SpeedDialAction>


                    ))}

                </SpeedDial>
            </div>
            <Footer></Footer>

        </main>

    )
}
