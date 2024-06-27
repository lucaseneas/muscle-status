export const dados = {
    "users": [
      {
        "id": 1,
        "name": "João Silva",
        "email": "joao.silva@example.com",
        "password": "hashedpassword",
        "created_at": "2023-06-01T10:00:00Z"
      }
    ],
    "workouts": [
      {
        "id": 1,
        "user_id": 1,
        "name": "Treino Personalizado",
        "description": "Treino criado pelo personal",
        "created_at": "2023-06-10T12:00:00Z"
      }
    ],
    "workoutSessions": [
      {
        "id": 1,
        "workout_id": 1,
        "name": "A",
        "created_at": "2023-06-10T12:00:00Z"
      },
      {
        "id": 2,
        "workout_id": 1,
        "name": "B",
        "created_at": "2023-06-10T12:00:00Z"
      }
    ],
    "exercises": [
      {
        "id": 1,
        "name": "Supino",
        "description": "Exercício para peito",
        "muscle_group": "Peito"
      },
      {
        "id": 2,
        "name": "Agachamento",
        "description": "Exercício para pernas",
        "muscle_group": "Pernas"
      }
    ],
    "workoutSessionExercises": [
      {
        "id": 1,
        "session_id": 1,
        "exercise_id": 1,
        "sequence": 1
      },
      {
        "id": 2,
        "session_id": 1,
        "exercise_id": 2,
        "sequence": 2
      },
      {
        "id": 3,
        "session_id": 2,
        "exercise_id": 1,
        "sequence": 1
      }
    ],
    "exerciseLogs": [
      {
        "id": 1,
        "user_id": 1,
        "exercise_id": 1,
        "set_number": 1,
        "weight": 50.5,
        "repetitions": 10,
        "log_date": "2023-06-27"
      },
      {
        "id": 2,
        "user_id": 1,
        "exercise_id": 1,
        "set_number": 2,
        "weight": 55.0,
        "repetitions": 8,
        "log_date": "2023-06-27"
      },
      {
        "id": 3,
        "user_id": 1,
        "exercise_id": 2,
        "set_number": 1,
        "weight": 60.0,
        "repetitions": 12,
        "log_date": "2023-06-27"
      },
      {
        "id": 4,
        "user_id": 1,
        "exercise_id": 1,
        "set_number": 1,
        "weight": 55.0,
        "repetitions": 10,
        "log_date": "2023-06-28"
      }
    ]
  }