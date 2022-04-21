import {Model, Q} from '@nozbe/watermelondb';
import {children, field, lazy, relation} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import Query from '@nozbe/watermelondb/Query';
import Relation from '@nozbe/watermelondb/Relation';
import Exercise from './Exercise';
import Plan from './Plan';
import WorkoutLog from './WorkoutLog';

export default class Workout extends Model {
  static table = 'workouts';

  static associations: Associations = {
    exercises: {type: 'belongs_to', key: 'exercise_id'},
    plans: {type: 'belongs_to', key: 'plan_id'},
    workout_logs: {type: 'has_many', foreignKey: 'workout_id'},
  };

  @field('exercise_id') exercise_id!: string;
  @field('plan_id') plan_id!: string;
  @field('sets') sets!: number;
  @field('rest') rest!: number;
  @field('min_repetitions') min_repetitions!: number;
  @field('max_repetitions') max_repetitions!: number;

  @children('workout_logs') logs!: Query<WorkoutLog>;
  @relation('exercises', 'exercise_id') exercise!: Relation<Exercise>;
  @relation('plans', 'plan_id') plan!: Relation<Plan>;

  @lazy
  userLogs = (userId: string) => this.logs.extend(Q.where('user_id', userId));
}
