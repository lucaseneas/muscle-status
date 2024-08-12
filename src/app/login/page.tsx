"use client";
import Loading from "@/components/Loading/Loading";
import { LoginData } from "@/types/login";
import { Alert, Button, Collapse } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FormEvent, useState } from "react";



export default function Login() {

  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();


  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const resp = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
    });

    if (resp!.ok) {
      router.push("./treinos")
      localStorage.setItem("teste","teste");
    }
    else {
      const error = resp?.error;
      setOpen(true)
    }
  };

  return (
    <div className="bg-primary flex flex-1 justify-center flex-col items-center  h-screen lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-56 w-auto"
          src='/images/mainIcon.png'
          alt="Your Company"
        />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Entre com sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm  font-medium leading-6 text-white">
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
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                Senha
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-secondary hover:brightness-75">
                  Esqueceu sua senha?
                </a>
              </div>
            </div>
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
          </div>

          <div>
          <Button className="!bg-secondary font-semibold flex w-full justify-center" type="submit" variant="contained">Login</Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Não tem cadastro?{' '}
          <a onClick={()=> router.push("/cadastro")} className="font-semibold leading-6 text-secondary hover:brightness-75">
            Clique aqui e cadastre-se
          </a>
        </p>
      </div>
      <Collapse className=" !absolute bottom-10" in={open}>
        <Alert severity="error">Usuario ou senha incorreta, Tente Novamente</Alert>
        </Collapse>

    </div>


  );
}
