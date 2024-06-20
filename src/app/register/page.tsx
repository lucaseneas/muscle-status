import Link from "next/link";

function registerPage() {
    return (
        <main className="h-screen overflow-hidden">
            <header className=" w-screen bg-primary h-24 text-white fixed top-0 left-0 right-0 px-6">
                <div className="h-full w-full relative flex items-center justify-center">
                    <Link className=" flex items-center justify-center" href='./'><img src='https://img.icons8.com/?size=100&id=15811&format=png&color=00C2CB' className=" h-10 absolute left-0 hover:brightness-150 bg-primary rounded-full"></img></Link> <h1 className="text-secondary font-medium text-2xl ">Cadastre-se</h1>
                </div>
            </header>

            <div className="mt-20 p-12">
                <h2 className="text-start text-2xl font-bold leading-9 tracking-tight text-black mb-8">
                    Insira os seus dados
                </h2>
                <form className="space-y-6" action="#" method="POST">
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
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:brightness-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Cadastre-se
                    </button>
                </form>

            </div>

        </main>

    )
}

export default registerPage;

