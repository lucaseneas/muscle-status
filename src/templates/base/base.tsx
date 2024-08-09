import { metadata } from "@/app/metadata";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { stat } from "fs";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { Router } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";


type Props = {
    children: React.ReactNode;
};

export const Base = ({ children }: Props) => {

    const router = useRouter();
    const { status } = useSession()


    useEffect(() => {
        if (status === "unauthenticated") {

            console.log("redirect")
            router.push("/login")
        }
        if (status === "authenticated") {

            console.log("redirect")
            router.push("/treinos")
        }
        console.log(status)
    }, [status, router]);

    return (
        <>
            {(status == "authenticated") ? (
                <Header btnLeft={true} name={metadata.pageTitle}></Header>
            ) : null}
            {children}
            {(status == "authenticated") ? (
                <Footer></Footer>
            ) : null}
        </>
    )
}