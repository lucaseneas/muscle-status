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
            <AppBar className="!bg-primary" position="sticky">
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
            <Breadcrumbs className="relative left-1/2 -translate-x-1/2 " aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/treinos">
                    Treinos
                </Link>
                <Typography color="text.primary">Sessões</Typography>
            </Breadcrumbs>
            {/*
        <div className="h-20"></div>
            <header className=" w-screen bg-primary h-20 text-white z-20 fixed top-0 left-0 right-0 px-6">
                <div className="h-full w-full relative flex items-center justify-center">

                    {(btnLeft == true) ? (
                        <button className=" flex items-center justify-center" onClick={router.back}>
                            <img src='https://img.icons8.com/?size=100&id=15811&format=png&color=00C2CB' className=" h-10 absolute left-0 hover:brightness-150 bg-primary rounded-full"></img>
                        </button>
                    ) : null}
                    <Image alt='logo' height={80} src={logo} />
                    {(btnRight == true) ? (
                        <IconButton className="!absolute right-0 hover:brightness-150" onClick={() => (signOut())} aria-label="delete">
                            <ExitToAppIcon className='#001F2E'/>
                        </IconButton>
                    ) : null}
                </div>
            </header>
        */}

        </>
    )
}