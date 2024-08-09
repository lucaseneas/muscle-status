import { Button, IconButton } from "@mui/material"
import { signOut } from "next-auth/react"
import Link from "next/link"
import Image from 'next/image'
import { useRouter } from "next/navigation"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"
import logo from "./../../../public/images/mainIcon.png";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

type HeaderProps = {
    name: string
    btnLeft: boolean
}

export default function Header({ name, btnLeft }: HeaderProps) {

    const router = useRouter();
    return (
        <>
            <div className="h-20"></div>
            <header className=" w-screen bg-primary h-20 text-white z-20 fixed top-0 left-0 right-0 px-6">
                <div className="h-full w-full relative flex items-center justify-center">

                    {(btnLeft == true) ? (
                        <button className=" flex items-center justify-center" onClick={router.back}>
                            <img src='https://img.icons8.com/?size=100&id=15811&format=png&color=00C2CB' className=" h-10 absolute left-0 hover:brightness-150 bg-primary rounded-full"></img>
                        </button>
                    ) : null}
                    <Image alt='logo' height={80} src={logo} />
                    <IconButton className="!absolute right-0 hover:brightness-150" onClick={() => (signOut())} aria-label="delete">
                        <ExitToAppIcon className="!text-secondary"  />
                    </IconButton>

                </div>
            </header>
        </>
    )
}