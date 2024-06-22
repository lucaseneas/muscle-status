import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Link from "next/link"
import {dados} from './../../data'



export default function homePage() {
    
    return (
        

        <main className="h-screen">
            <Header name='Home'></Header>
            <section className="h-auto">
                <ul role="list" className="divide-y  divide-gray-100">
                    {dados.workout.map((res,resIndex) => (
                        <li key={resIndex} className="flex justify-between gap-x-6 py-6">
                            <div className="flex pl-4 min-w-0 gap-x-6">
                                <img className="h-16 w-16 flex-none rounded-full bg-gray-50" src="https://img.icons8.com/?size=100&id=sjh9Yrj8v34Y&format=png&color=000000" alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{res.name}</p>
                                    <p className="mt-1 truncate text-xs leading-7 text-gray-500">Criado por: {res.whoCreate}</p>
                                </div>
                            </div>
                            <div className=" w-1/4 flex flex-col items-center pr-4">
                                <p className="text-sm leading-6 text-gray-900">{res.description}</p>
                                <Link href='/homePage/workout'><button className="bg-secondary rounded-md w-14 h-7">Ver</button></Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <button className="bg-secondary p-1 w-14 h-14 rounded-full flex items-center justify-center font-semibold fixed right-7 bottom-28">
                <img src='https://img.icons8.com/?size=100&id=98&format=png&color=000000'/>
            </button>
            <Footer></Footer>

        </main>

    )
}
