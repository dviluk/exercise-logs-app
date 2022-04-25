declare namespace App {
  namespace Entities {
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
      difficulty_id: string;
      tag_id: string; // to group variants
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
      weeks: number;
      // routines: Workout[];
    }

    interface Routine {
      id: string;
      name: string;
      description: string;
      plan_id: string;
      day: number;
      order: number;
      // workouts: WorkoutRoutine
    }

    interface RoutineWorkout {
      routine_id: string;
      workout_id: string;
    }

    interface Workout {
      id: string;
      exercise_id: string;
      difficulty_id: string;
      plan_id: string;
      sets: number;
      rest: number;
      min_repetitions: number;
      max_repetitions: number;
      // logs?: WorkoutLog[];
    }

    interface WorkoutLog {
      id: string;
      user_id: string;
      workout_id: string;
      plan_id: string;
      user_plan_id: string;
      set_number: number;
      repetitions: number;
      rested: number;
      time: number;
    }

    interface Users {
      //
    }
    interface UserPlans {
      id: string;
      plan_id: string;
      user_id: string;
      progress: number;
      start_date: string;
      end_date: string;
    }

    // Para guardar información de gráficas y no tener que recarlular los valores
    // interface Statistics {}
  }
}
