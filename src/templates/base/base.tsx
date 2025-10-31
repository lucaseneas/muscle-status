import { metadata } from "@/app/metadata";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Loading from "@/components/Loading/Loading";
import { stat } from "fs";
import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { Router } from "next/router";
import React, { Suspense, useState } from "react";
import { useEffect } from "react";


type Props = {
    children: React.ReactNode;
};

export const Base = ({ children }: Props) => {

    const router = useRouter();
    const { data: session,status } = useSession()


useEffect(() => {
    if (status === "unauthenticated") {
        console.log("redirect unauthenticated")
        router.push('/login')
    }
    if (status === "authenticated") {
        console.log(status)
        console.log(session)
        console.log("redirect authenticated")
        
        const expires = session?.expires;
        console.log(new Date(expires) + "  "+new Date())
        if (expires) {
            const expired = new Date(expires) <= new Date();
            if (expired) {
                // encerra sessão e manda pro login
                signOut({ redirect: false }).then(() => router.push('/login'));
                console.log("session expired, redirecting to login");
            }
        }
    }

}, [status, router, session]);


    const pathname = usePathname();

    useEffect(() => {
        console.log('Rota mudou para:', pathname);
    }, [pathname]);

    return (
        <>
            <div className="h-screen">
                {(status == "authenticated") ? (
                    <Header btnLeft={true} btnRight={true} name={metadata.pageTitle}></Header>
                ) : null}
                <div className=" h-full box-border overflow-y-auto">
                    {children}
                </div>
                {(status == "authenticated") ? (
                    <Footer></Footer>
                ) : null}
            </div>
        </>
    )
}