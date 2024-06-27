interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  userImgUrl: string;
  trainingPlan: TrainingPlan[];
}

interface TrainingPlan {
  trainingPlanId: number;
  name: string;
  whoCreate: string;
  description: string;
  creationDate: string;
  imgUrl: string;
  workouts: Workouts[];
}

interface Workouts {
  letter: string;
  description: string;
  exercises: Exercises[];
}

interface Exercises {
  exerciseId: number;
  name: string;
  description: string;
  sets: number;
  rest: string;
  weight: Weight[];
}

interface Weight {
  weightNumber: string;
  type: string;
  rep: number;
  lastDate: string;
}

interface Dados {
  users: User[];
}

export const dados: Dados = {
  users: [
    {
      id:1,
      name: "Lucas Eneas",
      email: "joao.silva@example.com",
      password: "senhaSegura123",
      userImgUrl : "Foto",
      trainingPlan: [
        {
          trainingPlanId: 1,
          name: "Treino Lucas",
          whoCreate: "Lucas",
          description: "Descrição",
          creationDate: "2024-06-21",
          imgUrl: "https://img.icons8.com/?size=100&id=sjh9Yrj8v34Y&format=png&color=000000",
          workouts: [
            {
              letter: "A",
              description: "Peito e Triceps",
              exercises: [
                {
                  exerciseId: 1,
                  name: "Supino Reto",
                  description: "15/12 - 12/10 - 10/8 - 8/6",
                  sets: 4,
                  rest: "1 min",
                  weight: [
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" }
                  ]
                },
                {
                  exerciseId: 2,
                  name: "Supino Inclinado",
                  description: "15/12 - 12/10 - 10/8 - 8/6",
                  sets: 3,
                  rest: "1 min",
                  weight: [
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" }
                  ]
                }
              ]
            },{
              letter: "B",
              description: "Peito e Triceps",
              exercises: [
                {
                  exerciseId: 1,
                  name: "Supino Reto",
                  description: "15/12 - 12/10 - 10/8 - 8/6",
                  sets: 4,
                  rest: "1 min",
                  weight: [
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" }
                  ]
                },
                {
                  exerciseId: 2,
                  name: "Supino Inclinado",
                  description: "15/12 - 12/10 - 10/8 - 8/6",
                  sets: 3,
                  rest: "1 min",
                  weight: [
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" },
                    { weightNumber: "0", type: "kg", rep: 0, lastDate: "2024-06-21" }
                  ]
                }
              ]
            }
          ]
        }
      ]
      
    },
    
  ]
};