import { AppBar, BottomNavigation, BottomNavigationAction, Link } from "@mui/material";
import { useState } from "react";

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
    const [value, setValue] = useState(0);
    return (
        <>
            <footer className="sticky bottom-0 bg-primary w-screen h-16 flex items-center justify-center text-secondary">
                <BottomNavigation
                    className="bg-primary w-full"
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction className="text-secondary hover:scale-110 hover:text-secondary active:text-secondary active:scale-110" label="Social" icon={<img className="h-3/6" src='https://img.icons8.com/?size=100&id=123782&format=png&color=00C2CB' />} />
                    <BottomNavigationAction href="/treinos" className="text-secondary hover:scale-110 hover:text-secondary active:text-secondary active:scale-110" label="Treinos" icon={<img className="h-3/6" src='https://img.icons8.com/?size=100&id=25784&format=png&color=00C2CB' />} />
                    <BottomNavigationAction className="text-secondary hover:scale-110 hover:text-secondary active:text-secondary active:scale-110" label="Home" icon={<img className="h-3/6" src='https://img.icons8.com/?size=100&id=14096&format=png&color=00C2CB' />} />
                </BottomNavigation>
            </footer >
        </>
    )
}