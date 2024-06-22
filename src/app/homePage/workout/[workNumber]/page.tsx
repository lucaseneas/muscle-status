
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { dados } from './../../../../data';




export default function workNumber({ params, }: { params: { workNumber: string }; }) {
    return (
        <main className=" h-full">
            
            <Header name={'Treino ' + params.workNumber}></Header>
            
            {dados.workout.map((res, index1) => (
                <div key={index1}>
                    {res.workouts.map((res2, index2) => (
                        <div key={index2}>
                            {res2.letter == params.workNumber && (
                                <div>{res2.exercises.map((res3) => (
                                    <div className="w-screen flex items-center justify-center">
                                        <ul className="flex flex-col w-full p-1">
                                            <li className="border-gray-500 flex flex-row mb-1">
                                                <div className="select-none cursor-pointer w-full bg-gray-300 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
                                                    <div className="flex flex-col gap-0 w-3/4 ">
                                                        <h2 className="font-extrabold">{res3.name}</h2>
                                                        <div className="flex gap-2">
                                                            <h2>Academia:</h2><select className="shadow appearance-none h-7 border rounded w-36 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value="Gaviões">
                                                                <option value='0'>Gaviões</option>
                                                                <option value='1'>Ultra Academia</option>
                                                            </select>
                                                        </div>

                                                        <div className="text-gray-600  text-xs">Obs.: {res3.description}</div>
                                                        {res3.weight.map((res4) => (
                                                            <>
                                                                <div className="flex gap-4 my-2">
                                                                    <h2>Série </h2>
                                                                    <input className="shadow appearance-none border rounded w-14 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder={res4.weightNumber} />
                                                                    <select className="shadow appearance-none border rounded w-10 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={res4.type}>
                                                                        <option value='0'>Kg</option>
                                                                        <option value='1'>Lbs</option>
                                                                        <option value='3'>P</option>
                                                                    </select>
                                                                    <input className="shadow appearance-none border rounded w-14 py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='number' placeholder={res4.rep.toString()} />
                                                                </div>
                                                                <h3 className="text-xs">Ultima mudança em {res4.lastDate}</h3>
                                                            </>
                                                        ))}
                                                    </div>
                                                    <div className="flex flex-col gap-4 w-1/4 items-end pr-2 justify-center">
                                                        <img src='https://img.icons8.com/?size=100&id=111452&format=png&color=000000' className="bg-secondary p-2 rounded-full w-10 h-10 duration-200 hover:scale-125"></img>
                                                        <img src='https://img.icons8.com/?size=100&id=11682&format=png&color=000000' className="bg-secondary p-2 rounded-full w-10 h-10 duration-200 hover:scale-125"></img>
                                                        <img src='https://img.icons8.com/?size=100&id=tximpWD78H0x&format=png&color=000000' className="bg-secondary p-2 rounded-full w-10 h-10 duration-200 hover:scale-125"></img>
                                                        
                                                        
                                                    </div>
                                                    

                                                </div>
                                            </li>
                                        </ul>

                                    </div>
                                ))}</div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
            <Footer></Footer>
        </main>
    )
}