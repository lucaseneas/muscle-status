import { AppBar, Avatar, Box, Breadcrumbs, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material"
import { signOut } from "next-auth/react"

import Image from 'next/image'
import { useRouter } from "next/navigation"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, useState } from "react"
import logo from "./../../../public/images/mainIcon.png";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

type HeaderProps = {
    name: string
    btnLeft?: boolean
    btnRight?: boolean
}

const pages = ['Products', 'Pricing', 'Blog'];
const settings = [
    {
        name: "Profile",
        function: undefined
    },
    {
        name: "Logout",
        function: () => signOut()
    }
]

export default function Header({ name, btnLeft, btnRight }: HeaderProps) {


    const router = useRouter();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar className="!bg-primary" position="sticky" sx={{ top: 0, buttom: 0 }} >
                <Container maxWidth="xl">
                    <Toolbar className="flex justify-end" disableGutters>
                        <Image className="absolute left-1/2 -translate-x-1/2  " src={logo} height={50} alt={"logo"}></Image>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting, index) => (
                                <MenuItem key={index} onClick={handleCloseUserMenu}>
                                    <button onClick={setting.function}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting.name}</Typography>
                                    </button>

                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}