interface User {
  name: string;
  email: string;
  password: string;
}

interface Dados {
  user: User;
  workout: Workout[];
}

interface Workout {
  name: string;
  whoCreate: string;
  description: string;
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

export const dados: Dados =

{
  "user": {
    "name": "Lucas Eneas",
    "email": "joao.silva@example.com",
    "password": "senhaSegura123"
  },
  "workout": [
    {
      "name": "Treino Lucas",
      "whoCreate": "Lucas",
      "description": "Descrição",
      "workouts": [
        {
          "letter": "A",
          "description": "Peito e Triceps",
          "exercises": [
            {
              "exerciseId": 1,
              "name": "Supino Reto",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 4,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" },{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Supino Inclinado",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 3,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Crucifixo",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 3,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Tríceps Pulley",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 4,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Mergulho em Paralelas",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 3,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Tríceps Francês",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 3,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            }
          ]
        },
        {
          "letter": "B",
          "description": "Costas e Bíceps",
          "exercises": [
            {
              "exerciseId": 1,
              "name": "Barra Fixa",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 4,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Remada Curvada",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 3,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Puxada na Polia",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 3,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Rosca Direta",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 4,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Rosca Martelo",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 3,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Rosca Concentrada",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 3,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            }
          ]
        },
        {
          "letter": "C",
          "description": "Pernas Completos",
          "exercises": [
            {
              "exerciseId": 1,
              "name": "Agachamento Livre",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 4,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Leg Press",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 3,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Extensão de Perna",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 3,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Flexão de Perna",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 4,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Elevação de Panturrilha",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 3,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            },
            {
              "exerciseId": 1,
              "name": "Afundo",
              "description": "15/12 - 12/10 - 10/8 - 8/6",
              "sets": 3,
              "rest": "1 min",
              "weight": [{ "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }, { "weightNumber": "0", "type": "kg", "rep": 0,"lastDate":"2024-06-21" }]
            }
          ]
        }
      ]
    }
  ]
}