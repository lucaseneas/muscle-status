import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
    const [value, setValue] = useState(0);
    return (
        <>
            <footer className="bg-primary  fixed bottom-0 w-screen h-16 flex items-center justify-center text-secondary">
            <BottomNavigation
                className="bg-primary w-full"
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction className="text-secondary hover:scale-110 hover:text-secondary active:text-secondary active:scale-110" label="Treinos" icon={<img className="h-3/6" src='https://img.icons8.com/?size=100&id=25784&format=png&color=00C2CB' />} />
                <BottomNavigationAction className="text-secondary hover:scale-110 hover:text-secondary active:text-secondary active:scale-110"  label="Social" icon={<img className="h-3/6" src='https://img.icons8.com/?size=100&id=123782&format=png&color=00C2CB' />} />
                <BottomNavigationAction className="text-secondary hover:scale-110 hover:text-secondary active:text-secondary active:scale-110"  label="Home" icon={<img className="h-3/6" src='https://img.icons8.com/?size=100&id=14096&format=png&color=00C2CB' />} />
            </BottomNavigation>
            {
                /*

                <div className="w-1/3 h-full flex flex-col items-center justify-center ">
                    <div className="h-full w-20 hover:brightness-150 focus:brightness-150 bg-primary rounded-full flex flex-col items-center justify-center ">
                        <img className="h-3/6" src='https://img.icons8.com/?size=100&id=123782&format=png&color=00C2CB' />
                        <p>Amigos</p>
                    </div>
                </div>
                <div className="w-1/3  h-full flex flex-col items-center justify-center ">
                    <div className="h-24 mb-8 w-24 hover:brightness-150 focus:brightness-150 bg-primary rounded-full flex flex-col items-center justify-center ">
                        <img className="h-3/6" src='https://img.icons8.com/?size=100&id=25784&format=png&color=00C2CB' />
                        <p>Treinos</p>
                    </div>
                </div>
                <div className="w-1/3 h-full flex flex-col items-center justify-center ">
                    <div className="h-full shadow w-20 hover:brightness-150 focus:brightness-150 bg-primary rounded-full flex flex-col items-center justify-center ">
                        <img className="h-3/6" src='https://img.icons8.com/?size=100&id=14096&format=png&color=00C2CB' />
                        <p>Home</p>
                    </div>
                </div>
            
                 */
            }
        </footer >
        </>
    )
}