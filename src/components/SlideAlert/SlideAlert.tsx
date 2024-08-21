import { SlideSeverity } from "@/types/slideSeverity";
import { Alert, Slide } from "@mui/material";
import { useState } from "react";


type SlideAlertProps = {
    open: boolean
    setOpen : any
    alertType: SlideSeverity
    alertText: string
}

export default function SlideAlert({open,setOpen,alertType, alertText} : SlideAlertProps){

    return(
        <>
            <div className="flex w-screen justify-center">
                <Slide direction="up" in={open} mountOnEnter unmountOnExit>
                    <Alert className="fixed bottom-32 z-50" severity={alertType} onClose={() => setOpen(false)}>
                        {alertText}
                    </Alert>
                </Slide>

            </div>
        </>
    )
}