declare namespace App {
  namespace Models {
    interface Difficulty {
      id: string;
      name: string;
    }

    interface Equipment {
      id: string;
      name: string;
    }

    interface Exercise {
      id: string;
      name: string;
      description: string;
      // muscles: Muscle[];
      // equipment: Equipment[];
    }

    interface Muscle {
      id: string;
      name: string;
    }

    interface Plans {
      id: string;
      name: string;
      difficulty_id: string;
      description: string;
      // workouts: Workout[];
    }

    interface Workout {
      id: string;
      exercise_id: string;
      plan_id: string;
      sets: number;
      rest: number;
      min_repetitions: number;
      max_repetitions: number;
      // logs?: WorkoutLog[];
      // userLogs?: WorkoutLog[];
    }

    interface WorkoutLog {
      id: string;
      workout_id: string;
      set_number: number;
      repetitions: number;
      rested: number;
      time: number;
    }
  }
}
