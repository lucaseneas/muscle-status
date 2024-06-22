import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Link from "next/link";
import { dados } from "./../../../data";

const work = [
    {
        id: 1,
        title: 'A',
        description: 'Peito, triceps e Ombro'
    },
    {
        id: 2,
        title: 'B',
        description: 'Costas, Biceps'
    },
    {
        id: 3,
        title: 'C',
        description: 'Cardio + Abdomen'
    },
    {
        id: 4,
        title: 'D',
        description: 'Peito, triceps e Ombro'
    },
    {
        id: 5,
        title: 'E',
        description: 'Costas, Biceps'
    },
    {
        id: 6,
        title: 'F',
        description: 'Perna completo'
    },
    {
        id: 7,
        title: 'G',
        description: 'Cardio + Abdomen'
    }
]

export default function workout() {
    return (
        <main className="h-screen">
            <Header name='Treinos'></Header>

            

            {dados.workout.map((res, map1Index) => (
                <div className="grid grid-cols-3" key={map1Index}>
                    {res.workouts.map((res2, map2Index) => (
                        <Link key={map2Index} href={`/homePage/workout/${res2.letter}`}>
                            <div className="bg-secondary h-28 rounded-md p-2 m-2 flex flex-col items-center justify-center">
                                <h2 className="font-bold text-xl">Treino&nbsp;{res2.letter}</h2>
                                <p className="text-xs">{res2.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            ))
            }


            <Footer></Footer>
        </main>
    )
}