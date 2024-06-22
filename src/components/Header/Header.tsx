import Link from "next/link"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"

type HeaderProps = {
    name: string
}

export default function Header({ name }: HeaderProps) {
    return (
        <>
        <div className="h-20"></div>
        <header className=" w-screen bg-primary h-20 text-white z-20 fixed top-0 left-0 right-0 px-6">
            <div className="h-full w-full relative flex items-center justify-center">
                <Link className=" flex items-center justify-center" href='./'>
                    <img src='https://img.icons8.com/?size=100&id=15811&format=png&color=00C2CB' className=" h-10 absolute left-0 hover:brightness-150 bg-primary rounded-full"></img>
                </Link>
                <h1 className="text-secondary font-medium text-2xl ">{name}</h1>
            </div>
        </header>
        </>
    )
}