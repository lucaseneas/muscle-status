"use client";
import Header from "@/components/Header/Header";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useUserService } from "../services/user.services";
import { User } from "@/types/user";
import { Button, TextField } from "@mui/material";

export default function registerPage() {
    const userService = useUserService();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        const user:User = {email: email, name: name, password: password, role: "USER"}
        userService.create(user)
      };

    return (
        <main className="h-screen overflow-hidden">
            <Header name='Cadastre-se' btnLeft={true} />

            <div className=" p-12">
                <h2 className="text-start text-2xl font-bold leading-9 tracking-tight text-black mb-8">
                    Insira os seus dados
                </h2>
                <form onSubmit={handleRegister} className="space-y-6" >
                    <div>
                        <label htmlFor="email" className="block text-sm  font-medium leading-6 text-black">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <label htmlFor="name" className="block text-sm  font-medium leading-6 text-black">
                            Nome
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="name"
                                autoComplete="name"
                                required
                                onChange={(e) => setName(e.target.value)}
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                            Senha
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                            Confirme sua senha
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <Button className="!bg-secondary font-semibold flex w-full justify-center" type="submit" variant="contained">Cadastre-se</Button>
                </form>

            </div>



        </main>

    )
}



