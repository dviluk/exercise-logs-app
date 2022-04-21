import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'difficulties',
      columns: [{name: 'name', type: 'string'}],
    }),
    tableSchema({
      name: 'equipment',
      columns: [{name: 'name', type: 'string'}],
    }),
    tableSchema({
      name: 'exercises',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'exercise_muscle',
      columns: [
        {name: 'muscle_id', type: 'string'},
        {name: 'exercise_id', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'exercise_equipment',
      columns: [
        {name: 'equipment_id', type: 'string'},
        {name: 'exercise_id', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'muscles',
      columns: [{name: 'name', type: 'string'}],
    }),
    tableSchema({
      name: 'plans',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'difficulty_id', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'workouts',
      columns: [
        {name: 'exercise_id', type: 'string'},
        {name: 'plan_id', type: 'string'},
        {name: 'sets', type: 'number'},
        {name: 'rest', type: 'number'},
        {name: 'min_repetitions', type: 'number'},
        {name: 'max_repetitions', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'workout_logs',
      columns: [
        {name: 'workout_id', type: 'string'},
        {name: 'set_number', type: 'number'},
        {name: 'repetitions', type: 'number'},
        {name: 'rested', type: 'number'},
        {name: 'time', type: 'number'},
      ],
    }),
  ],
});
