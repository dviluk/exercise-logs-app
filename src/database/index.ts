import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from 'database/schema';
import migrations from 'database/migrations';
import {
  Difficulty,
  Equipment,
  Exercise,
  Muscle,
  PivotExerciseEquipment,
  PivotExerciseMuscle,
  Plan,
  Workout,
  WorkoutLog,
} from './models';

const adapter = new SQLiteAdapter({
  schema,
  // migrations,
  // dbName: 'myapp',
  jsi: true /* Platform.OS === 'ios' */,
  onSetUpError: error => {
    console.error(error);
  },
});

// Then, make a Watermelon database from it!
export const database = new Database({
  adapter,
  modelClasses: [
    Difficulty,
    Equipment,
    Exercise,
    Muscle,
    PivotExerciseEquipment,
    PivotExerciseMuscle,
    Plan,
    Workout,
    WorkoutLog,
  ],
});
